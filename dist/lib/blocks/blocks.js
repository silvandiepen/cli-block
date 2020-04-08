"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const border_1 = require("../border");
const settings_1 = require("../settings");
const kleur_1 = require("kleur");
const mono_str_width_1 = __importDefault(require("mono-str-width"));
exports.FRAME_WIDTH = process.stdout.columns <
    settings_1.defaultSettings.frameWidth + settings_1.defaultSettings.indentBlock * 2 + 2
    ? process.stdout.columns - settings_1.defaultSettings.indentBlock * 2
    : settings_1.defaultSettings.frameWidth;
exports.PADDING = exports.FRAME_WIDTH / 10;
exports.CONTENT_WIDTH = exports.FRAME_WIDTH - exports.PADDING * 2;
// LOGGER. Can be switched off
const LOGG = (v = "") => (v ? console.log(v) : console.log());
// Start the code with a block with a title.
exports.START = (msg, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    LOGG("\n");
    LOGG(helpers_1.spaces(exports.PADDING + settings.indentBlock) + kleur_1.bgBlue().black(" " + msg + " "));
    LOGG("\n");
};
// The basic line.
exports.BLOCK_LINE = (msg = null, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    if (msg == null) {
        LOGG(helpers_1.spaces(settings.indentBlock) +
            border_1.border("side", settings) +
            helpers_1.spaces(exports.FRAME_WIDTH) +
            border_1.border("side", settings));
        return;
    }
    if (typeof msg == "string")
        msg = helpers_1.breakText(msg, exports.CONTENT_WIDTH);
    msg.forEach((txt, i) => {
        if (i == 0)
            txt = `${settings.prefix ? settings.prefix + " " : ""}${txt}`;
        else
            txt = `${settings.prefix ? helpers_1.spaces(mono_str_width_1.default(settings.prefix)) + " " : ""}${txt}`;
        LOGG(helpers_1.spaces(settings.indentBlock) +
            border_1.border("side", settings) +
            helpers_1.spaces(exports.PADDING) +
            helpers_1.spacedText(exports.CONTENT_WIDTH, txt) +
            helpers_1.spaces(exports.PADDING) +
            border_1.border("side", settings));
    });
};
// lINE With auto checkmark for success
exports.EMPTY = (msg) => {
    LOGG();
};
exports.BLOCK_ROW_LINE = (arr, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    let str = "";
    arr = arr.map((item) => helpers_1.toStringValue(item));
    let COLUMN_WIDTH = Math.floor(exports.CONTENT_WIDTH / arr.length) - 1;
    arr.forEach((item) => {
        str = str + helpers_1.spacedText(COLUMN_WIDTH, item.toString());
    });
    exports.BLOCK_LINE(str);
};
// lINE With auto checkmark for success
exports.BLOCK_LINE_SUCCESS = (msg, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    settings.prefix = kleur_1.green("✔");
    exports.BLOCK_LINE(msg, settings);
};
// LINE with auto X for errors
exports.BLOCK_LINE_ERROR = (msg, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    settings.prefix = kleur_1.red("×");
    exports.BLOCK_LINE(msg, settings);
};
// LINE with auto ! for warnings
exports.BLOCK_LINE_WARNING = (msg, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    settings.prefix = kleur_1.yellow("!");
    exports.BLOCK_LINE(msg, settings);
};
// The Start block
exports.BLOCK_START = (txt = "", settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    if (txt)
        LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("topStart", settings)}${helpers_1.repeat(Math.floor(exports.FRAME_WIDTH / 3), border_1.border("line", settings))}${helpers_1.centerText(kleur_1.bold(txt), exports.FRAME_WIDTH - Math.floor(exports.FRAME_WIDTH / 3) * 2)}${helpers_1.repeat(Math.floor(exports.FRAME_WIDTH / 3), border_1.border("line", settings))}${border_1.border("topEnd", settings)}`);
    else
        LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("topStart", settings)}${helpers_1.repeat(exports.FRAME_WIDTH, border_1.border("line", settings))}${border_1.border("topEnd", settings)}`);
    exports.BLOCK_LINE();
};
// A Mid Block Line
exports.BLOCK_MID = (txt = null, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    if (txt)
        LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("midStart", settings)}${helpers_1.repeat(Math.floor(exports.FRAME_WIDTH / 3), border_1.border("midLine", settings))}${helpers_1.centerText(kleur_1.bold(txt), exports.FRAME_WIDTH - Math.floor(exports.FRAME_WIDTH / 3) * 2)}${helpers_1.repeat(Math.floor(exports.FRAME_WIDTH / 3), `${border_1.border("midLine", settings)}`)}${border_1.border("midEnd", settings)}`);
    else
        LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("midStart", settings)}${helpers_1.repeat(exports.FRAME_WIDTH, border_1.border("midLine", settings))}${border_1.border("midEnd", settings)}`);
    exports.BLOCK_LINE();
};
// Closing Block
exports.BLOCK_END = (txt, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    exports.BLOCK_LINE(null, settings);
    LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("bottomStart", settings)}${helpers_1.repeat(exports.FRAME_WIDTH, `${border_1.border("line", settings)}`)}${border_1.border("bottomEnd", settings)}`);
};
// Auto Settings display
exports.BLOCK_SETTINGS = (obj, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    let lines = [];
    yield helpers_1.asyncForEach(Object.keys(obj), (value) => {
        let styledValue = helpers_1.stylelizeValue(obj[value]);
        let error;
        switch (value) {
            case "src":
            case "dest":
            case "template":
                if (obj[value] == false && obj[value] !== null)
                    error = true;
                break;
            default:
                error = false;
                break;
        }
        if (error)
            styledValue = `${kleur_1.red("×")} ${styledValue}`;
        let settingLine = `${kleur_1.bold(value)}${helpers_1.spaces(20, value)}${styledValue}`;
        lines.push(settingLine);
    });
    exports.BLOCK_LINE(null, settings);
    lines.forEach((line) => {
        exports.BLOCK_LINE(line, settings);
    });
    exports.BLOCK_LINE(null, settings);
});
exports.BLOCK_WARNINGS = (warning, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    if (!warning || warning.length < 1)
        return false;
    exports.BLOCK_LINE(null, settings);
    exports.BLOCK_MID(`${kleur_1.yellow("! Warnings")}`, settings);
    warning.forEach((error) => {
        exports.BLOCK_LINE_WARNING(error, settings);
    });
};
exports.BLOCK_ERRORS = (error, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings), settings_1.defaultSettings);
    if (!error || error.length < 1)
        return false;
    exports.BLOCK_LINE(null, settings);
    exports.BLOCK_MID(`${kleur_1.red("× Errors")}`, settings);
    error.forEach((error) => {
        exports.BLOCK_LINE_ERROR(error, settings);
    });
    exports.BLOCK_END(null, settings);
    process.exit();
};
//# sourceMappingURL=blocks.js.map