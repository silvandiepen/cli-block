import readline from "readline";
import { SettingsArgType } from "../types";
import { defaultSettings, useSettings } from "../settings";
import { promisify } from ".";

export const LOGG = (
  v: string = "",
  settings: SettingsArgType = defaultSettings
) => {
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
