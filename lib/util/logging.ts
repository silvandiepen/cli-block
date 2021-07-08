import readline from "readline";
import { LoggerType, SettingsArgType } from "../types";
import { defaultSettings, useSettings } from "../settings";
import { promisify } from "../util";

export const LOGG = (
  v: string = "",
  settings: SettingsArgType = defaultSettings
) => {
  const { newLine, logger } = useSettings(settings);

  switch (logger) {
    case LoggerType.CONSOLE:
      console.log(v);
      break;
    case LoggerType.STDOUT:
      process.stdout.write(newLine ? v + "\n" : v);
      break;
  }
};

export const CLEAR = () => {
  process.stdout.clearLine(null);
  process.stdout.cursorTo(0);
};

export const NEW_LINE = () => process.stdout.write("\n");
export const ASYNC_NEW_LINE = async () => await promisify(NEW_LINE as Function);

export const RENEW_LINE = (msg: string): void => {
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`${msg}`);
};

export const EMPTY = (
  msg: string = "",
  settings: SettingsArgType = defaultSettings
) => {
  LOGG(null, settings);
};
