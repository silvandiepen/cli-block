import { bold } from "kleur";

import { LoggerSettings } from "../types";
import { border } from "../border";
import { BorderElement } from "../border/border.model";
import { useSettings, getFrameWidth } from "../settings";
import { spaces, repeat, centerText, logger } from "../util";

// The Start block
export const createBlockHeader = (
  txt: string = "",
  settings: Partial<LoggerSettings> = {}
) => {
  const cfg = useSettings(settings);

  if (txt !== "") {
    return [
      `${spaces(cfg.indentBlock)}${border(
        BorderElement.topStart,
        settings
      )}${repeat(
        Math.floor(getFrameWidth(cfg) / 3),
        border(BorderElement.startLine, settings)
      )}${centerText(
        bold(txt),
        getFrameWidth(cfg) - Math.floor(getFrameWidth(cfg) / 3) * 2
      )}${repeat(
        Math.floor(getFrameWidth(cfg) / 3),
        border(BorderElement.startLine, cfg)
      )}${border(BorderElement.topEnd, cfg)}`,
    ];
  } else {
    return [
      `${spaces(cfg.indentBlock)}${border(
        BorderElement.topStart,
        settings
      )}${repeat(
        getFrameWidth(cfg),
        border(BorderElement.startLine, cfg)
      )}${border(BorderElement.topEnd, cfg)}`,
    ];
  }
};

export const blockHeader = (
  txt: string = "",
  settings: Partial<LoggerSettings> = {}
): void => {
  const cfg = useSettings(settings);
  cfg.autoSpace && logger(createBlockHeader(txt, cfg)[0], cfg);
};
