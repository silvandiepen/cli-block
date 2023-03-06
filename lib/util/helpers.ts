// Logging Helpers
import stringWidth from "mono-str-width";
import { toRoundNumber } from "@sil/tools";

export const strWidth = stringWidth;

import { red, blue, green, italic, yellow ,color } from "../util";
import { COLOR, isCOLOR, toHex } from "@sil/color";

export const objectToString = (obj: any) => {
  let str = "";
  Object.keys(obj).forEach((item) => {
    let value = obj[item];
    if (typeof value == "number") value = toRoundNumber(value, 0);
    str = str + `${blue(item)}${value} `;
  });
  return str;
};

export const toStringValue = (value: any) => {
  if (typeof value == "string") return value;
  else if (typeof value == "number") return `${value}`;
  else if (typeof value == "boolean") return `${value ? "true" : "false"}`;
  else if (value == null) return "";
  else if (typeof value == "object") return objectToString(value);
  else return value.join("");
};

export const spaces = (num: number, value = null) => {
  let width = value;

  if (typeof value !== "number") width = stringWidth(toStringValue(value));

  let spaces = [];
  for (let i = 0; i < (value ? num - width : num); i++) {
    spaces.push(" ");
  }
  return spaces.join("");
};

export const spacedText = (num: number, value: string) => {
  return `${value} ${spaces(num, stringWidth(toStringValue(value)) + 1)}`;
};

export const stylizeValue = (
  value: string | number | boolean | string[] | object
) => {
  let stringValue = "";

  // Empty string
  if (value == null) stringValue = `${italic("null")}`;
  // If there is not value
  else if (typeof value !== "boolean" && !value) stringValue = "";
  // If the value is object of non-strings
  else if (typeof value === "object" && typeof value[0] !== "string") {
    stringValue = Object.keys(value).join(", ");
  }
  // If the value is an array of strings
  else if (Array.isArray(value)) stringValue = value.join(", ");
  else stringValue = value.toString();

  if (typeof value == "number") stringValue = `${yellow(value)}`;

  if (stringValue == "true") return `${green("True")}`;
  else if (stringValue == "false") return `${red("False")}`;
  else if (stringValue.includes("/")) return `${blue().italic(stringValue)}`;

  // If the value is a color
  if (isCOLOR(value)) {
    const hexColor = toHex(value as COLOR);
    return `${color(`▶`,hexColor)} ${stringValue}`;
     } else return stringValue;
};

export const centerText = (value: string, num: number) => {
  let values = [];
  let isEven = stringWidth(value) % 2 == 0 ? true : false;
  num = (num - stringWidth(value)) / 2;
  for (let i = 0; i < num; i++) values.push(" ");
  values.push(value);
  for (let i = 0; i < num - (isEven ? 0 : 1); i++) values.push(" ");

  return values.join("");
};

export const breakText = (value: string, width: number) => {
  if (typeof value !== "string") return value;

  let sentences = [];

  if (stringWidth(value) > width) {
    let words = value.split(" ");
    let sentence = "";
    words.forEach((word, i) => {
      if (stringWidth(sentence + " " + word) < width) {
        sentence = sentence + " " + word;
      } else {
        sentences.push(sentence);
        sentence = word;
      }
    });
    return sentences;
  } else return [value];
};
