import {
  spaces,
  repeat,
  centerText,
  stylizeValue,
  breakText,
  toStringValue,
  spacedText,
  asyncForEach,
} from "../helpers";

import readline from "readline";

const highlight = require("cli-highlight").highlight;

import { SettingsArgType, CounterOptions, LoaderOptions } from "../types";
import { border } from "../border";
import { defaultSettings } from "../settings";

import { red, yellow, green, bold } from "kleur";
import stringWidth from "mono-str-width";

import {
  getContentWidth,
  getPadding,
  getFrameWidth,
  useSettings,
} from "../settings";
import { resolve } from "path";

export const BLOCK_LOADER = async (
  args: LoaderOptions = {},
  settings: SettingsArgType = defaultSettings
): Promise<void> => {
  let config = {
    message: "[percentage] [loader]",
    increment: 1,
    width: "100%",
    start: 0,
    end: 100,
    interval: 25,
    charFilled: "▒",
    charUnfilled: "░",
    ...args,
  };

  let i = config.start;
  const countDown = config.start > config.end;

  const loadBar = () => {
    const width =
      config.width == "100%"
        ? getContentWidth() - 7
        : ((config.end - config.start) *
            (typeof config.width == "string"
              ? parseInt(config.width)
              : config.width)) /
          100;

    const step = Math.round(((100 / i ? i : 1) * width) / 100);
    const filled = Math.floor(width - (width - step));
    let unfilled = Math.floor(width - step);

    if (filled + unfilled !== width) unfilled = unfilled + 1;

    const msg = `${repeat(filled, config.charFilled)}${repeat(
      unfilled,
      config.charUnfilled
    )}`;
    return msg;
  };

  const loaderAction = () => {
    CLEAR();

    const loader = loadBar();
    const percentage = `${i}%`;

    let message = config.message
      .replace("[loader]", loader)
      .replace("[percentage]", spacedText(4, percentage));
    i = countDown ? i - config.increment : i + config.increment;
    BLOCK_LINE(message, {
      ...settings,
      newLine: false,
    });
  };
  loaderAction();

  return await new Promise((resolve) => {
    let count = setInterval(() => {
      loaderAction();

      const isEnding = countDown ? i >= config.end - 1 : i >= config.end + 1;

      if (isEnding) {
        NEW_LINE();
        resolve();
        clearInterval(count);
      }
    }, config.interval);
  });
};

export const BLOCK_COUNTER = async (
  args: CounterOptions = {},
  settings: SettingsArgType = defaultSettings
): Promise<void> => {
  const config = {
    message: "My message [count] to go",
    increment: 1,
    start: 0,
    end: 100,
    interval: 100,
    ...args,
  };

  // Define variables
  let i = config.start;
  let step = 0;

  const messageCount = config.messages?.length || 0;
  const stepsCount =
    (config.start > config.end
      ? config.start - config.end + 1
      : config.end - config.start + 1) / config.increment;
  const doSteps = messageCount > 0 && messageCount == stepsCount;
  const countDown = config.start > config.end;

  // Prepare action
  const counterAction = () => {
    CLEAR();

    let message = doSteps
      ? config.messages[step].replace("[count]", i.toString())
      : config.message.replace("[count]", i.toString());

    BLOCK_LINE(message, {
      ...settings,
      newLine: i == config.end,
    });

    i = countDown ? i - config.increment : i + config.increment;
    doSteps && step++;
  };

  counterAction();
  // Do the Interval
  return await new Promise((resolve) => {
    let count = setInterval(() => {
      counterAction();

      const isEnding =
        (countDown ? i == config.end - 1 : i == config.end + 1) ||
        (doSteps && step == stepsCount);

      if (isEnding) {
        // if (countDown) NEW_LINE();
        resolve();
        clearInterval(count);
      }
    }, config.interval);
  });
  // return;
};

// LOGGER. Can be switched off
const LOGG = (v: string = "", settings: SettingsArgType = defaultSettings) => {
  settings = useSettings(settings);
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
  settings = { ...useSettings(settings), borderColor: "blue" };

  EMPTY();
  // BLOCK_START(null, settings);
  LOGG(`${spaces(settings.indentBlock)} ${bold().blue(msg)}`, settings);
  // BLOCK_END(null, settings);
  EMPTY();
};

// The basic line.
export const BLOCK_LINE = (
  msg: string | null | Array<string> = null,
  settings: SettingsArgType = defaultSettings
) => {
  settings = useSettings(settings);
  if (msg == null) {
    LOGG(
      spaces(settings.indentBlock) +
        border("side", settings) +
        spaces(getFrameWidth(settings)) +
        border("side", settings),
      settings
    );
    return;
  }

  if (typeof msg == "string") msg = breakText(msg, getContentWidth(settings));

  msg.forEach((txt, i) => {
    if (i == 0) txt = `${settings.prefix ? settings.prefix + " " : ""}${txt}`;
    else
      txt = `${
        settings.prefix ? spaces(stringWidth(settings.prefix)) + " " : ""
      }${txt}`;

    LOGG(
      spaces(settings.indentBlock) +
        border("side", settings) +
        spaces(getPadding(settings)) +
        spacedText(getContentWidth(settings), txt) +
        spaces(getPadding(settings)) +
        border("side", settings),
      settings
    );
  });
};

// lINE With auto checkmark for success
export const EMPTY = (
  msg: string = "",
  settings: SettingsArgType = defaultSettings
) => {
  LOGG(null, settings);
};

export const BLOCK_ROW_LINE = (
  arr: Array<any>,
  settings: SettingsArgType = defaultSettings
) => {
  settings = useSettings(settings);

  let str = "";
  arr = arr.map((item) => toStringValue(item));
  let COLUMN_WIDTH = Math.floor(getContentWidth(settings) / arr.length) - 1;

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
  settings = useSettings(settings);

  settings.prefix = green("✔");
  BLOCK_LINE(msg, settings);
};

// LINE with auto X for errors
export const BLOCK_LINE_ERROR = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  settings = useSettings(settings);

  settings.prefix = red("×");
  BLOCK_LINE(msg, settings);
};

// LINE with auto ! for warnings
export const BLOCK_LINE_WARNING = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  settings = useSettings(settings);

  settings.prefix = yellow("!");
  BLOCK_LINE(msg, settings);
};

// The Start block
export const BLOCK_START = (
  txt: string = "",
  settings: SettingsArgType = defaultSettings
) => {
  settings = useSettings(settings);

  if (txt)
    LOGG(
      `${spaces(settings.indentBlock)}${border("topStart", settings)}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        border("startLine", settings)
      )}${centerText(
        bold(txt),
        getFrameWidth(settings) - Math.floor(getFrameWidth(settings) / 3) * 2
      )}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        border("startLine", settings)
      )}${border("topEnd", settings)}`,
      settings
    );
  else
    LOGG(
      `${spaces(settings.indentBlock)}${border("topStart", settings)}${repeat(
        getFrameWidth(settings),
        border("startLine", settings)
      )}${border("topEnd", settings)}`,
      settings
    );
  settings.autoSpace && BLOCK_LINE(null, settings);
};

// A Mid Block Line
export const BLOCK_MID = (
  txt = null,
  settings: SettingsArgType = defaultSettings
) => {
  settings = useSettings(settings);

  settings.autoSpace && BLOCK_LINE(null, settings);
  if (txt)
    LOGG(
      `${spaces(settings.indentBlock)}${border("midStart", settings)}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        border("midLine", settings)
      )}${centerText(
        bold(txt),
        getFrameWidth(settings) - Math.floor(getFrameWidth(settings) / 3) * 2
      )}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        `${border("midLine", settings)}`
      )}${border("midEnd", settings)}`,
      settings
    );
  else
    LOGG(
      `${spaces(settings.indentBlock)}${border("midStart", settings)}${repeat(
        getFrameWidth(settings),
        border("midLine", settings)
      )}${border("midEnd", settings)}`,
      settings
    );
  settings.autoSpace && BLOCK_LINE(null, settings);
};

// Closing Block
export const BLOCK_END = (
  txt: string | null = null,
  settings: SettingsArgType = defaultSettings
) => {
  settings = useSettings(settings);

  settings.autoSpace && BLOCK_LINE(null, settings);
  if (txt)
    LOGG(
      `${spaces(settings.indentBlock)}${border(
        "bottomStart",
        settings
      )}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        border("endLine", settings)
      )}${centerText(
        bold(txt),
        getFrameWidth(settings) - Math.floor(getFrameWidth(settings) / 3) * 2
      )}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        `${border("endLine", settings)}`
      )}${border("bottomEnd", settings)}`,
      settings
    );
  else
    LOGG(
      `${spaces(settings.indentBlock)}${border(
        "bottomStart",
        settings
      )}${repeat(
        getFrameWidth(settings),
        `${border("endLine", settings)}`
      )}${border("bottomEnd", settings)}`,
      settings
    );
};

interface SettingsConfig {
  exclude?: string[];
  include?: string[];
}

export const BLOCK_TABLE = async (
  table: any[],
  settings: SettingsArgType = defaultSettings
): Promise<void> => {
  settings = useSettings(settings);

  const getTableWidth = (table: any[]): number => {
    let height = 1;
    table.forEach((item) => {
      if (typeof item == "object" && height < item.length) height = item.length;
    });
    return height;
  };

  const totalWidth = getContentWidth(settings);

  const width =
    Math.floor(getContentWidth(settings) / getTableWidth(table)) - 2;

  // Check if all tables

  table = table.map((item) =>
    typeof item == "string" ? (item = [item]) : (item = item)
  );

  settings.tableSpace && (table = [[], ...table, []]);
  settings.tableHeader && table.splice(2, 0, []);
  // for (let r = 0; r < table.length; r++) {

  table = table.map((row) => {
    return (row = [
      ...row,
      ...new Array(getTableWidth(table) - row.length),
    ]).map((i) =>
      i == undefined
        ? (i = spacedText(width, ""))
        : (i = spacedText(width, stylizeValue(i)))
    );
  });

  settings.tableHeader &&
    (table[1] = table[1].map((item) => (item = `${bold(item)}`)));

  table.forEach((row) => {
    BLOCK_LINE(row.join(` ${border("side", settings)} `), settings);
  });
};

export const BLOCK_JSON = async (
  obj: any,
  settings: SettingsArgType = defaultSettings
): Promise<void> => {
  settings = useSettings(settings);

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
  settings: SettingsArgType = defaultSettings,
  config: SettingsConfig | null = null
): Promise<void> => {
  settings = useSettings(settings);

  let lines = [];

  await asyncForEach(Object.keys(obj), (value: string) => {
    let styledValue = stylizeValue(obj[value]);
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
  settings = useSettings(settings);

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
  settings = useSettings(settings);

  if (!error || error.length < 1) return false;
  BLOCK_LINE(null, settings);
  BLOCK_MID(`${red("× Errors")}`, settings);
  error.forEach((error) => {
    BLOCK_LINE_ERROR(error, settings);
  });
  BLOCK_END(null, settings);
  process.exit();
};
