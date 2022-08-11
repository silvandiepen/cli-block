import { asyncForEach } from "@sil/tools";

import { bold, red } from "../util";
import { useSettings, LoggerSettings, SettingsConfig } from "../settings";
import { createBlockLine } from "./blocks.line";
import { stylizeValue, spaces, logger } from "../util";
import { useConfig } from "../settings/config";

// Auto Settings display
export const createBlockSettings = async (
  obj: any,
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): Promise<string[]> => {
  settings = useSettings(settings);
  config = useConfig(config);

  const settingLines = [];
  const lines: string[] = [];

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

  config.margin &&
    config.marginTop &&
    lines.push(createBlockLine(null, settings)[0]);
  config.header && lines.push(createBlockLine([config.header], settings)[0]);
  settingLines.forEach((line) => {
    lines.push(createBlockLine(line, settings)[0]);
  });
  config.footer && lines.push(createBlockLine([config.footer], settings)[0]);
  config.margin &&
    config.marginBottom &&
    lines.push(createBlockLine(null, settings)[0]);

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
