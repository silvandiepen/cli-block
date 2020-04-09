"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../settings/settings");
const kleur_1 = __importDefault(require("kleur"));
const borderCharacters = {
    single: {
        line: "━",
        midLine: "─",
        side: "┃",
        topStart: "┏",
        topEnd: "┓",
        bottomStart: "┗",
        bottomEnd: "┛",
        midStart: "┠",
        midEnd: "┨",
    },
    double: {
        line: "═",
        midLine: "─",
        side: "║",
        topStart: "╔",
        topEnd: "╗",
        bottomStart: "╚",
        bottomEnd: "╝",
        midStart: "╟",
        midEnd: "╢",
    },
};
exports.border = (type, settings = settings_1.defaultSettings) => {
    settings = Object.assign(Object.assign({}, settings_1.defaultSettings), settings);
    let char = "";
    if (borderCharacters[settings.borderType] &&
        borderCharacters[settings.borderType][type])
        char = borderCharacters[settings.borderType][type];
    else if (borderCharacters[settings_1.defaultSettings.borderType][type])
        char = borderCharacters[settings_1.defaultSettings.borderType][type];
    else
        return "";
    if (kleur_1.default[settings.borderColor])
        char = kleur_1.default[settings.borderColor](char);
    return char;
};
//# sourceMappingURL=border.js.map