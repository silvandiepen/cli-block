import { useSettings, defaultSettings, getFrameWidth } from "../settings";
import { SettingsArgType } from "../types";
import { spaces, centerText, repeat, LOGG } from "../util";
import { border } from "../border";
import { BorderElement } from "../border/border.model";
import { bold } from "kleur";
import { CREATE_BLOCK_LINE } from "./blocks.line";

// A Mid Block Line
export const CREATE_BLOCK_MID = (
  txt = null,
  settings: SettingsArgType = defaultSettings
): string[] => {
  settings = useSettings(settings);

  let lines: string[] = [];

  settings.autoSpace && lines.push(CREATE_BLOCK_LINE(null, settings)[0]);

  if (txt)
    lines.push(
      `${spaces(settings.indentBlock)}${border(
        BorderElement.midStart,
        settings
      )}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        border(BorderElement.midLine, settings)
      )}${centerText(
        bold(txt),
        getFrameWidth(settings) - Math.floor(getFrameWidth(settings) / 3) * 2
      )}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        `${border(BorderElement.midLine, settings)}`
      )}${border(BorderElement.midEnd, settings)}`
    );
  else
    lines.push(
      `${spaces(settings.indentBlock)}${border(
        BorderElement.midStart,
        settings
      )}${repeat(
        getFrameWidth(settings),
        border(BorderElement.midLine, settings)
      )}${border(BorderElement.midEnd, settings)}`
    );

  settings.autoSpace && lines.push(CREATE_BLOCK_LINE(null, settings)[0]);

  return lines;
};
export const BLOCK_MID = (
  txt = null,
  settings: SettingsArgType = defaultSettings
) => {
  let lines = CREATE_BLOCK_MID(txt, settings);
  lines.forEach((line) => LOGG(line, settings));
};
