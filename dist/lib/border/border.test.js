"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const border_1 = require("./border");
test("Border Default", () => {
    // Assert
    expect(border_1.border("line")).toHaveReturnedWith("━");
});
test("Border, with default setting", () => {
    // Assert
    expect(border_1.border("midline", { borderType: "single" })).toHaveReturnedWith("━");
});
test("Border, with alternate setting", () => {
    expect(border_1.border("topEnd", { borderType: "double" })).toHaveReturnedWith("┓");
    expect(border_1.border("midStart", { borderType: "double" })).toHaveReturnedWith("┠");
});
test("Border, non existing type", () => {
    expect(border_1.border("Something")).toHaveReturnedWith("");
});
test("Border, non existing setting", () => {
    expect(border_1.border("midStart", { borderType: "cringly" })).toHaveReturnedWith("┠");
});
//# sourceMappingURL=border.test.js.map