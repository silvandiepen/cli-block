import { repeat } from "@sil/tools";
import { bold } from "kleur";

import { useSettings, getFrameWidth } from "../settings";
import { LoggerSettings } from "../types";
import { spaces, centerText, logger } from "../util";
import { border } from "../border";
import { BorderElement } from "../border/border.model";
import { createBlockLine } from "./blocks.line";

// A Mid Block Line
export const createBlockMid = (
  txt = null,
  settings: Partial<LoggerSettings> = {}
): string[] => {
  const cfg = useSettings(settings);

  let lines: string[] = [];

  cfg.autoSpace && lines.push(createBlockLine(null, cfg)[0]);

  if (txt)
    lines.push(
      `${spaces(cfg.indentBlock)}${border(BorderElement.midStart, cfg)}${repeat(
        Math.floor(getFrameWidth(cfg) / 3),
        border(BorderElement.midLine, cfg)
      )}${centerText(
        bold(txt),
        getFrameWidth(cfg) - Math.floor(getFrameWidth(cfg) / 3) * 2
      )}${repeat(
        Math.floor(getFrameWidth(cfg) / 3),
        `${border(BorderElement.midLine, settings)}`
      )}${border(BorderElement.midEnd, settings)}`
    );
  else
    lines.push(
      `${spaces(cfg.indentBlock)}${border(BorderElement.midStart, cfg)}${repeat(
        getFrameWidth(cfg),
        border(BorderElement.midLine, cfg)
      )}${border(BorderElement.midEnd, cfg)}`
    );

  cfg.autoSpace && lines.push(createBlockLine(null, cfg)[0]);

  return lines;
};
export const blockMid = (
  txt = null,
  settings: Partial<LoggerSettings> = {}
) => {
  let lines = createBlockMid(txt, settings);
  lines.forEach((line) => logger(line, settings));
};
