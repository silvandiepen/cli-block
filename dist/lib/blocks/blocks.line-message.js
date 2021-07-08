"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kleur_1 = require("kleur");
const settings_1 = require("../settings");
const util_1 = require("../util");
const _1 = require("./");
/*

  BLOCK LINES SUCCESS / ERROR / WARNING

*/
// lINE With auto checkmark for success
exports.CREATE_BLOCK_LINE_SUCCESS = (msg, settings = settings_1.defaultSettings) => _1.CREATE_BLOCK_LINE(msg, Object.assign(Object.assign({}, settings_1.useSettings(settings)), { prefix: kleur_1.green("✔") }));
exports.BLOCK_LINE_SUCCESS = (msg, settings = settings_1.defaultSettings) => {
    exports.CREATE_BLOCK_LINE_SUCCESS(msg, settings).forEach((txt) => util_1.LOGG(txt, settings));
};
// LINE with auto X for errors
exports.CREATE_BLOCK_LINE_ERROR = (msg, settings = settings_1.defaultSettings) => _1.CREATE_BLOCK_LINE(msg, Object.assign(Object.assign({}, settings_1.useSettings(settings)), { prefix: kleur_1.red("×") }));
exports.BLOCK_LINE_ERROR = (msg, settings = settings_1.defaultSettings) => {
    exports.CREATE_BLOCK_LINE_ERROR(msg, settings).forEach((txt) => util_1.LOGG(txt, settings));
};
// LINE with auto ! for warnings
exports.CREATE_BLOCK_LINE_WARNING = (msg, settings = settings_1.defaultSettings) => _1.CREATE_BLOCK_LINE(msg, Object.assign(Object.assign({}, settings_1.useSettings(settings)), { prefix: kleur_1.yellow("!") }));
exports.BLOCK_LINE_WARNING = (msg, settings = settings_1.defaultSettings) => {
    exports.CREATE_BLOCK_LINE_WARNING(msg, settings).forEach((txt) => util_1.LOGG(txt, settings));
};
exports.CREATE_BLOCK_WARNINGS = (warning, settings = settings_1.defaultSettings) => {
    settings = settings_1.useSettings(settings);
    if (!warning || warning.length < 1)
        return [];
    let lines = [];
    lines.push(_1.CREATE_BLOCK_LINE(null, settings)[0]);
    lines.push(_1.CREATE_BLOCK_MID(`${kleur_1.yellow("! Warnings")}`, settings)[0]);
    warning.forEach((error) => {
        lines.push(exports.CREATE_BLOCK_LINE_WARNING(error, settings)[0]);
    });
    return lines;
};
exports.CREATE_BLOCK_ERRORS = (error, settings = settings_1.defaultSettings) => {
    settings = settings_1.useSettings(settings);
    if (!error || error.length < 1)
        return [];
    let lines = [];
    lines.push(_1.CREATE_BLOCK_LINE(null, settings)[0]);
    lines.push(_1.CREATE_BLOCK_MID(`${kleur_1.red("× Errors")}`, settings)[0]);
    error.forEach((error) => {
        lines.push(exports.CREATE_BLOCK_LINE_ERROR(error, settings)[0]);
    });
    lines.push(_1.CREATE_BLOCK_END(null, settings)[0]);
    return lines;
};
//# sourceMappingURL=blocks.line-message.js.map