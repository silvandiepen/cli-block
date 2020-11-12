"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSettings = {
    borderType: "single",
    borderColor: "dim",
    frameWidth: 80,
    indentBlock: 5,
    prefix: "",
    newLine: true,
    autoSpace: true,
    tableHeader: true,
    tableSpace: true,
    padding: -1,
};
let cliSettings = {};
exports.useSettings = (settings) => {
    return Object.assign(Object.assign(Object.assign({}, exports.defaultSettings), cliSettings), settings);
};
exports.getFrameWidth = (settings = exports.defaultSettings) => {
    settings = exports.useSettings(settings);
    return process.stdout.columns <
        settings.frameWidth + settings.indentBlock * 2 + 2
        ? process.stdout.columns - settings.indentBlock * 2
        : settings.frameWidth;
};
exports.getPadding = (settings = exports.defaultSettings) => (settings = exports.useSettings(settings)) && settings.padding > -1
    ? settings.padding
    : exports.getFrameWidth(settings) / 10;
exports.getContentWidth = (settings = exports.defaultSettings) => {
    settings = exports.useSettings(settings);
    return exports.getFrameWidth(settings) - exports.getPadding(settings) * 2;
};
//# sourceMappingURL=settings.js.map