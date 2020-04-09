"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const border_1 = require("./border");
test("Border Default", () => {
    // Assert
    expect(border_1.border("line")).toBe("\u001b[2m━\u001b[22m");
});
test("Border, with default setting", () => {
    // Assert
    expect(border_1.border("midLine", { borderType: "single" })).toBe("\u001b[2m─\u001b[22m");
});
test("Border, with alternate setting", () => {
    expect(border_1.border("topEnd", { borderType: "double" })).toBe("\u001b[2m╗\u001b[22m");
    expect(border_1.border("midStart", { borderType: "double" })).toBe("\u001b[2m╟\u001b[22m");
});
test("Border, non existing type", () => {
    expect(border_1.border("Something")).toBe("");
});
test("Border, non existing setting, returns the default", () => {
    expect(border_1.border("midStart", { borderType: "cringly" })).toBe("\u001b[2m┠\u001b[22m");
});
//# sourceMappingURL=border.test.js.map