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
const border_1 = require("../border");
const border_model_1 = require("../border/border.model");
const settings_1 = require("../settings");
const util_1 = require("../util");
const blocks_line_1 = require("./blocks.line");
exports.CREATE_BLOCK_TABLE = (table, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    settings = settings_1.useSettings(settings);
    const getTableWidth = (table) => {
        let height = 1;
        table.forEach((item) => {
            if (typeof item == "object" && height < item.length)
                height = item.length;
        });
        return height;
    };
    const width = Math.floor(settings_1.getContentWidth(settings) / getTableWidth(table)) - 2;
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
            ? (i = util_1.spacedText(width, ""))
            : (i = util_1.spacedText(width, util_1.stylizeValue(i))));
    });
    settings.tableHeader &&
        (table[1] = table[1].map((item) => (item = `${kleur_1.bold(item)}`)));
    let lines = [];
    table.forEach((row) => {
        lines.push(blocks_line_1.CREATE_BLOCK_LINE(row.join(` ${border_1.border(border_model_1.BorderElement.side, settings)} `), settings));
    });
    return lines;
});
exports.BLOCK_TABLE = (table, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    settings = settings_1.useSettings(settings);
    const lines = yield exports.CREATE_BLOCK_TABLE(table, settings);
    lines.forEach((line) => {
        util_1.LOGG(line, settings);
    });
});
//# sourceMappingURL=blocks.table.js.map