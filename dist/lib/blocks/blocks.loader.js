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
const util_1 = require("../util");
const blocks_line_1 = require("./blocks.line");
exports.BLOCK_LOADER = (args = {}, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    let config = Object.assign({ message: "[percentage] [loader]", increment: 1, width: "100%", start: 0, end: 100, interval: 25, charFilled: "▒", charUnfilled: "░" }, args);
    let i = config.start;
    const countDown = config.start > config.end;
    const loadBar = () => {
        const width = config.width == "100%"
            ? settings_1.getContentWidth() - 7
            : ((config.end - config.start) *
                (typeof config.width == "string"
                    ? parseInt(config.width)
                    : config.width)) /
                100;
        const step = Math.round(((100 / i ? i : 1) * width) / 100);
        const filled = Math.floor(width - (width - step));
        let unfilled = Math.floor(width - step);
        if (filled + unfilled !== width)
            unfilled = unfilled + 1;
        const msg = `${util_1.repeat(filled, config.charFilled)}${util_1.repeat(unfilled, config.charUnfilled)}`;
        return msg;
    };
    const loaderAction = () => {
        util_1.CLEAR();
        const loader = loadBar();
        const percentage = `${i}%`;
        let message = config.message
            .replace("[loader]", loader)
            .replace("[percentage]", util_1.spacedText(4, percentage));
        i = countDown ? i - config.increment : i + config.increment;
        blocks_line_1.BLOCK_LINE(message, Object.assign(Object.assign({}, settings), { newLine: false }));
    };
    loaderAction();
    return yield new Promise((resolve) => {
        let count = setInterval(() => {
            loaderAction();
            const isEnding = countDown ? i >= config.end - 1 : i >= config.end + 1;
            if (isEnding) {
                util_1.NEW_LINE();
                resolve();
                clearInterval(count);
            }
        }, config.interval);
    });
});
//# sourceMappingURL=blocks.loader.js.map