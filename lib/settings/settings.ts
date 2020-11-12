import { SettingsType, SettingsArgType } from "../types";
export const defaultSettings: SettingsType = {
  borderType: "single",
  borderColor: "dim",
  frameWidth: 80,
  indentBlock: 5,
  prefix: "",
  newLine: true,
  autoSpace: true,
  tableHeader: true,
  tableSpace: true,
  padding: -1,
};

let cliSettings = {};

export const useSettings = (settings: SettingsArgType): SettingsType => {
  return {
    ...defaultSettings,
    ...cliSettings,
    ...settings,
  };
};

export const getFrameWidth = (
  settings: SettingsArgType = defaultSettings
): number => {
  settings = useSettings(settings);
  return process.stdout.columns <
    settings.frameWidth + settings.indentBlock * 2 + 2
    ? process.stdout.columns - settings.indentBlock * 2
    : settings.frameWidth;
};

export const getPadding = (
  settings: SettingsArgType = defaultSettings
): number =>
  (settings = useSettings(settings)) && settings.padding > -1
    ? settings.padding
    : getFrameWidth(settings) / 10;

export const getContentWidth = (
  settings: SettingsArgType = defaultSettings
): number => {
  settings = useSettings(settings);

  return getFrameWidth(settings) - getPadding(settings) * 2;
};
