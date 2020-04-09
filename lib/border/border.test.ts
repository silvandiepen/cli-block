import { border } from "./border";

test("Border Default", () => {
	// Assert
	expect(border("line")).toBe("\u001b[2m━\u001b[22m");
});

test("Border, with default setting", () => {
	// Assert
	expect(border("midLine", { borderType: "single" })).toBe(
		"\u001b[2m─\u001b[22m"
	);
});

test("Border, with alternate setting", () => {
	expect(border("topEnd", { borderType: "double" })).toBe(
		"\u001b[2m╗\u001b[22m"
	);
	expect(border("midStart", { borderType: "double" })).toBe(
		"\u001b[2m╟\u001b[22m"
	);
});

test("Border, non existing type", () => {
	expect(border("Something")).toBe("");
});
test("Border, non existing setting, returns the default", () => {
	expect(border("midStart", { borderType: "cringly" })).toBe(
		"\u001b[2m┠\u001b[22m"
	);
});
