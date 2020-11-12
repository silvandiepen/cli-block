"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const border_1 = require("./border");
// describe("Default borders", () => {
//   // Assert
//   let settings = {};
//   it("should render a midline, without color", () => {
//     expect(border("midLine", settings)).toBe("─");
//   });
//   it("should render a midline, without color", () => {
//     expect(border("startLine", settings)).toBe("━");
//   });
//   it("should render a midline, without color", () => {
//     expect(border("endLine", settings)).toBe("━");
//   });
// });
describe("Default borders", () => {
    // Assert
    let settings = { borderColor: "yellow" };
    //   it("should render a midline, without color", () => {
    //     expect(border("midLine", settings)).toBe("─");
    //   });
    //   it("should render a midline, without color", () => {
    //     expect(border("startLine", settings)).toBe("━");
    //   });
    it("should render a midline, without color", () => {
        console.log(border_1.border("endLine", settings).toString());
        expect(border_1.border("endLine", settings)).toBe("━");
    });
});
// test("Border, with default setting", () => {
//   // Assert
//   expect(border("startLine")).toBe("\u001b[2m─\u001b[22m");
//   expect(border("midLine")).toBe("\u001b[2m─\u001b[22m");
//   expect(border("endLine")).toBe("\u001b[2m─\u001b[22m");
// });
// test("Border, with alternate setting", () => {
//   expect(border("topEnd", { borderType: "double" })).toBe(
//     "\u001b[2m╗\u001b[22m"
//   );
//   expect(border("midStart", { borderType: "double" })).toBe(
//     "\u001b[2m╟\u001b[22m"
//   );
// });
// test("Border, non existing type", () => {
//   expect(border("Something")).toBe("");
// });
// test("Border, non existing setting, returns the default", () => {
//   expect(border("midStart", { borderType: "cringly" })).toBe(
//     "\u001b[2m┠\u001b[22m"
//   );
// });
//# sourceMappingURL=border.test.js.map