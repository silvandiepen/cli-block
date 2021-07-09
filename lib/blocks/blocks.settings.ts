import { bold, red } from "kleur";

import { useSettings, LoggerSettings, SettingsConfig } from "../settings";
import { createBlockLine } from "./blocks.line";
import { asyncForEach, stylizeValue, spaces, logger } from "../util";

// Auto Settings display
export const createBlockSettings = async (
  obj: any,
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): Promise<string[]> => {
  const cfg = useSettings(settings);

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

    if (!config.exclude.includes(value)) {
      if (
        (config.include.length > 0 && config.include.includes(value)) ||
        !config.include.length
      ) {
        settingLines.push(`${bold(value)}${spaces(20, value)}${styledValue}`);
      }
    }
  });

  config.spaced && lines.push(createBlockLine(null, settings)[0]);
  settingLines.forEach((line) => {
    lines.push(createBlockLine(line, settings)[0]);
  });
  config.spaced && lines.push(createBlockLine(null, settings)[0]);

  return lines;
};

export const blockSettings = async (
  obj: any,
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): Promise<void> => {
  const lines = await createBlockSettings(obj, settings, config);
  lines.forEach((line) => logger(line, settings));
};
