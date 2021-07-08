"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../settings");
const kleur_1 = __importDefault(require("kleur"));
const borderCharacters = {
    single: {
        startLine: "━",
        endLine: "━",
        midLine: "─",
        midBreakTop: "┬",
        midBreakBottom: "┴",
        side: "┃",
        topStart: "┏",
        topEnd: "┓",
        bottomStart: "┗",
        bottomEnd: "┛",
        midStart: "┠",
        midEnd: "┨",
    },
    double: {
        startLine: "═",
        endLine: "═",
        midLine: "─",
        midBreakTop: "┬",
        midBreakBottom: "┴",
        side: "║",
        topStart: "╔",
        topEnd: "╗",
        bottomStart: "╚",
        bottomEnd: "╝",
        midStart: "╟",
        midEnd: "╢",
    },
    fat: {
        startLine: "▘",
        endLine: "▗",
        midLine: "▄",
        midBreakTop: "┬",
        midBreakBottom: "┴",
        side: "▞",
        topStart: "▛",
        topEnd: "▜",
        bottomStart: "▙",
        bottomEnd: "▟",
        midStart: "▄",
        midEnd: "▄",
    },
};
exports.border = (type, settings = {}) => {
    const s = settings_1.useSettings(settings);
    let char = borderCharacters[s.borderType][type] || "";
    // console.log(s);
    if (kleur_1.default[s.borderColor])
        char = kleur_1.default[s.borderColor](char);
    return char;
};
//# sourceMappingURL=border.js.map