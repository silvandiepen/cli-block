import { border } from "./border";

test("Border Default", () => {
	// Assert
	expect(border("line")).toHaveReturnedWith("━");
});

test("Border, with default setting", () => {
	// Assert
	expect(border("midline", { borderType: "single" })).toHaveReturnedWith("━");
});

test("Border, with alternate setting", () => {
	expect(border("topEnd", { borderType: "double" })).toHaveReturnedWith("┓");
	expect(border("midStart", { borderType: "double" })).toHaveReturnedWith("┠");
});

test("Border, non existing type", () => {
	expect(border("Something")).toHaveReturnedWith("");
});
test("Border, non existing setting", () => {
	expect(border("midStart", { borderType: "cringly" })).toHaveReturnedWith("┠");
});
