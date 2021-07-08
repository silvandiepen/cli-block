import { green, red, yellow } from "kleur";

import { SettingsArgType } from "../types";
import { useSettings, defaultSettings } from "../settings";
import { LOGG } from "../util";
import { CREATE_BLOCK_LINE, CREATE_BLOCK_MID, CREATE_BLOCK_END } from "./";
/*

  BLOCK LINES SUCCESS / ERROR / WARNING

*/

// lINE With auto checkmark for success
export const CREATE_BLOCK_LINE_SUCCESS = (
  msg: string,
  settings: SettingsArgType = defaultSettings
): string[] =>
  CREATE_BLOCK_LINE(msg, { ...useSettings(settings), prefix: green("✔") });

export const BLOCK_LINE_SUCCESS = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  CREATE_BLOCK_LINE_SUCCESS(msg, settings).forEach((txt) =>
    LOGG(txt, settings)
  );
};

// LINE with auto X for errors
export const CREATE_BLOCK_LINE_ERROR = (
  msg: string,
  settings: SettingsArgType = defaultSettings
): string[] =>
  CREATE_BLOCK_LINE(msg, { ...useSettings(settings), prefix: red("×") });

export const BLOCK_LINE_ERROR = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  CREATE_BLOCK_LINE_ERROR(msg, settings).forEach((txt) => LOGG(txt, settings));
};

// LINE with auto ! for warnings
export const CREATE_BLOCK_LINE_WARNING = (
  msg: string,
  settings: SettingsArgType = defaultSettings
): string[] =>
  CREATE_BLOCK_LINE(msg, { ...useSettings(settings), prefix: yellow("!") });

export const BLOCK_LINE_WARNING = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  CREATE_BLOCK_LINE_WARNING(msg, settings).forEach((txt) =>
    LOGG(txt, settings)
  );
};

export const CREATE_BLOCK_WARNINGS = (
  warning: string[],
  settings: SettingsArgType = defaultSettings
): string[] => {
  settings = useSettings(settings);

  if (!warning || warning.length < 1) return [];

  let lines: string[] = [];

  lines.push(CREATE_BLOCK_LINE(null, settings)[0]);
  lines.push(CREATE_BLOCK_MID(`${yellow("! Warnings")}`, settings)[0]);
  warning.forEach((error) => {
    lines.push(CREATE_BLOCK_LINE_WARNING(error, settings)[0]);
  });
  return lines;
};

export const CREATE_BLOCK_ERRORS = (
  error: string[],
  settings: SettingsArgType = defaultSettings
): string[] => {
  settings = useSettings(settings);

  if (!error || error.length < 1) return [];

  let lines: string[] = [];

  lines.push(CREATE_BLOCK_LINE(null, settings)[0]);
  lines.push(CREATE_BLOCK_MID(`${red("× Errors")}`, settings)[0]);
  error.forEach((error) => {
    lines.push(CREATE_BLOCK_LINE_ERROR(error, settings)[0]);
  });
  lines.push(CREATE_BLOCK_END(null, settings)[0]);

  return lines;
};
