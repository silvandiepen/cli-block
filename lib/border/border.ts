import { defaultSettings } from "../settings/settings";
import { SettingsArgType } from "../types";
import kleur from "kleur";

const borderCharacters = {
	single: {
		line: "━",
		midLine: "─",
		side: "┃",
		topStart: "┏",
		topEnd: "┓",
		bottomStart: "┗",
		bottomEnd: "┛",
		midStart: "┠",
		midEnd: "┨",
	},
	double: {
		line: "═",
		midLine: "─",
		side: "║",
		topStart: "╔",
		topEnd: "╗",
		bottomStart: "╚",
		bottomEnd: "╝",
		midStart: "╟",
		midEnd: "╢",
	},
};

export const border = (
	type: string,
	settings: SettingsArgType = defaultSettings
): string => {
	settings = { ...defaultSettings, ...settings };

	let char = "";
	if (
		borderCharacters[settings.borderType] &&
		borderCharacters[settings.borderType][type]
	)
		char = borderCharacters[settings.borderType][type];
	else if (borderCharacters[defaultSettings.borderType][type])
		char = borderCharacters[defaultSettings.borderType][type];
	else return "";

	if (kleur[settings.borderColor]) char = kleur[settings.borderColor](char);

	return char;
};
