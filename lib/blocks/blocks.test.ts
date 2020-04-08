import {
	BLOCK_START,
	// BLOCK_END,
	// BLOCK_ERRORS,
	BLOCK_LINE,
	BLOCK_LINE_ERROR,
	BLOCK_LINE_SUCCESS,
	BLOCK_LINE_WARNING,
	// BLOCK_MID,
	// BLOCK_ROW_LINE,
	// BLOCK_SETTINGS,
	// BLOCK_WARNINGS,
} from "./blocks";

// test("BLOCK_START", () => {
// 	// Arrange
// 	const consoleSpy = jest.spyOn(console, "log");

// 	// Act
// 	BLOCK_START();

// 	// Assert
// 	expect(consoleSpy).toHaveBeenCalledTimes(2);
// 	expect(consoleSpy).toHaveBeenNthCalledWith(
// 		1,
// 		"     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓"
// 	);
// 	expect(consoleSpy).toHaveBeenNthCalledWith(
// 		2,
// 		"     ┃                                                                                ┃"
// 	);
// });
beforeEach(() => {
	jest.clearAllMocks();
});

test("BLOCK_LINE - default", () => {
	// Arrange
	const blockLineSpy = jest.spyOn(console, "log");

	// Act
	BLOCK_LINE();

	// Assert
	expect(blockLineSpy).toHaveBeenCalledTimes(1);
	expect(blockLineSpy).toHaveBeenCalledWith(
		"     ┃                                                                                ┃"
	);
});

test("BLOCK_LINE - With text", () => {
	// Arrange
	const blockLineWithTextSpy = jest.spyOn(console, "log");

	// Act
	BLOCK_LINE("Lorem Default");

	// Assert
	expect(blockLineWithTextSpy).toHaveBeenCalledTimes(1);
	expect(blockLineWithTextSpy).toHaveBeenCalledWith(
		"     ┃        Lorem Default                                                           ┃"
	);
});

test("BLOCK_LINE_ERROR", () => {
	// Arrange
	const blockLineErrorSpy = jest.spyOn(console, "log");

	// Act
	BLOCK_LINE_ERROR("Lorem Error");

	// Assert
	expect(blockLineErrorSpy).toHaveBeenCalledTimes(1);
	expect(blockLineErrorSpy).toHaveBeenCalledWith(
		"     ┃        Lorem Error                                                             ┃"
	);
});

test("BLOCK_LINE_SUCCESS", () => {
	// Arrange
	const blockLineSuccessSpy = jest.spyOn(console, "log");

	// Act
	BLOCK_LINE_ERROR("Lorem Success");

	// Assert
	expect(blockLineSuccessSpy).toHaveBeenCalledTimes(1);
	expect(blockLineSuccessSpy).toHaveBeenCalledWith(
		"     ┃        Lorem Success                                                           ┃"
	);
});

test("BLOCK_LINE_ERROR", () => {
	// Arrange
	const blockLineWarningSpy = jest.spyOn(console, "log");

	// Act
	BLOCK_LINE_ERROR("Lorem Warning");

	// Assert
	expect(blockLineWarningSpy).toHaveBeenCalledTimes(1);
	expect(blockLineWarningSpy).toHaveBeenCalledWith(
		"     ┃        Lorem Warning                                                           ┃"
	);
});
