import { SettingsArgType } from "../types";
import { border } from "../border";
import { BorderElement } from "../border/border.model";
import {
  useSettings,
  defaultSettings,
  getContentWidth,
  getPadding,
  getFrameWidth,
} from "../settings";

import { breakText, spaces, spacedText, strWidth, LOGG } from "../util";

export const CREATE_BLOCK_LINE = (
  msg: string | null | Array<string> = null,
  settings: SettingsArgType = defaultSettings
): string[] => {
  settings = useSettings(settings);
  let lines = [];

  if (msg !== null) {
    if (typeof msg == "string") msg = breakText(msg, getContentWidth(settings));

    msg.forEach((txt, i) => {
      txt =
        i == 0
          ? `${settings.prefix ? settings.prefix + " " : ""}${txt}`
          : `${
              settings.prefix ? spaces(strWidth(settings.prefix)) + " " : ""
            }${txt}`;

      lines.push(
        spaces(settings.indentBlock) +
          border(BorderElement.side, settings) +
          spaces(getPadding(settings)) +
          spacedText(getContentWidth(settings), txt) +
          spaces(getPadding(settings)) +
          border(BorderElement.side, settings)
      );
    });
  } else {
    lines = [
      `${spaces(settings.indentBlock)}${border(
        BorderElement.side,
        settings
      )}${spaces(getFrameWidth(settings))}${border(
        BorderElement.side,
        settings
      )}`,
    ];
  }
  return lines;
};

/*
  
    BLOCK LINE
  
  */
export const BLOCK_LINE = (
  msg: string | null | Array<string> = null,
  settings: SettingsArgType = defaultSettings
): void => {
  settings = useSettings(settings);

  const lines = CREATE_BLOCK_LINE(msg, settings);

  lines.forEach((txt) => {
    LOGG(txt, settings);
  });
};
