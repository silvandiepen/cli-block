"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blocks_1 = require("./blocks");
beforeEach(() => {
    jest.clearAllMocks();
});
function mockToString(str, mock = false, nth = 0, log = false) {
    if (log)
        console.log("result", str.mock.calls[nth]);
    if (mock)
        str = str.mock.calls[nth][0];
    return str;
}
test("BLOCK_START", () => {
    // Arrange
    const consoleSpy = jest.spyOn(console, "log");
    const expected = [
        "     \u001b[2m┏\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┓\u001b[22m",
        "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
    ];
    // Act
    blocks_1.BLOCK_START();
    // Assert
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(mockToString(consoleSpy, true, 0)).toBe(expected[0]);
    expect(mockToString(consoleSpy, true, 1)).toBe(expected[1]);
});
test("BLOCK_LINE - default", () => {
    // Arrange
    const blockLineTextSpy = jest.spyOn(console, "log");
    const expected = "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m";
    // Act
    blocks_1.BLOCK_LINE();
    // Assert
    expect(blockLineTextSpy).toHaveBeenCalledTimes(1);
    expect(mockToString(blockLineTextSpy, true)).toBe(expected);
});
test("BLOCK_LINE - With text", () => {
    // Arrange
    const blockLineWithTextSpy = jest.spyOn(console, "log");
    const expected = "     \u001b[2m┃\u001b[22m        Lorem Default                                                           \u001b[2m┃\u001b[22m";
    // Act
    blocks_1.BLOCK_LINE("Lorem Default");
    // Assert
    expect(blockLineWithTextSpy).toHaveBeenCalledTimes(1);
    expect(mockToString(blockLineWithTextSpy, true)).toBe(expected);
});
test("BLOCK_LINE_ERROR", () => {
    // Arrange
    const blockLineErrorSpy = jest.spyOn(console, "log");
    const expected = "     \u001b[2m┃\u001b[22m        \u001b[31m×\u001b[39m Lorem Error                                                           \u001b[2m┃\u001b[22m";
    // Act
    blocks_1.BLOCK_LINE_ERROR("Lorem Error");
    // Assert
    expect(blockLineErrorSpy).toHaveBeenCalledTimes(1);
    expect(mockToString(blockLineErrorSpy, true)).toBe(expected);
});
test("BLOCK_LINE_SUCCESS", () => {
    // Arrange
    const blockLineSuccessSpy = jest.spyOn(console, "log");
    const expected = "     \u001b[2m┃\u001b[22m        \u001b[32m✔\u001b[39m Lorem Success                                                         \u001b[2m┃\u001b[22m";
    // Act
    blocks_1.BLOCK_LINE_SUCCESS("Lorem Success");
    // Assert
    expect(blockLineSuccessSpy).toHaveBeenCalledTimes(1);
    expect(mockToString(blockLineSuccessSpy, true, 0, true)).toBe(expected);
});
test("BLOCK_LINE_ERROR", () => {
    // Arrange
    const blockLineWarningSpy = jest.spyOn(console, "log");
    const expected = "     \u001b[2m┃\u001b[22m        \u001b[33m!\u001b[39m Lorem Warning                                                         \u001b[2m┃\u001b[22m"; // Act
    blocks_1.BLOCK_LINE_WARNING("Lorem Warning");
    // Assert
    expect(blockLineWarningSpy).toHaveBeenCalledTimes(1);
    expect(mockToString(blockLineWarningSpy, true, 0, true)).toBe(expected);
});
test("BLOCK_MID", () => {
    // Arrange
    const consoleSpy = jest.spyOn(console, "log");
    const expected = [
        "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
        "     \u001b[2m┠\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m┨\u001b[22m",
        "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
    ];
    // Act
    blocks_1.BLOCK_MID();
    // Assert
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(mockToString(consoleSpy, true, 0)).toBe(expected[0]);
    expect(mockToString(consoleSpy, true, 1)).toBe(expected[1]);
    expect(mockToString(consoleSpy, true, 2)).toBe(expected[2]);
});
test("BLOCK_MID - with text", () => {
    // Arrange
    const consoleSpy = jest.spyOn(console, "log");
    const expected = [
        "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
        "     \u001b[2m┠\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m          \u001b[1mWith text\u001b[22m         \u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m─\u001b[22m\u001b[2m┨\u001b[22m",
        "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
    ];
    // Act
    blocks_1.BLOCK_MID("With text");
    // Assert
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(mockToString(consoleSpy, true, 0)).toBe(expected[0]);
    expect(mockToString(consoleSpy, true, 1)).toBe(expected[1]);
    expect(mockToString(consoleSpy, true, 2)).toBe(expected[2]);
});
test("BLOCK_END", () => {
    // Arrange
    const consoleSpy = jest.spyOn(console, "log");
    const expected = [
        "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
        "     \u001b[2m┗\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┛\u001b[22m",
    ];
    // Act
    blocks_1.BLOCK_END();
    // Assert
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(mockToString(consoleSpy, true, 0)).toBe(expected[0]);
    expect(mockToString(consoleSpy, true, 1)).toBe(expected[1]);
});
test("BLOCK_END - with text", () => {
    // Arrange
    const consoleSpy = jest.spyOn(console, "log");
    const expected = [
        "     \u001b[2m┃\u001b[22m                                                                                \u001b[2m┃\u001b[22m",
        "     \u001b[2m┗\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m          \u001b[1mWith text\u001b[22m         \u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m━\u001b[22m\u001b[2m┛\u001b[22m",
    ];
    // Act
    blocks_1.BLOCK_END("With text");
    // Assert
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(mockToString(consoleSpy, true, 0)).toBe(expected[0]);
    expect(mockToString(consoleSpy, true, 1)).toBe(expected[1]);
});
//# sourceMappingURL=blocks.test.js.map