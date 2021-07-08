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
const settings_1 = require("../settings");
const cli_highlight_1 = require("cli-highlight");
const util_1 = require("../util");
const blocks_line_1 = require("./blocks.line");
exports.CREATE_BLOCK_JSON = (obj, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    settings = settings_1.useSettings(settings);
    const text = cli_highlight_1.highlight(JSON.stringify(obj, null, "\t"), {
        language: "json",
        ignoreIllegals: true,
    });
    const JSONlines = text.split("\n");
    let lines = [];
    lines.push(blocks_line_1.CREATE_BLOCK_LINE(null, settings)[0]);
    JSONlines.forEach((line) => {
        lines.push(blocks_line_1.CREATE_BLOCK_LINE(line.replace(/\t/g, " "), settings)[0]);
    });
    lines.push(blocks_line_1.CREATE_BLOCK_LINE(null, settings)[0]);
    return lines;
});
/*
  
    BLOCK JSON
  
  */
exports.BLOCK_JSON = (obj, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    settings = settings_1.useSettings(settings);
    const lines = yield exports.CREATE_BLOCK_JSON(obj, settings);
    lines.forEach((line) => {
        util_1.LOGG(line, settings);
    });
});
//# sourceMappingURL=blocks.json.js.map