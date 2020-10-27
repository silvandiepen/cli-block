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
// Logging Helpers
const mono_str_width_1 = __importDefault(require("mono-str-width"));
const kleur_1 = require("kleur");
exports.asyncForEach = (array, callback) => __awaiter(void 0, void 0, void 0, function* () {
    for (let index = 0; index < array.length; index++) {
        yield callback(array[index], index, array);
    }
});
exports.objectToString = (obj) => {
    let str = "";
    Object.keys(obj).forEach((item) => {
        let value = obj[item];
        if (typeof value == "number")
            value = exports.toRoundNumber(value, 0);
        str = str + `${kleur_1.blue(item)}${value} `;
    });
    return str;
};
exports.toRoundNumber = (num, decimalPlaces = 2) => {
    return Number(Math.round(parseFloat(num + "e" + decimalPlaces)) + "e-" + decimalPlaces).toFixed(decimalPlaces);
};
exports.toStringValue = (value) => {
    if (typeof value == "string")
        return value;
    else if (typeof value == "number")
        return `${value}`;
    else if (value == null)
        return "";
    else if (typeof value == "object")
        return exports.objectToString(value);
    else
        return value.join("");
};
exports.spaces = (num, value = null) => {
    let width = value;
    if (typeof value !== "number")
        width = mono_str_width_1.default(exports.toStringValue(value));
    let spaces = [];
    for (let i = 0; i < (value ? num - width : num); i++) {
        spaces.push(" ");
    }
    return spaces.join("");
};
exports.spacedText = (num, value) => {
    return `${value} ${exports.spaces(num, mono_str_width_1.default(exports.toStringValue(value)) + 1)}`;
};
exports.repeat = (num, value = null) => {
    let values = [];
    for (let i = 0; i < num; i++) {
        values.push(value);
    }
    return values.join("");
};
exports.stylelizeValue = (value) => {
    let stringValue = "";
    // Empty string
    if (value == null)
        stringValue = `${kleur_1.italic("null")}`;
    // If there is not value
    else if (typeof value !== "boolean" && !value)
        stringValue = "";
    // If the value is object of non-strings
    else if (typeof value === "object" && typeof value[0] !== "string") {
        stringValue = Object.keys(value).join(", ");
    }
    // If the value is an array of strings
    else if (Array.isArray(value)) {
        stringValue = value.join(", ");
    }
    else {
        stringValue = value.toString();
    }
    if (stringValue == "true")
        // if (typeof value !== "string") return value;
        return `${kleur_1.green("True")}`;
    else if (stringValue == "false")
        return `${kleur_1.red("False")}`;
    else if (stringValue.includes("/"))
        return `${kleur_1.blue().italic(stringValue)}`;
    else
        return stringValue;
};
exports.centerText = (value, num) => {
    let values = [];
    let isEven = mono_str_width_1.default(value) % 2 == 0 ? true : false;
    num = (num - mono_str_width_1.default(value)) / 2;
    for (let i = 0; i < num; i++)
        values.push(" ");
    values.push(value);
    for (let i = 0; i < num - (isEven ? 0 : 1); i++)
        values.push(" ");
    return values.join("");
};
exports.hello = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    return arg;
});
exports.breakText = (value, width) => {
    if (typeof value !== "string")
        return value;
    let sentences = [];
    if (mono_str_width_1.default(value) > width) {
        let words = value.split(" ");
        let sentence = "";
        words.forEach((word, i) => {
            if (mono_str_width_1.default(sentence + " " + word) < width) {
                sentence = sentence + " " + word;
            }
            else {
                sentences.push(sentence);
                sentence = word;
            }
        });
        return sentences;
    }
    else
        return [value];
};
//# sourceMappingURL=helpers.js.map