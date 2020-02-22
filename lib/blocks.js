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

const { red, yellow, bgBlue, blue, green, bold, italic } = require("kleur");
const size = require("window-size");

const FRAME_WIDTH = size.width < 80 ? size.width - 5 : 80;
exports.FRAME_WIDTH = FRAME_WIDTH;

let block = {
	line: yellow("━"),
	midLine: yellow("─"),
	side: yellow("┃"),
	topStart: yellow("┏"),
	topEnd: yellow("┓"),
	bottomStart: yellow("┗"),
	bottomEnd: yellow("┛"),
	midStart: yellow("┠"),
	midEnd: yellow("┨")
};

// LOGGER. Can be switched off
const LOGG = (v) => (v ? console.log(v) : false);
exports.LOGG = LOGG;

// Start the code with a block with a title.
const START = (msg) => {
	LOGG("\n");
	LOGG(`\t${bgBlue().black(" " + msg + " ")}`);
	LOGG("\n");
};
exports.START = START;

// The basic line.
const LINE = (msg = null, prepend = "") => {
	if (msg == null) {
		LOGG(`${block.side}${spaces(FRAME_WIDTH)}${block.side}`);
		return;
	}
	if (typeof msg == "string") msg = breakText(msg);

	msg.forEach((txt, i) => {
		if (i == 0) txt = `${prepend ? prepend + " " : ""} ${txt}`;
		else txt = `${prepend ? spaces(prepend) + " " : ""} ${txt}`;

		LOGG(
			`${block.side}${spaces(FRAME_WIDTH / 10)}${txt}${spaces(
				FRAME_WIDTH - FRAME_WIDTH / 10,
				txt
			)}${block.side}`
		);
	});
};
exports.LINE = LINE;

// lINE With auto checkmark for success
const LINE_SUCCESS = (msg) => {
	LINE(msg, green("✔"));
};
exports.LINE_SUCCESS = LINE_SUCCESS;

// lINE With auto checkmark for success
const EMPTY = (msg) => {
	LOGG();
};
exports.EMPTY = EMPTY;

const ROW_LINE = (arr) => {
	let str = "";
	arr = arr.map((item) => toStringValue(item));
	let COLUMN_WIDTH = (FRAME_WIDTH - (FRAME_WIDTH / 10) * 2) / arr.length;

	arr.forEach((item) => {
		str = str + spacedText(COLUMN_WIDTH, item);
	});

	LINE(str);
};
exports.ROW_LINE = ROW_LINE;

// LINE with auto X for errors
const LINE_ERROR = (msg) => {
	LINE(msg, red("×"));
};
exports.LINE_ERROR = LINE_ERROR;

// LINE with auto ! for warnings
const LINE_WARNING = (msg) => {
	LINE(msg, yellow("!"));
};
exports.LINE_WARNING = LINE_WARNING;

// The Start block
const START_BLOCK = (txt = null) => {
	if (txt)
		LOGG(
			`${block.topStart}${repeat(
				Math.floor(FRAME_WIDTH / 3),
				block.line
			)}${centerText(
				FRAME_WIDTH - Math.floor(FRAME_WIDTH / 3) * 2,
				bold(txt)
			)}${repeat(Math.floor(FRAME_WIDTH / 3), block.line)}${block.topEnd}`
		);
	else
		LOGG(`${block.topStart}${repeat(FRAME_WIDTH, block.line)}${block.topEnd}`);
	LINE();
};
exports.START_BLOCK = START_BLOCK;

// A Mid Block Line
const MID_BLOCK = (txt = null) => {
	if (txt)
		LOGG(
			`${block.midStart}${repeat(
				Math.floor(FRAME_WIDTH / 3),
				block.midLine
			)}${centerText(
				FRAME_WIDTH - Math.floor(FRAME_WIDTH / 3) * 2,
				bold(txt)
			)}${repeat(Math.floor(FRAME_WIDTH / 3), `${block.midLine}`)}${
				block.midEnd
			}`
		);
	else
		LOGG(
			`${block.midStart}${repeat(FRAME_WIDTH, block.midLine)}${block.midEnd}`
		);
	LINE();
};
exports.MID_BLOCK = MID_BLOCK;

// Closing Block
const END_BLOCK = () => {
	LINE();
	LOGG(
		`${block.bottomStart}${repeat(FRAME_WIDTH, `${block.line}`)}${
			block.bottomEnd
		}`
	);
};
exports.END_BLOCK = END_BLOCK;

// Auto Settings display
const SETTINGS_BLOCK = async (settings) => {
	let lines = [];

	await asyncForEach(Object.keys(settings), (value) => {
		let styledValue = stylelizeValue(settings[value]);
		let error;
		switch (value) {
			case "src":
			case "dest":
			case "template":
				if (settings[value] == false && settings[value] !== null) error = true;
				break;
			default:
				error = false;
				break;
		}

		if (error) styledValue = `${red("×")} ${styledValue}`;
		let settingLine = `${bold(value)}${spaces(20, value)}${styledValue}`;

		lines.push(settingLine);
	});

	LINE();
	lines.forEach((line) => {
		LINE(line);
	});
	LINE();
};
exports.SETTINGS_BLOCK = SETTINGS_BLOCK;

const WARNING_BLOCK = (warning) => {
	if (!warning || warning.length < 1) return false;
	LINE();
	MID_BLOCK(null, `${yellow("! Warnings")}`);
	warning.forEach((error) => {
		LINE_WARNING(error);
	});
};
exports.WARNING_BLOCK = WARNING_BLOCK;

const ERROR_BLOCK = (error) => {
	if (!error || error.length < 1) return false;
	LINE();
	MID_BLOCK(null, `${red("× Errors")}`);
	error.forEach((error) => {
		LINE_ERROR(error);
	});
	END_BLOCK();
	process.exit();
};
exports.ERROR_BLOCK = ERROR_BLOCK;
