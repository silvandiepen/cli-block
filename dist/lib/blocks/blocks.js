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
const readline_1 = __importDefault(require("readline"));
const highlight = require("cli-highlight").highlight;
const border_1 = require("../border");
const settings_1 = require("../settings");
const kleur_1 = require("kleur");
const mono_str_width_1 = __importDefault(require("mono-str-width"));
const settings_2 = require("../settings");
exports.BLOCK_LOADER = (args = {}, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    let config = Object.assign({ message: "[percentage] [loader]", increment: 1, width: "100%", start: 0, end: 100, interval: 25, charFilled: "▒", charUnfilled: "░" }, args);
    let i = config.start;
    const countDown = config.start > config.end;
    const loadBar = () => {
        const width = config.width == "100%"
            ? settings_2.getContentWidth() - 7
            : ((config.end - config.start) *
                (typeof config.width == "string"
                    ? parseInt(config.width)
                    : config.width)) /
                100;
        const step = Math.round(((100 / i ? i : 1) * width) / 100);
        const filled = Math.floor(width - (width - step));
        let unfilled = Math.floor(width - step);
        if (filled + unfilled !== width)
            unfilled = unfilled + 1;
        const msg = `${helpers_1.repeat(filled, config.charFilled)}${helpers_1.repeat(unfilled, config.charUnfilled)}`;
        return msg;
    };
    const loaderAction = () => {
        exports.CLEAR();
        const loader = loadBar();
        const percentage = `${i}%`;
        let message = config.message
            .replace("[loader]", loader)
            .replace("[percentage]", helpers_1.spacedText(4, percentage));
        i = countDown ? i - config.increment : i + config.increment;
        exports.BLOCK_LINE(message, Object.assign(Object.assign({}, settings), { newLine: false }));
    };
    loaderAction();
    return yield new Promise((resolve) => {
        let count = setInterval(() => {
            loaderAction();
            const isEnding = countDown ? i >= config.end - 1 : i >= config.end + 1;
            if (isEnding) {
                exports.NEW_LINE();
                resolve();
                clearInterval(count);
            }
        }, config.interval);
    });
});
exports.BLOCK_COUNTER = (args = {}, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const config = Object.assign({ message: "My message [count] to go", increment: 1, start: 0, end: 100, interval: 100 }, args);
    // Define variables
    let i = config.start;
    let step = 0;
    const messageCount = ((_a = config.messages) === null || _a === void 0 ? void 0 : _a.length) || 0;
    const stepsCount = (config.start > config.end
        ? config.start - config.end + 1
        : config.end - config.start + 1) / config.increment;
    const doSteps = messageCount > 0 && messageCount == stepsCount;
    const countDown = config.start > config.end;
    // Prepare action
    const counterAction = () => {
        exports.CLEAR();
        let message = doSteps
            ? config.messages[step].replace("[count]", i.toString())
            : config.message.replace("[count]", i.toString());
        exports.BLOCK_LINE(message, Object.assign(Object.assign({}, settings), { newLine: i == config.end }));
        i = countDown ? i - config.increment : i + config.increment;
        doSteps && step++;
    };
    counterAction();
    // Do the Interval
    return yield new Promise((resolve) => {
        let count = setInterval(() => {
            counterAction();
            const isEnding = (countDown ? i == config.end - 1 : i == config.end + 1) ||
                (doSteps && step == stepsCount);
            if (isEnding) {
                // if (countDown) NEW_LINE();
                resolve();
                clearInterval(count);
            }
        }, config.interval);
    });
    // return;
});
// LOGGER. Can be switched off
const LOGG = (v = "", settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
    if (settings.newLine)
        v ? process.stdout.write(v + "\n") : process.stdout.write("\n");
    else
        v ? process.stdout.write(v) : process.stdout.write("");
};
exports.CLEAR = () => {
    process.stdout.clearLine(null);
    process.stdout.cursorTo(0);
};
exports.NEW_LINE = () => process.stdout.write("\n");
exports.RENEW_LINE = (msg) => {
    readline_1.default.cursorTo(process.stdout, 0);
    process.stdout.write(`${msg}`);
};
// Start the code with a block with a title.
exports.START = (msg, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings_2.useSettings(settings)), { borderColor: "blue" });
    exports.EMPTY();
    // BLOCK_START(null, settings);
    LOGG(`${helpers_1.spaces(settings.indentBlock)} ${kleur_1.bold().blue(msg)}`, settings);
    // BLOCK_END(null, settings);
    exports.EMPTY();
};
// The basic line.
exports.BLOCK_LINE = (msg = null, settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
    if (msg == null) {
        LOGG(helpers_1.spaces(settings.indentBlock) +
            border_1.border("side", settings) +
            helpers_1.spaces(settings_2.getFrameWidth(settings)) +
            border_1.border("side", settings), settings);
        return;
    }
    if (typeof msg == "string")
        msg = helpers_1.breakText(msg, settings_2.getContentWidth(settings));
    msg.forEach((txt, i) => {
        if (i == 0)
            txt = `${settings.prefix ? settings.prefix + " " : ""}${txt}`;
        else
            txt = `${settings.prefix ? helpers_1.spaces(mono_str_width_1.default(settings.prefix)) + " " : ""}${txt}`;
        LOGG(helpers_1.spaces(settings.indentBlock) +
            border_1.border("side", settings) +
            helpers_1.spaces(settings_2.getPadding(settings)) +
            helpers_1.spacedText(settings_2.getContentWidth(settings), txt) +
            helpers_1.spaces(settings_2.getPadding(settings)) +
            border_1.border("side", settings), settings);
    });
};
// lINE With auto checkmark for success
exports.EMPTY = (msg = "", settings = settings_1.defaultSettings) => {
    LOGG(null, settings);
};
exports.BLOCK_ROW_LINE = (arr, settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
    let str = "";
    arr = arr.map((item) => helpers_1.toStringValue(item));
    let COLUMN_WIDTH = Math.floor(settings_2.getContentWidth(settings) / arr.length) - 1;
    arr.forEach((item) => {
        str = str + helpers_1.spacedText(COLUMN_WIDTH, item.toString());
    });
    exports.BLOCK_LINE(str, settings);
};
// lINE With auto checkmark for success
exports.BLOCK_LINE_SUCCESS = (msg, settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
    settings.prefix = kleur_1.green("✔");
    exports.BLOCK_LINE(msg, settings);
};
// LINE with auto X for errors
exports.BLOCK_LINE_ERROR = (msg, settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
    settings.prefix = kleur_1.red("×");
    exports.BLOCK_LINE(msg, settings);
};
// LINE with auto ! for warnings
exports.BLOCK_LINE_WARNING = (msg, settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
    settings.prefix = kleur_1.yellow("!");
    exports.BLOCK_LINE(msg, settings);
};
// The Start block
exports.BLOCK_START = (txt = "", settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
    if (txt)
        LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("topStart", settings)}${helpers_1.repeat(Math.floor(settings_2.getFrameWidth(settings) / 3), border_1.border("startLine", settings))}${helpers_1.centerText(kleur_1.bold(txt), settings_2.getFrameWidth(settings) - Math.floor(settings_2.getFrameWidth(settings) / 3) * 2)}${helpers_1.repeat(Math.floor(settings_2.getFrameWidth(settings) / 3), border_1.border("startLine", settings))}${border_1.border("topEnd", settings)}`, settings);
    else
        LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("topStart", settings)}${helpers_1.repeat(settings_2.getFrameWidth(settings), border_1.border("startLine", settings))}${border_1.border("topEnd", settings)}`, settings);
    settings.autoSpace && exports.BLOCK_LINE(null, settings);
};
// A Mid Block Line
exports.BLOCK_MID = (txt = null, settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
    settings.autoSpace && exports.BLOCK_LINE(null, settings);
    if (txt)
        LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("midStart", settings)}${helpers_1.repeat(Math.floor(settings_2.getFrameWidth(settings) / 3), border_1.border("midLine", settings))}${helpers_1.centerText(kleur_1.bold(txt), settings_2.getFrameWidth(settings) - Math.floor(settings_2.getFrameWidth(settings) / 3) * 2)}${helpers_1.repeat(Math.floor(settings_2.getFrameWidth(settings) / 3), `${border_1.border("midLine", settings)}`)}${border_1.border("midEnd", settings)}`, settings);
    else
        LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("midStart", settings)}${helpers_1.repeat(settings_2.getFrameWidth(settings), border_1.border("midLine", settings))}${border_1.border("midEnd", settings)}`, settings);
    settings.autoSpace && exports.BLOCK_LINE(null, settings);
};
// Closing Block
exports.BLOCK_END = (txt = null, settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
    settings.autoSpace && exports.BLOCK_LINE(null, settings);
    if (txt)
        LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("bottomStart", settings)}${helpers_1.repeat(Math.floor(settings_2.getFrameWidth(settings) / 3), border_1.border("endLine", settings))}${helpers_1.centerText(kleur_1.bold(txt), settings_2.getFrameWidth(settings) - Math.floor(settings_2.getFrameWidth(settings) / 3) * 2)}${helpers_1.repeat(Math.floor(settings_2.getFrameWidth(settings) / 3), `${border_1.border("endLine", settings)}`)}${border_1.border("bottomEnd", settings)}`, settings);
    else
        LOGG(`${helpers_1.spaces(settings.indentBlock)}${border_1.border("bottomStart", settings)}${helpers_1.repeat(settings_2.getFrameWidth(settings), `${border_1.border("endLine", settings)}`)}${border_1.border("bottomEnd", settings)}`, settings);
};
exports.BLOCK_TABLE = (table, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    settings = settings_2.useSettings(settings);
    const getTableWidth = (table) => {
        let height = 1;
        table.forEach((item) => {
            if (typeof item == "object" && height < item.length)
                height = item.length;
        });
        return height;
    };
    const totalWidth = settings_2.getContentWidth(settings);
    const width = Math.floor(settings_2.getContentWidth(settings) / getTableWidth(table)) - 2;
    // Check if all tables
    table = table.map((item) => typeof item == "string" ? (item = [item]) : (item = item));
    settings.tableSpace && (table = [[], ...table, []]);
    settings.tableHeader && table.splice(2, 0, []);
    // for (let r = 0; r < table.length; r++) {
    table = table.map((row) => {
        return (row = [
            ...row,
            ...new Array(getTableWidth(table) - row.length),
        ]).map((i) => i == undefined
            ? (i = helpers_1.spacedText(width, ""))
            : (i = helpers_1.spacedText(width, helpers_1.stylizeValue(i))));
    });
    settings.tableHeader &&
        (table[1] = table[1].map((item) => (item = `${kleur_1.bold(item)}`)));
    table.forEach((row) => {
        exports.BLOCK_LINE(row.join(` ${border_1.border("side", settings)} `), settings);
    });
});
exports.BLOCK_JSON = (obj, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    settings = settings_2.useSettings(settings);
    const text = highlight(JSON.stringify(obj, null, "\t"), {
        language: "json",
        ignoreIllegals: true,
    });
    const lines = text.split("\n");
    exports.BLOCK_LINE(null, settings);
    lines.forEach((line) => {
        exports.BLOCK_LINE(line.replace(/\t/g, " "), settings);
    });
    exports.BLOCK_LINE(null, settings);
});
// Auto Settings display
exports.BLOCK_SETTINGS = (obj, settings = settings_1.defaultSettings, config = null) => __awaiter(void 0, void 0, void 0, function* () {
    settings = settings_2.useSettings(settings);
    let lines = [];
    yield helpers_1.asyncForEach(Object.keys(obj), (value) => {
        let styledValue = helpers_1.stylizeValue(obj[value]);
        let error;
        switch (value) {
            case "src":
            case "dest":
            case "template":
                if (!obj[value])
                    error = true;
                break;
            default:
                error = false;
                break;
        }
        if (error)
            styledValue = `${kleur_1.red("×")} ${styledValue}`;
        if ((config && config.exclude && !config.exclude.includes(value)) ||
            !config ||
            (!config.exclude && !config.include) ||
            (config && config.include && config.include.includes(value)))
            lines.push(`${kleur_1.bold(value)}${helpers_1.spaces(20, value)}${styledValue}`);
    });
    exports.BLOCK_LINE(null, settings);
    lines.forEach((line) => {
        exports.BLOCK_LINE(line, settings);
    });
    exports.BLOCK_LINE(null, settings);
});
exports.BLOCK_WARNINGS = (warning, settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
    if (!warning || warning.length < 1)
        return false;
    exports.BLOCK_LINE(null, settings);
    exports.BLOCK_MID(`${kleur_1.yellow("! Warnings")}`, settings);
    warning.forEach((error) => {
        exports.BLOCK_LINE_WARNING(error, settings);
    });
};
exports.BLOCK_ERRORS = (error, settings = settings_1.defaultSettings) => {
    settings = settings_2.useSettings(settings);
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