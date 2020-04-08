export {};
import { breakText, centerText } from "./helpers";

test("breakText", () => {
	const input =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non euismod elit. Duis sed est at tortor interdum molestie. Nullam auctor pellentesque metus in viverra. Sed diam massa, egestas non congue in, tempor ac nisl. ";
	const expected25 = [
		" Lorem ipsum dolor sit",
		"amet, consectetur",
		"adipiscing elit. Morbi",
		"non euismod elit. Duis",
		"sed est at tortor",
		"interdum molestie.",
		"Nullam auctor",
		"pellentesque metus in",
		"viverra. Sed diam massa,",
		"egestas non congue in,",
	];
	const expected50 = [
		" Lorem ipsum dolor sit amet, consectetur",
		"adipiscing elit. Morbi non euismod elit. Duis sed",
		"est at tortor interdum molestie. Nullam auctor",
		"pellentesque metus in viverra. Sed diam massa,",
	];
	const expected75 = [
		" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non",
		"euismod elit. Duis sed est at tortor interdum molestie. Nullam auctor",
		"pellentesque metus in viverra. Sed diam massa, egestas non congue in,",
	];
	const expected100 = [
		" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non euismod elit. Duis sed est at",
		"tortor interdum molestie. Nullam auctor pellentesque metus in viverra. Sed diam massa, egestas non",
	];
	expect(breakText(input, 25)).toStrictEqual(expected25);
	expect(breakText(input, 50)).toStrictEqual(expected50);
	expect(breakText(input, 75)).toStrictEqual(expected75);
	expect(breakText(input, 100)).toStrictEqual(expected100);
});

test("centerText", () => {
	const input = "Lorem ipsum dolor sit amet";
	const expected25 = "Lorem ipsum dolor sit amet";
	const expected50 = "            Lorem ipsum dolor sit amet            ";
	const expected75 =
		"                         Lorem ipsum dolor sit amet                         ";
	const expected100 =
		"                                     Lorem ipsum dolor sit amet                                     ";
	expect(centerText(input, 25)).toStrictEqual(expected25);
	expect(centerText(input, 50)).toStrictEqual(expected50);
	expect(centerText(input, 75)).toStrictEqual(expected75);
	expect(centerText(input, 100)).toStrictEqual(expected100);
});
