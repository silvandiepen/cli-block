import { bold } from "kleur";

import { SettingsArgType } from "../types";
import { border } from "../border";
import { BorderColor, BorderElement } from "../border/border.model";
import { useSettings, defaultSettings, getFrameWidth } from "../settings";
import { spaces, repeat, centerText, LOGG, EMPTY } from "../util";

// Start the code with a block with a title.
export const START = (
  msg: string,
  settings: SettingsArgType = defaultSettings
) => {
  settings = { ...useSettings(settings), borderColor: BorderColor.blue };

  EMPTY();
  LOGG(`${spaces(settings.indentBlock)} ${bold().blue(msg)}`, settings);
  EMPTY();
};

// The Start block
export const CREATE_BLOCK_START = (
  txt: string = "",
  settings: SettingsArgType = defaultSettings
) => {
  settings = useSettings(settings);

  if (txt !== "") {
    return [
      `${spaces(settings.indentBlock)}${border(
        BorderElement.topStart,
        settings
      )}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        border(BorderElement.startLine, settings)
      )}${centerText(
        bold(txt),
        getFrameWidth(settings) - Math.floor(getFrameWidth(settings) / 3) * 2
      )}${repeat(
        Math.floor(getFrameWidth(settings) / 3),
        border(BorderElement.startLine, settings)
      )}${border(BorderElement.topEnd, settings)}`,
    ];
  } else {
    return [
      `${spaces(settings.indentBlock)}${border(
        BorderElement.topStart,
        settings
      )}${repeat(
        getFrameWidth(settings),
        border(BorderElement.startLine, settings)
      )}${border(BorderElement.topEnd, settings)}`,
    ];
  }
};

export const BLOCK_START = (
  value: string = "",
  settings: SettingsArgType = defaultSettings
): void => {
  settings = useSettings(settings);
  settings.autoSpace && LOGG(CREATE_BLOCK_START(value, settings)[0], settings);
};
