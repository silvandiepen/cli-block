import { useSettings, LoggerSettings, SettingsConfig } from "../settings";
import { createBlockLine } from "./blocks.line";
import { createBlockHeader } from "./blocks.header";
import { createBlockFooter } from "./blocks.footer";
import { logger } from "../util";

// Auto Settings display
export const createBlockFull = (
  txt: string,
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): string[] => {
  const cfg = useSettings(settings);

  const content = createBlockLine(txt);
  let lines: string[] = [];

  config = { exclude: [], include: [], spaced: true, ...config };

  config.spaced && lines.push("\n");
  lines = [...lines, ...createBlockHeader(config.title)];
  config.spaced && lines.push(createBlockLine(null, cfg)[0]);
  content.forEach((line) => lines.push(line));
  config.spaced && lines.push(createBlockLine(null, cfg)[0]);
  lines = [...lines, ...createBlockFooter()];
  config.spaced && lines.push("\n");

  return lines;
};

export const blockFull = async (
  txt: string,
  settings: Partial<LoggerSettings> = {},
  config: SettingsConfig | null = null
): Promise<void> =>
  createBlockFull(txt, settings, config).forEach((line) =>
    logger(line, settings)
  );
