"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kleur_1 = require("kleur");
const border_1 = require("../border");
const border_model_1 = require("../border/border.model");
const settings_1 = require("../settings");
const util_1 = require("../util");
// Start the code with a block with a title.
exports.START = (msg, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings_1.useSettings(settings)), { borderColor: border_model_1.BorderColor.blue });
    util_1.EMPTY();
    util_1.LOGG(`${util_1.spaces(settings.indentBlock)} ${kleur_1.bold().blue(msg)}`, settings);
    util_1.EMPTY();
};
// The Start block
exports.CREATE_BLOCK_START = (txt = "", settings = settings_1.defaultSettings) => {
    settings = settings_1.useSettings(settings);
    if (txt !== "") {
        return [
            `${util_1.spaces(settings.indentBlock)}${border_1.border(border_model_1.BorderElement.topStart, settings)}${util_1.repeat(Math.floor(settings_1.getFrameWidth(settings) / 3), border_1.border(border_model_1.BorderElement.startLine, settings))}${util_1.centerText(kleur_1.bold(txt), settings_1.getFrameWidth(settings) - Math.floor(settings_1.getFrameWidth(settings) / 3) * 2)}${util_1.repeat(Math.floor(settings_1.getFrameWidth(settings) / 3), border_1.border(border_model_1.BorderElement.startLine, settings))}${border_1.border(border_model_1.BorderElement.topEnd, settings)}`,
        ];
    }
    else {
        return [
            `${util_1.spaces(settings.indentBlock)}${border_1.border(border_model_1.BorderElement.topStart, settings)}${util_1.repeat(settings_1.getFrameWidth(settings), border_1.border(border_model_1.BorderElement.startLine, settings))}${border_1.border(border_model_1.BorderElement.topEnd, settings)}`,
        ];
    }
};
exports.BLOCK_START = (value = "", settings = settings_1.defaultSettings) => {
    settings = settings_1.useSettings(settings);
    settings.autoSpace && util_1.LOGG(exports.CREATE_BLOCK_START(value, settings)[0], settings);
};
//# sourceMappingURL=blocks.start.js.map