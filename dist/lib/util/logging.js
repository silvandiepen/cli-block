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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const settings_1 = require("../settings");
const _1 = require(".");
exports.LOGG = (v = "", settings = settings_1.defaultSettings) => {
    settings = settings_1.useSettings(settings);
    if (settings.newLine)
        v ? process.stdout.write(v + "\n") : process.stdout.write("\n");
    else
        v ? process.stdout.write(v) : process.stdout.write("");
};
exports.CLEAR = () => {
    process.stdout.clearLine(null);
    process.stdout.cursorTo(0);
};
exports.NEW_LINE = () => process.stdout.write("\n");
exports.ASYNC_NEW_LINE = () => __awaiter(void 0, void 0, void 0, function* () { return yield _1.promisify(exports.NEW_LINE); });
exports.RENEW_LINE = (msg) => {
    readline_1.default.cursorTo(process.stdout, 0);
    process.stdout.write(`${msg}`);
};
exports.EMPTY = (msg = "", settings = settings_1.defaultSettings) => {
    exports.LOGG(null, settings);
};
//# sourceMappingURL=logging.js.map