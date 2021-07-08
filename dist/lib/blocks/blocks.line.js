"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const border_1 = require("../border");
const border_model_1 = require("../border/border.model");
const settings_1 = require("../settings");
const util_1 = require("../util");
exports.CREATE_BLOCK_LINE = (msg = null, settings = settings_1.defaultSettings) => {
    settings = settings_1.useSettings(settings);
    let lines = [];
    if (msg !== null) {
        if (typeof msg == "string")
            msg = util_1.breakText(msg, settings_1.getContentWidth(settings));
        msg.forEach((txt, i) => {
            txt =
                i == 0
                    ? `${settings.prefix ? settings.prefix + " " : ""}${txt}`
                    : `${settings.prefix ? util_1.spaces(util_1.strWidth(settings.prefix)) + " " : ""}${txt}`;
            lines.push(util_1.spaces(settings.indentBlock) +
                border_1.border(border_model_1.BorderElement.side, settings) +
                util_1.spaces(settings_1.getPadding(settings)) +
                util_1.spacedText(settings_1.getContentWidth(settings), txt) +
                util_1.spaces(settings_1.getPadding(settings)) +
                border_1.border(border_model_1.BorderElement.side, settings));
        });
    }
    else {
        lines = [
            `${util_1.spaces(settings.indentBlock)}${border_1.border(border_model_1.BorderElement.side, settings)}${util_1.spaces(settings_1.getFrameWidth(settings))}${border_1.border(border_model_1.BorderElement.side, settings)}`,
        ];
    }
    return lines;
};
/*
  
    BLOCK LINE
  
  */
exports.BLOCK_LINE = (msg = null, settings = settings_1.defaultSettings) => {
    settings = settings_1.useSettings(settings);
    const lines = exports.CREATE_BLOCK_LINE(msg, settings);
    lines.forEach((txt) => {
        util_1.LOGG(txt, settings);
    });
};
//# sourceMappingURL=blocks.line.js.map