const kleur = require("kleur");

console.log(kleur);
const defaultSettings = {
	borderType: "single",
	borderColor: "dim"
};
exports.defaultSettings = defaultSettings;

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
		midEnd: "┨"
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
		midEnd: "╢"
	}
};

exports.border = (type, settings) => {
	if (!settings) settings = defaultSettings;

	let char = borderCharacters[settings.borderType][type];

	if (kleur[settings.borderColor]) {
		char = kleur[settings.borderColor](char);
	}

	return char;
};
