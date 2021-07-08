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
Object.defineProperty(exports, "__esModule", { value: true });
const kleur_1 = require("kleur");
const settings_1 = require("../settings");
const blocks_line_1 = require("./blocks.line");
const util_1 = require("../util");
// Auto Settings display
exports.CREATE_BLOCK_SETTINGS = (obj, settings = settings_1.defaultSettings, config = null) => __awaiter(void 0, void 0, void 0, function* () {
    settings = settings_1.useSettings(settings);
    let settingLines = [];
    let lines = [];
    yield util_1.asyncForEach(Object.keys(obj), (value) => {
        let styledValue = util_1.stylizeValue(obj[value]);
        let error = false;
        ["src", "dest", "template"].includes(value) &&
            !obj[value] &&
            (error = true);
        if (error)
            styledValue = `${kleur_1.red("×")} ${styledValue}`;
        if ((config && config.exclude && !config.exclude.includes(value)) ||
            !config ||
            (!config.exclude && !config.include) ||
            (config && config.include && config.include.includes(value)))
            settingLines.push(`${kleur_1.bold(value)}${util_1.spaces(20, value)}${styledValue}`);
    });
    lines.push(blocks_line_1.CREATE_BLOCK_LINE(null, settings)[0]);
    settingLines.forEach((line) => {
        lines.push(blocks_line_1.CREATE_BLOCK_LINE(line, settings)[0]);
    });
    lines.push(blocks_line_1.CREATE_BLOCK_LINE(null, settings)[0]);
    return lines;
});
exports.BLOCK_SETTINGS = (obj, settings = settings_1.defaultSettings, config = null) => __awaiter(void 0, void 0, void 0, function* () {
    const lines = yield exports.CREATE_BLOCK_SETTINGS(obj, settings, config);
    lines.forEach((line) => util_1.LOGG(line, settings));
});
//# sourceMappingURL=blocks.settings.js.map