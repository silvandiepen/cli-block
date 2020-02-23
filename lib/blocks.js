const {
	spaces,
	repeat,
	centerText,
	stylelizeValue,
	breakText,
	toStringValue,
	spacedText,
	asyncForEach
} = require("./helpers.js");

const { border } = require("./border");
const { defaultSettings } = require("./settings");

const { red, yellow, bgBlue, green, bold } = require("kleur");
const size = require("window-size");
const stringWidth = require("mono-str-width");

const FRAME_WIDTH =
	size.width < defaultSettings.frameWidth + defaultSettings.indentBlock * 2 + 2
		? size.width - defaultSettings.indentBlock * 2
		: defaultSettings.frameWidth;
exports.FRAME_WIDTH = FRAME_WIDTH;

const PADDING = FRAME_WIDTH / 10;
exports.PADDING = PADDING;

const CONTENT_WIDTH = FRAME_WIDTH - PADDING * 2;
exports.CONTENT_WIDTH;

// LOGGER. Can be switched off
const LOGG = (v) => (v ? console.log(v) : console.log());
exports.LOGG = LOGG;

// Start the code with a block with a title.
const START = (msg, settings) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;
	LOGG("\n");
	LOGG(
		spaces(PADDING + settings.indentBlock) + bgBlue().black(" " + msg + " ")
	);
	LOGG("\n");
};
exports.START = START;

// The basic line.
const BLOCK_LINE = (msg = null, settings = null) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;

	if (msg == null) {
		LOGG(
			`${spaces(settings.indentBlock)}${border("side", settings)}${spaces(
				FRAME_WIDTH
			)}${border("side", settings)}`
		);
		return;
	}
	if (typeof msg == "string") msg = breakText(msg, CONTENT_WIDTH);

	let prepend = "";
	if (settings.prepend) prepend = settings.prepend;

	msg.forEach((txt, i) => {
		if (i == 0) txt = `${prepend ? prepend + " " : ""}${txt}`;
		else txt = `${prepend ? spaces(stringWidth(prepend)) + " " : ""}${txt}`;

		LOGG(
			spaces(settings.indentBlock) +
				border("side", settings) +
				spaces(PADDING) +
				spacedText(CONTENT_WIDTH, txt) +
				spaces(PADDING) +
				border("side", settings)
		);
	});
};
exports.BLOCK_LINE = BLOCK_LINE;

// lINE With auto checkmark for success
const EMPTY = (msg) => {
	LOGG();
};
exports.EMPTY = EMPTY;

const BLOCK_ROW_LINE = (arr, settings = null) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;

	let str = "";
	arr = arr.map((item) => toStringValue(item));
	let COLUMN_WIDTH = Math.floor(CONTENT_WIDTH / arr.length) - 1;
	arr.forEach((item) => {
		str = str + spacedText(COLUMN_WIDTH, item);
	});

	BLOCK_LINE(str);
};
exports.BLOCK_ROW_LINE = BLOCK_ROW_LINE;

// lINE With auto checkmark for success
const BLOCK_LINE_SUCCESS = (msg, settings = null) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;

	settings.prepend = green("✔");
	BLOCK_LINE(msg, settings);
};
exports.BLOCK_LINE_SUCCESS = BLOCK_LINE_SUCCESS;

// LINE with auto X for errors
const BLOCK_LINE_ERROR = (msg, settings = null) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;

	settings.prepend = red("×");
	BLOCK_LINE(msg, settings);
};
exports.BLOCK_LINE_ERROR = BLOCK_LINE_ERROR;

// LINE with auto ! for warnings
const BLOCK_LINE_WARNING = (msg, settings) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;
	settings.prepend = yellow("!");
	BLOCK_LINE(msg, settings);
};
exports.BLOCK_LINE_WARNING = BLOCK_LINE_WARNING;

// The Start block
const BLOCK_START = (txt = null, settings = null) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;
	if (txt)
		LOGG(
			`${spaces(settings.indentBlock)}${border("topStart", settings)}${repeat(
				Math.floor(FRAME_WIDTH / 3),
				border("line", settings)
			)}${centerText(
				FRAME_WIDTH - Math.floor(FRAME_WIDTH / 3) * 2,
				bold(txt)
			)}${repeat(
				Math.floor(FRAME_WIDTH / 3),
				border("line", settings)
			)}${border("topEnd", settings)}`
		);
	else
		LOGG(
			`${spaces(settings.indentBlock)}${border("topStart", settings)}${repeat(
				FRAME_WIDTH,
				border("line", settings)
			)}${border("topEnd", settings)}`
		);
	BLOCK_LINE();
};
exports.BLOCK_START = BLOCK_START;

// A Mid Block Line
const BLOCK_MID = (txt = null, settings = null) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;
	if (txt)
		LOGG(
			`${spaces(settings.indentBlock)}${border("midStart", settings)}${repeat(
				Math.floor(FRAME_WIDTH / 3),
				border("midLine", settings)
			)}${centerText(
				FRAME_WIDTH - Math.floor(FRAME_WIDTH / 3) * 2,
				bold(txt)
			)}${repeat(
				Math.floor(FRAME_WIDTH / 3),
				`${border("midLine", settings)}`
			)}${border("midEnd")}`
		);
	else
		LOGG(
			`${spaces(settings.indentBlock)}${border("midStart", settings)}${repeat(
				FRAME_WIDTH,
				border("midLine", settings)
			)}${border("midEnd", settings)}`
		);
	BLOCK_LINE();
};
exports.BLOCK_MID = BLOCK_MID;

// Closing Block
const BLOCK_END = (txt, settings = null) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;

	BLOCK_LINE(null, settings);
	LOGG(
		`${spaces(settings.indentBlock)}${border("bottomStart", settings)}${repeat(
			FRAME_WIDTH,
			`${border("line", settings)}`
		)}${border("bottomEnd", settings)}`
	);
};
exports.BLOCK_END = BLOCK_END;

// Auto Settings display
const BLOCK_SETTINGS = async (obj, settings = null) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;

	let lines = [];

	await asyncForEach(Object.keys(obj), (value) => {
		let styledValue = stylelizeValue(obj[value]);
		let error;
		switch (value) {
			case "src":
			case "dest":
			case "template":
				if (obj[value] == false && obj[value] !== null) error = true;
				break;
			default:
				error = false;
				break;
		}

		if (error) styledValue = `${red("×")} ${styledValue}`;
		let settingLine = `${bold(value)}${spaces(20, value)}${styledValue}`;

		lines.push(settingLine);
	});

	BLOCK_LINE(null, settings);
	lines.forEach((line) => {
		BLOCK_LINE(line, settings);
	});
	BLOCK_LINE(null, settings);
};
exports.BLOCK_SETTINGS = BLOCK_SETTINGS;

const BLOCK_WARNINGS = (warning, settings = null) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;

	if (!warning || warning.length < 1) return false;
	BLOCK_LINE(null, settings);
	BLOCK_MID(`${yellow("! Warnings")}`, settings);
	warning.forEach((error) => {
		BLOCK_LINE_WARNING(error, settings);
	});
};
exports.BLOCK_WARNINGS = BLOCK_WARNINGS;

const BLOCK_ERRORS = (error, settings = null) => {
	if (settings) settings = Object.assign(defaultSettings, settings);
	else settings = defaultSettings;

	if (!error || error.length < 1) return false;
	BLOCK_LINE(null, settings);
	BLOCK_MID(`${red("× Errors")}`, settings);
	error.forEach((error) => {
		BLOCK_LINE_ERROR(error, settings);
	});
	BLOCK_END(null, settings);
	process.exit();
};
exports.BLOCK_ERRORS = BLOCK_ERRORS;
