import {
  spaces,
  repeat,
  centerText,
  stylelizeValue,
  breakText,
  toStringValue,
  spacedText,
  asyncForEach,
} from "../helpers";

import readline from "readline";

const highlight = require("cli-highlight").highlight;

import { SettingsArgType } from "../types";
import { border } from "../border";
import { defaultSettings } from "../settings";

import { red, yellow, bgBlue, green, bold } from "kleur";
import stringWidth from "mono-str-width";
import { Console } from "console";

export const FRAME_WIDTH =
  process.stdout.columns <
  defaultSettings.frameWidth + defaultSettings.indentBlock * 2 + 2
    ? process.stdout.columns - defaultSettings.indentBlock * 2
    : defaultSettings.frameWidth;

export const PADDING = FRAME_WIDTH / 10;
export const CONTENT_WIDTH = FRAME_WIDTH - PADDING * 2;

// LOGGER. Can be switched off
const LOGG = (v: string = "", settings: SettingsArgType = defaultSettings) => {
  settings = { ...defaultSettings, ...settings };
  if (settings.newLine)
    v ? process.stdout.write(v + "\n") : process.stdout.write("\n");
  else v ? process.stdout.write(v) : process.stdout.write("");
};
export const CLEAR = () => {
  process.stdout.clearLine(null);
  process.stdout.cursorTo(0);
};

export const NEW_LINE = () => process.stdout.write("\n");

export const RENEW_LINE = (msg: string): void => {
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`${msg}`);
};

// Start the code with a block with a title.
export const START = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };
  LOGG("\n", settings);
  LOGG(
    spaces(PADDING + settings.indentBlock) + bgBlue().black(" " + msg + " "),
    settings
  );
  LOGG("\n", settings);
};

// The basic line.
export const BLOCK_LINE = (
  msg: string | null | Array<string> = null,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };

  if (msg == null) {
    LOGG(
      spaces(settings.indentBlock) +
        border("side", settings) +
        spaces(FRAME_WIDTH) +
        border("side", settings),
      settings
    );
    return;
  }

  if (typeof msg == "string") msg = breakText(msg, CONTENT_WIDTH);

  msg.forEach((txt, i) => {
    if (i == 0) txt = `${settings.prefix ? settings.prefix + " " : ""}${txt}`;
    else
      txt = `${
        settings.prefix ? spaces(stringWidth(settings.prefix)) + " " : ""
      }${txt}`;

    LOGG(
      spaces(settings.indentBlock) +
        border("side", settings) +
        spaces(PADDING) +
        spacedText(CONTENT_WIDTH, txt) +
        spaces(PADDING) +
        border("side", settings),
      settings
    );
  });
};

// lINE With auto checkmark for success
export const EMPTY = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  LOGG(null, settings);
};

export const BLOCK_ROW_LINE = (
  arr: Array<any>,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };

  let str = "";
  arr = arr.map((item) => toStringValue(item));
  let COLUMN_WIDTH = Math.floor(CONTENT_WIDTH / arr.length) - 1;
  arr.forEach((item) => {
    str = str + spacedText(COLUMN_WIDTH, item.toString());
  });

  BLOCK_LINE(str, settings);
};

// lINE With auto checkmark for success
export const BLOCK_LINE_SUCCESS = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };

  settings.prefix = green("✔");
  BLOCK_LINE(msg, settings);
};

// LINE with auto X for errors
export const BLOCK_LINE_ERROR = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };

  settings.prefix = red("×");
  BLOCK_LINE(msg, settings);
};

// LINE with auto ! for warnings
export const BLOCK_LINE_WARNING = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };

  settings.prefix = yellow("!");
  BLOCK_LINE(msg, settings);
};

// The Start block
export const BLOCK_START = (
  txt: string = "",
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };

  if (txt)
    LOGG(
      `${spaces(settings.indentBlock)}${border("topStart", settings)}${repeat(
        Math.floor(FRAME_WIDTH / 3),
        border("line", settings)
      )}${centerText(
        bold(txt),
        FRAME_WIDTH - Math.floor(FRAME_WIDTH / 3) * 2
      )}${repeat(
        Math.floor(FRAME_WIDTH / 3),
        border("line", settings)
      )}${border("topEnd", settings)}`,
      settings
    );
  else
    LOGG(
      `${spaces(settings.indentBlock)}${border("topStart", settings)}${repeat(
        FRAME_WIDTH,
        border("line", settings)
      )}${border("topEnd", settings)}`,
      settings
    );
  BLOCK_LINE(null, settings);
};

// A Mid Block Line
export const BLOCK_MID = (
  txt = null,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };

  BLOCK_LINE(null, settings);
  if (txt)
    LOGG(
      `${spaces(settings.indentBlock)}${border("midStart", settings)}${repeat(
        Math.floor(FRAME_WIDTH / 3),
        border("midLine", settings)
      )}${centerText(
        bold(txt),
        FRAME_WIDTH - Math.floor(FRAME_WIDTH / 3) * 2
      )}${repeat(
        Math.floor(FRAME_WIDTH / 3),
        `${border("midLine", settings)}`
      )}${border("midEnd", settings)}`,
      settings
    );
  else
    LOGG(
      `${spaces(settings.indentBlock)}${border("midStart", settings)}${repeat(
        FRAME_WIDTH,
        border("midLine", settings)
      )}${border("midEnd", settings)}`,
      settings
    );
  BLOCK_LINE(null, settings);
};

// Closing Block
export const BLOCK_END = (
  txt: string | null = null,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };

  BLOCK_LINE(null, settings);
  if (txt)
    LOGG(
      `${spaces(settings.indentBlock)}${border(
        "bottomStart",
        settings
      )}${repeat(
        Math.floor(FRAME_WIDTH / 3),
        border("line", settings)
      )}${centerText(
        bold(txt),
        FRAME_WIDTH - Math.floor(FRAME_WIDTH / 3) * 2
      )}${repeat(
        Math.floor(FRAME_WIDTH / 3),
        `${border("line", settings)}`
      )}${border("bottomEnd", settings)}`,
      settings
    );
  else
    LOGG(
      `${spaces(settings.indentBlock)}${border(
        "bottomStart",
        settings
      )}${repeat(FRAME_WIDTH, `${border("line", settings)}`)}${border(
        "bottomEnd",
        settings
      )}`,
      settings
    );
};

interface SettingsConfig {
  exclude?: string[];
  include?: string[];
}

export const BLOCK_JSON = async (
  obj: any,
  settings: SettingsArgType = defaultSettings
): Promise<void> => {
  settings = { ...defaultSettings, ...settings };

  const text = highlight(JSON.stringify(obj, null, "\t"), {
    language: "json",
    ignoreIllegals: true,
  });
  const lines = text.split("\n");

  BLOCK_LINE(null, settings);
  lines.forEach((line) => {
    BLOCK_LINE(line.replace(/\t/g, " "), settings);
  });
  BLOCK_LINE(null, settings);
};
// Auto Settings display
export const BLOCK_SETTINGS = async (
  obj: any,
  config: SettingsConfig | null = null,
  settings: SettingsArgType = defaultSettings
): Promise<void> => {
  settings = { ...defaultSettings, ...settings };

  let lines = [];

  await asyncForEach(Object.keys(obj), (value: string) => {
    let styledValue = stylelizeValue(obj[value]);
    let error;
    switch (value) {
      case "src":
      case "dest":
      case "template":
        if (!obj[value]) error = true;
        break;
      default:
        error = false;
        break;
    }

    if (error) styledValue = `${red("×")} ${styledValue}`;

    if (
      (config && config.exclude && !config.exclude.includes(value)) ||
      !config ||
      (!config.exclude && !config.include) ||
      (config && config.include && config.include.includes(value))
    )
      lines.push(`${bold(value)}${spaces(20, value)}${styledValue}`);
  });

  BLOCK_LINE(null, settings);
  lines.forEach((line) => {
    BLOCK_LINE(line, settings);
  });
  BLOCK_LINE(null, settings);
};

export const BLOCK_WARNINGS = (
  warning,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };

  if (!warning || warning.length < 1) return false;
  BLOCK_LINE(null, settings);
  BLOCK_MID(`${yellow("! Warnings")}`, settings);
  warning.forEach((error) => {
    BLOCK_LINE_WARNING(error, settings);
  });
};

export const BLOCK_ERRORS = (
  error,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...defaultSettings, ...settings };

  if (!error || error.length < 1) return false;
  BLOCK_LINE(null, settings);
  BLOCK_MID(`${red("× Errors")}`, settings);
  error.forEach((error) => {
    BLOCK_LINE_ERROR(error, settings);
  });
  BLOCK_END(null, settings);
  process.exit();
};
