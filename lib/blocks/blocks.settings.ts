import { bold, red } from "kleur";

import {
  useSettings,
  SettingsArgType,
  defaultSettings,
  SettingsConfig,
} from "../settings";
import { CREATE_BLOCK_LINE } from "./blocks.line";
import { asyncForEach, stylizeValue, spaces, LOGG } from "../util";

// Auto Settings display
export const CREATE_BLOCK_SETTINGS = async (
  obj: any,
  settings: SettingsArgType = defaultSettings,
  config: SettingsConfig | null = null
): Promise<string[]> => {
  settings = useSettings(settings);

  let settingLines = [];
  let lines: string[] = [];

  config = { exclude: [], include: [], spaced: true, ...config };

  await asyncForEach(Object.keys(obj), (value: string) => {
    let styledValue = stylizeValue(obj[value]);
    let error: boolean = false;

    ["src", "dest", "template"].includes(value) &&
      !obj[value] &&
      (error = true);

    if (error) styledValue = `${red("×")} ${styledValue}`;

    console.log(config);
    if (!config.exclude.includes(value)) {
      if (
        (config.include.length > 0 && config.include.includes(value)) ||
        !config.include.length
      ) {
        settingLines.push(`${bold(value)}${spaces(20, value)}${styledValue}`);
      }
    }
  });

  config.spaced && lines.push(CREATE_BLOCK_LINE(null, settings)[0]);
  settingLines.forEach((line) => {
    lines.push(CREATE_BLOCK_LINE(line, settings)[0]);
  });
  config.spaced && lines.push(CREATE_BLOCK_LINE(null, settings)[0]);

  return lines;
};

export const BLOCK_SETTINGS = async (
  obj: any,
  settings: SettingsArgType = defaultSettings,
  config: SettingsConfig | null = null
): Promise<void> => {
  const lines = await CREATE_BLOCK_SETTINGS(obj, settings, config);
  lines.forEach((line) => LOGG(line, settings));
};
