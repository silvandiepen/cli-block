"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useSettings = (settings) => {
    return Object.assign(Object.assign(Object.assign({}, defaultSettings), cliSettings), settings);
};
exports.getFrameWidth = (settings = defaultSettings) => {
    settings = useSettings(settings);
    return process.stdout.columns <
        settings.frameWidth + settings.indentBlock * 2 + 2
        ? process.stdout.columns - settings.indentBlock * 2
        : settings.frameWidth;
};
exports.getPadding = (settings = defaultSettings) => {
    settings = useSettings(settings);
    return settings.padding ? settings.padding : exports.getFrameWidth(settings) / 10;
};
exports.getContentWidth = (settings = defaultSettings) => {
    settings = useSettings(settings);
    return exports.getFrameWidth(settings) - exports.getPadding(settings) * 2;
};
//# sourceMappingURL=sizes.js.map