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
const _1 = require("./");
const kleur_1 = require("kleur");
const blocks_model_1 = require("./blocks.model");
const stdOutSpy = jest.spyOn(process.stdout, "write").mockImplementation();
describe("BlockLine", () => {
    beforeEach(() => {
        stdOutSpy.mockClear();
    });
    it("Should Render", () => {
        const expected = `     ${kleur_1.dim("┃")}                                                                                ${kleur_1.dim("┃")}`;
        expect(_1.CREATE_BLOCK_LINE()).toEqual([expected]);
    });
    it("Should Log", () => {
        process.stdout.write = jest.fn();
        const expected = `     ${kleur_1.dim("┃")}                                                                                ${kleur_1.dim("┃")}\n`;
        _1.BLOCK_LINE();
        expect(process.stdout.write).toHaveBeenCalledWith(expected);
    });
});
describe("BlockLine - With text", () => {
    beforeEach(() => {
        stdOutSpy.mockClear();
    });
    it("Should Render", () => {
        const expected = `     ${kleur_1.dim("┃")}        test                                                                    ${kleur_1.dim("┃")}`;
        expect(_1.CREATE_BLOCK_LINE("test")).toEqual([expected]);
    });
    it("Should Log", () => {
        // const consoleSpy = jest.spyOn(console, "log");
        process.stdout.write = jest.fn();
        const expected = `     ${kleur_1.dim("┃")}        test                                                                    ${kleur_1.dim("┃")}\n`;
        _1.BLOCK_LINE("test");
        expect(process.stdout.write).toHaveBeenCalledWith(expected);
    });
});
describe("Block Start", () => {
    beforeEach(() => {
        stdOutSpy.mockClear();
    });
    it("Should Render", () => {
        const expected = [
            "     \u001b[2m┏\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┓\u001b[22m",
        ];
        expect(_1.CREATE_BLOCK_START()).toEqual(expected);
    });
    it("Should Log", () => {
        const expected = "     \u001b[2m┏\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┓\u001b[22m\n";
        _1.BLOCK_START();
        expect(process.stdout.write).toHaveBeenCalledWith(expected);
    });
});
describe("Block Line Types", () => {
    beforeEach(() => {
        stdOutSpy.mockClear();
    });
    it("Should Render - Success", () => {
        const expected = [
            `     ${kleur_1.dim("┃")}        ${kleur_1.green("✔")} My Victory                                                            ${kleur_1.dim("┃")}`,
        ];
        expect(_1.CREATE_BLOCK_LINE_SUCCESS("My Victory")).toEqual(expected);
    });
    it("Should Log - Success", () => {
        const expected = `     ${kleur_1.dim("┃")}        ${kleur_1.green("✔")} My Victory                                                            ${kleur_1.dim("┃")}\n`;
        _1.BLOCK_LINE_SUCCESS("My Victory");
        expect(process.stdout.write).toHaveBeenCalledWith(expected);
    });
});
describe("Blocks", () => {
    beforeEach(() => {
        stdOutSpy.mockClear();
    });
    it("Should Render - Block Line", () => __awaiter(void 0, void 0, void 0, function* () {
        const expected = `     ${kleur_1.dim("┃")}        test                                                                    ${kleur_1.dim("┃")}`;
        const result = yield _1.CREATE_BLOCK(blocks_model_1.BlockType.LINE, "test");
        expect(result).toEqual([expected]);
    }));
    it("Should Log - Block Line", () => {
        const expected = `     ${kleur_1.dim("┃")}        test                                                                    ${kleur_1.dim("┃")}\n`;
        _1.BLOCK(blocks_model_1.BlockType.LINE, "test");
        expect(process.stdout.write).toHaveBeenCalledWith(expected);
    });
});
// test("BLOCKS - With END", () => {
//   const consoleSpy = jest.spyOn(console, "log");
//   const text = "This is a test";
//   const expected = BLOCK_END(text);
//   BLOCK(BlockType.END, text);
//   console.log(consoleSpy);
//   //   expect(consoleSpy).toHaveBeenCalledTimes(2);
//   expect(mockToString(consoleSpy, true, 0)).toBe(expected[0]);
// });
// test("BLOCK_LINE_ERROR", () => {
//   // Arrange
//   const blockLineErrorSpy = jest.spyOn(console, "log");
//   const expected =
//     "     \u001b[2m┃\u001b[22m        \u001b[31m×\u001b[39m Lorem Error                                                           \u001b[2m┃\u001b[22m";
//   // Act
//   BLOCK_LINE_ERROR("Lorem Error");
//   // Assert
//   expect(blockLineErrorSpy).toHaveBeenCalledTimes(1);
//   expect(mockToString(blockLineErrorSpy, true)).toBe(expected);
// });
// test("BLOCK_LINE_SUCCESS", () => {
//   // Arrange
//   const blockLineSuccessSpy = jest.spyOn(console, "log");
//   const expected =
//     "     \u001b[2m┃\u001b[22m        \u001b[32m✔\u001b[39m Lorem Success                                                         \u001b[2m┃\u001b[22m";
//   // Act
//   BLOCK_LINE_SUCCESS("Lorem Success");
//   // Assert
//   expect(blockLineSuccessSpy).toHaveBeenCalledTimes(1);
//   expect(mockToString(blockLineSuccessSpy, true, 0, true)).toBe(expected);
// });
// test("BLOCK_LINE_ERROR", () => {
//   // Arrange
//   const blockLineWarningSpy = jest.spyOn(console, "log");
//   const expected =
//     "     \u001b[2m┃\u001b[22m        \u001b[33m!\u001b[39m Lorem Warning                                                         \u001b[2m┃\u001b[22m"; // Act
//   BLOCK_LINE_WARNING("Lorem Warning");
//   // Assert
//   expect(blockLineWarningSpy).toHaveBeenCalledTimes(1);
//   expect(mockToString(blockLineWarningSpy, true, 0, true)).toBe(expected);
// });
// test("BLOCK_MID", () => {
//   // Arrange
//   const consoleSpy = jest.spyOn(console, "log");
//   const expected = [
//     "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
//     "     \u001b[2m┠\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m┨\u001b[22m",
//     "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
//   ];
//   // Act
//   BLOCK_MID();
//   // Assert
//   //   expect(consoleSpy).toHaveBeenCalledTimes(3);
//   expect(mockToString(consoleSpy, true, 0)).toBe(expected[0]);
//   expect(mockToString(consoleSpy, true, 1)).toBe(expected[1]);
//   expect(mockToString(consoleSpy, true, 2)).toBe(expected[2]);
// });
// test("BLOCK_MID - with text", () => {
//   // Arrange
//   const consoleSpy = jest.spyOn(console, "log");
//   const expected = [
//     "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
//     "     \u001b[2m┠\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m          \u001b[1mWith text\u001b[22m         \u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m┨\u001b[22m",
//     "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
//   ];
//   // Act
//   BLOCK_MID("With text");
//   // Assert
//   //   expect(consoleSpy).toHaveBeenCalledTimes(3);
//   expect(mockToString(consoleSpy, true, 0)).toBe(expected[0]);
//   expect(mockToString(consoleSpy, true, 1)).toBe(expected[1]);
//   expect(mockToString(consoleSpy, true, 2)).toBe(expected[2]);
// });
// test("BLOCK_END", () => {
//   // Arrange
//   const consoleSpy = jest.spyOn(console, "log");
//   const expected = [
//     "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
//     "     \u001b[2m┗\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┛\u001b[22m",
//   ];
//   // Act
//   BLOCK_END();
//   // Assert
//   //   expect(consoleSpy).toHaveBeenCalledTimes(2);
//   expect(mockToString(consoleSpy, true, 0)).toBe(expected[0]);
//   expect(mockToString(consoleSpy, true, 1)).toBe(expected[1]);
// });
// test("BLOCK_END - with text", () => {
//   // Arrange
//   const consoleSpy = jest.spyOn(console, "log");
//   const expected = [
//     "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
//     "     \u001b[2m┗\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m          \u001b[1mWith text\u001b[22m         \u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┛\u001b[22m",
//   ];
//   // Act
//   BLOCK_END("With text");
//   // Assert
//   //   expect(consoleSpy).toHaveBeenCalledTimes(2);
//   expect(mockToString(consoleSpy, true, 0)).toBe(expected[0]);
//   expect(mockToString(consoleSpy, true, 1)).toBe(expected[1]);
// });
//# sourceMappingURL=blocks.test.js.map