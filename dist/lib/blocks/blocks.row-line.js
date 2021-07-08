"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../settings");
const util_1 = require("../util");
const blocks_line_1 = require("./blocks.line");
/*

  BLOCK ROW LINE

*/
exports.CREATE_BLOCK_ROW_LINE = (arr, settings = settings_1.defaultSettings) => {
    settings = settings_1.useSettings(settings);
    let str = "";
    arr = arr.map((item) => util_1.toStringValue(item));
    let COLUMN_WIDTH = Math.floor(settings_1.getContentWidth(settings) / arr.length) - 1;
    arr.forEach((item) => {
        str = str + util_1.spacedText(COLUMN_WIDTH, item.toString());
    });
    return blocks_line_1.CREATE_BLOCK_LINE(str);
};
exports.BLOCK_ROW_LINE = (arr, settings = settings_1.defaultSettings) => exports.CREATE_BLOCK_ROW_LINE(arr, settings).forEach((line) => util_1.LOGG(line, settings));
//# sourceMappingURL=blocks.row-line.js.map