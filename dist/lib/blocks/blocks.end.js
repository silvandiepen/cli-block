"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../settings");
const util_1 = require("../util");
const border_1 = require("../border");
const border_model_1 = require("../border/border.model");
const kleur_1 = require("kleur");
const blocks_line_1 = require("./blocks.line");
// Closing Block
exports.CREATE_BLOCK_END = (txt = null, settings = settings_1.defaultSettings) => {
    settings = settings_1.useSettings(settings);
    let lines = [];
    settings.autoSpace && lines.push(blocks_line_1.CREATE_BLOCK_LINE(null, settings)[0]);
    if (txt)
        lines.push(`${util_1.spaces(settings.indentBlock)}${border_1.border(border_model_1.BorderElement.bottomStart, settings)}${util_1.repeat(Math.floor(settings_1.getFrameWidth(settings) / 3), border_1.border(border_model_1.BorderElement.endLine, settings))}${util_1.centerText(kleur_1.bold(txt), settings_1.getFrameWidth(settings) - Math.floor(settings_1.getFrameWidth(settings) / 3) * 2)}${util_1.repeat(Math.floor(settings_1.getFrameWidth(settings) / 3), `${border_1.border(border_model_1.BorderElement.endLine, settings)}`)}${border_1.border(border_model_1.BorderElement.bottomEnd, settings)}`);
    else
        lines.push(`${util_1.spaces(settings.indentBlock)}${border_1.border(border_model_1.BorderElement.bottomStart, settings)}${util_1.repeat(settings_1.getFrameWidth(settings), `${border_1.border(border_model_1.BorderElement.endLine, settings)}`)}${border_1.border(border_model_1.BorderElement.bottomEnd, settings)}`);
    return lines;
};
exports.BLOCK_END = (txt = null, settings = settings_1.defaultSettings) => {
    let lines = exports.CREATE_BLOCK_END(txt, settings);
    lines.forEach((line) => util_1.LOGG(line, settings));
};
//# sourceMappingURL=blocks.end.js.map