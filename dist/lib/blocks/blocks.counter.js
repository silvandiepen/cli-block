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
exports.BLOCK_COUNTER = (args = {}, settings = settings_1.defaultSettings) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const config = Object.assign({ message: "My message [count] to go", increment: 1, start: 0, end: 100, interval: 100 }, args);
    // Define variables
    let i = config.start;
    let step = 0;
    const messageCount = ((_a = config.messages) === null || _a === void 0 ? void 0 : _a.length) || 0;
    const stepsCount = (config.start > config.end
        ? config.start - config.end + 1
        : config.end - config.start + 1) / config.increment;
    const doSteps = messageCount > 0 && messageCount == stepsCount;
    const countDown = config.start > config.end;
    // Prepare action
    const counterAction = () => {
        util_1.CLEAR();
        let message = doSteps
            ? config.messages[step].replace("[count]", i.toString())
            : config.message.replace("[count]", i.toString());
        blocks_line_1.BLOCK_LINE(message, Object.assign(Object.assign({}, settings), { newLine: i == config.end }));
        i = countDown ? i - config.increment : i + config.increment;
        doSteps && step++;
    };
    counterAction();
    // Do the Interval
    return yield new Promise((resolve) => {
        let count = setInterval(() => {
            counterAction();
            const isEnding = (countDown ? i == config.end - 1 : i == config.end + 1) ||
                (doSteps && step == stepsCount);
            if (isEnding) {
                // if (countDown) NEW_LINE();
                resolve();
                clearInterval(count);
            }
        }, config.interval);
    });
    // return;
});
//# sourceMappingURL=blocks.counter.js.map