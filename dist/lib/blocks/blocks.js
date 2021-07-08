"use strict";
// import { red, yellow, green, bold } from "kleur";
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
const blocks_model_1 = require("./blocks.model");
const settings_1 = require("../settings");
const _1 = require("./");
const util_1 = require("../util");
exports.CREATE_BLOCK = (blockType, content, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    settings = settings_1.useSettings(settings);
    let lines = [];
    switch (blockType) {
        // case BlockType.COUNTER:
        //   BLOCK_COUNTER(content, settings);
        //   break;
        // case BlockType.LOADER:
        //   BLOCK_COUNTER(content, settings);
        //   break;
        case blocks_model_1.BlockType.LINE:
            lines = _1.CREATE_BLOCK_LINE(content, settings);
            break;
        case blocks_model_1.BlockType.ROW_LINE:
            lines = _1.CREATE_BLOCK_ROW_LINE(content, settings);
            break;
        case blocks_model_1.BlockType.LINE_SUCCESS:
            lines = _1.CREATE_BLOCK_LINE_SUCCESS(content, settings);
            break;
        case blocks_model_1.BlockType.LINE_ERROR:
            lines = _1.CREATE_BLOCK_LINE_ERROR(content, settings);
            break;
        case blocks_model_1.BlockType.LINE_WARNING:
            lines = _1.CREATE_BLOCK_LINE_WARNING(content, settings);
            break;
        case blocks_model_1.BlockType.START:
            lines = _1.CREATE_BLOCK_START(content, settings);
            break;
        case blocks_model_1.BlockType.END:
            lines = _1.CREATE_BLOCK_END(content, settings);
            break;
        case blocks_model_1.BlockType.MID:
            lines = _1.CREATE_BLOCK_MID(content, settings);
            break;
        case blocks_model_1.BlockType.TABLE:
            lines = yield _1.CREATE_BLOCK_TABLE(content, settings);
            break;
        case blocks_model_1.BlockType.JSON:
            lines = yield _1.CREATE_BLOCK_JSON(content, settings);
            break;
        case blocks_model_1.BlockType.SETTINGS:
            lines = yield _1.CREATE_BLOCK_SETTINGS(content, settings);
            break;
        case blocks_model_1.BlockType.WARNINGS:
            lines = _1.CREATE_BLOCK_WARNINGS(content, settings);
            break;
        case blocks_model_1.BlockType.ERRORS:
            lines = _1.CREATE_BLOCK_ERRORS(content, settings);
            break;
    }
    console.log(lines);
    return lines;
});
exports.BLOCK = (blockType, content, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    const lines = yield exports.CREATE_BLOCK(blockType, content, settings);
    lines.forEach((line) => util_1.LOGG(line, settings));
});
//# sourceMappingURL=blocks.js.map