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

  await asyncForEach(Object.keys(obj), (value: string) => {
    let styledValue = stylizeValue(obj[value]);
    let error: boolean = false;

    ["src", "dest", "template"].includes(value) &&
      !obj[value] &&
      (error = true);

    if (error) styledValue = `${red("×")} ${styledValue}`;

    if (
      (config && config.exclude && !config.exclude.includes(value)) ||
      !config ||
      (!config.exclude && !config.include) ||
      (config && config.include && config.include.includes(value))
    )
      settingLines.push(`${bold(value)}${spaces(20, value)}${styledValue}`);
  });

  lines.push(CREATE_BLOCK_LINE(null, settings)[0]);
  settingLines.forEach((line) => {
    lines.push(CREATE_BLOCK_LINE(line, settings)[0]);
  });
  lines.push(CREATE_BLOCK_LINE(null, settings)[0]);

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
