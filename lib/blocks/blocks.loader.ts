import { SettingsArgType, LoaderOptions } from "../types";
import { defaultSettings, getContentWidth } from "../settings";
import { spacedText, repeat, NEW_LINE, CLEAR } from "../util";
import { BLOCK_LINE } from "./blocks.line";

export const BLOCK_LOADER = async (
  args: LoaderOptions = {},
  settings: SettingsArgType = defaultSettings
): Promise<void> => {
  let config = {
    message: "[percentage] [loader]",
    increment: 1,
    width: "100%",
    start: 0,
    end: 100,
    interval: 25,
    charFilled: "▒",
    charUnfilled: "░",
    ...args,
  };

  let i = config.start;
  const countDown = config.start > config.end;

  const loadBar = () => {
    const width =
      config.width == "100%"
        ? getContentWidth() - 7
        : ((config.end - config.start) *
            (typeof config.width == "string"
              ? parseInt(config.width)
              : config.width)) /
          100;

    const step = Math.round(((100 / i ? i : 1) * width) / 100);
    const filled = Math.floor(width - (width - step));
    let unfilled = Math.floor(width - step);

    if (filled + unfilled !== width) unfilled = unfilled + 1;

    const msg = `${repeat(filled, config.charFilled)}${repeat(
      unfilled,
      config.charUnfilled
    )}`;
    return msg;
  };

  const loaderAction = () => {
    CLEAR();

    const loader = loadBar();
    const percentage = `${i}%`;

    let message = config.message
      .replace("[loader]", loader)
      .replace("[percentage]", spacedText(4, percentage));
    i = countDown ? i - config.increment : i + config.increment;
    BLOCK_LINE(message, {
      ...settings,
      newLine: false,
    });
  };
  loaderAction();

  return await new Promise((resolve) => {
    let count = setInterval(() => {
      loaderAction();

      const isEnding = countDown ? i >= config.end - 1 : i >= config.end + 1;

      if (isEnding) {
        NEW_LINE();
        resolve();
        clearInterval(count);
      }
    }, config.interval);
  });
};
