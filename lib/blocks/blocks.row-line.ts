import { SettingsArgType } from "../types";
import { useSettings, defaultSettings, getContentWidth } from "../settings";
import { LOGG, spacedText, toStringValue } from "../util";
import { CREATE_BLOCK_LINE } from "./blocks.line";
/*

  BLOCK ROW LINE

*/
export const CREATE_BLOCK_ROW_LINE = (
  arr: any[],
  settings: SettingsArgType = defaultSettings
): string[] => {
  settings = useSettings(settings);

  let str = "";
  arr = arr.map((item) => toStringValue(item));
  let COLUMN_WIDTH = Math.floor(getContentWidth(settings) / arr.length) - 1;

  arr.forEach((item) => {
    str = str + spacedText(COLUMN_WIDTH, item.toString());
  });

  return CREATE_BLOCK_LINE(str);
};

export const BLOCK_ROW_LINE = (
  arr: Array<any>,
  settings: SettingsArgType = defaultSettings
): void =>
  CREATE_BLOCK_ROW_LINE(arr, settings).forEach((line) => LOGG(line, settings));
