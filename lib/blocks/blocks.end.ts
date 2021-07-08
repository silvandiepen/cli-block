import { useSettings, defaultSettings, getFrameWidth } from "../settings";
import { SettingsArgType } from "../types";
import { spaces, centerText, repeat, LOGG } from "../util";
import { border } from "../border";
import { BorderElement } from "../border/border.model";
import { bold } from "kleur";
import { CREATE_BLOCK_LINE } from "./blocks.line";

// Closing Block
export const CREATE_BLOCK_END = (
  txt: string | null = null,
  settings: SettingsArgType = defaultSettings
): string[] => {
  settings = useSettings(settings);

  let lines: string[] = [];

  settings.autoSpace && lines.push(CREATE_BLOCK_LINE(null, settings)[0]);
  if (txt)
    lines.push(
      `${spaces(settings.indentBlock)}${border(
        BorderElement.bottomStart,
        settings
      )}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        border(BorderElement.endLine, settings)
      )}${centerText(
        bold(txt),
        getFrameWidth(settings) - Math.floor(getFrameWidth(settings) / 3) * 2
      )}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        `${border(BorderElement.endLine, settings)}`
      )}${border(BorderElement.bottomEnd, settings)}`
    );
  else
    lines.push(
      `${spaces(settings.indentBlock)}${border(
        BorderElement.bottomStart,
        settings
      )}${repeat(
        getFrameWidth(settings),
        `${border(BorderElement.endLine, settings)}`
      )}${border(BorderElement.bottomEnd, settings)}`
    );
  return lines;
};

export const BLOCK_END = (
  txt = null,
  settings: SettingsArgType = defaultSettings
) => {
  let lines = CREATE_BLOCK_END(txt, settings);
  lines.forEach((line) => LOGG(line, settings));
};
