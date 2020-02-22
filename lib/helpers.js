// Loggin Helpers
const stringWidth = require("mono-str-width");
const { red, blue, green, italic } = require("kleur");

exports.asyncForEach = async (array, callback) => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
};

const objectToString = (obj) => {
	let str = "";
	Object.keys(obj).forEach((item) => {
		let value = obj[item];
		if (typeof value == "number") value = toRoundNumber(value, 0);
		str = str + `${blue(item)}${value} `;
	});
	return str;
};
const toRoundNumber = (num, decimalPlaces = 2) => {
	return Number(
		Math.round(parseFloat(num + "e" + decimalPlaces)) + "e-" + decimalPlaces
	).toFixed(decimalPlaces);
};
exports.toRoundNumber = toRoundNumber;

const toStringValue = (value) => {
	if (typeof value == "string") return value;
	else if (typeof value == "number") return `${value}`;
	else if (value == null) return "";
	else if (typeof value == "object") return objectToString(value);
	else return value.join("");
};
exports.toStringValue = toStringValue;

const spaces = (num, value = null) => {
	let width = value;

	if (typeof value !== "number") width = stringWidth(toStringValue(value));

	let spaces = [];
	for (let i = 0; i < (value ? num - width : num); i++) {
		spaces.push(" ");
	}
	return spaces.join("");
};
exports.spaces = spaces;

exports.spacedText = (num, value) => {
	return `${value} ${spaces(num, stringWidth(toStringValue(value)) + 1)}`;
};

exports.repeat = (num, value = null) => {
	let values = [];
	for (let i = 0; i < num; i++) {
		values.push(value);
	}
	return values.join("");
};

exports.stylelizeValue = (value) => {
	if (value == null) return `${italic("null")}`;
	if (typeof value !== "boolean" && !value) return "";
	let stringValue = value.toString();
	// if (typeof value !== "string") return value;
	if (stringValue == "true") return `${green("True")}`;
	else if (stringValue == "false") return `${red("False")}`;
	else if (stringValue.includes("/")) return `${blue().italic(stringValue)}`;
	else return stringValue;
};

exports.centerText = (num, value) => {
	let values = [];
	let isEven = stringWidth(value) % 2 == 0 ? true : false;
	num = (num - stringWidth(value)) / 2;
	for (let i = 0; i < num; i++) values.push(" ");
	values.push(value);
	for (let i = 0; i < num - (isEven ? 0 : 1); i++) values.push(" ");

	return values.join("");
};

exports.breakText = (value, width) => {
	if (typeof value == "string") return [value];
	else if (typeof value == "array") return value;
	else {
		console.log("this is going seriously wrong");
	}
	// let sentences = [];

	// if (stringWidth(value) > width) {
	// 	let words = value.split(" ");
	// 	let sentence = "";
	// 	words.forEach((word, i) => {
	// 		if (stringWidth(sentence + " " + word) < width) {
	// 			sentence = sentence + " " + word;
	// 		} else {
	// 			sentences.push(sentence);
	// 			sentence = word;
	// 		}
	// 	});
	// 	return sentences;
	// } else value;
};
