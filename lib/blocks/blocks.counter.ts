import { SettingsArgType, CounterOptions, LoggerType } from "../types";
import { defaultSettings } from "../settings";
import { CLEAR, LOGG } from "../util";
import { BLOCK_LINE } from "./blocks.line";

export const BLOCK_COUNTER = async (
  args: CounterOptions = {},
  settings: SettingsArgType = defaultSettings
): Promise<void> => {
  if (settings.logger == LoggerType.CONSOLE) {
    LOGG("Counter does not Work with Console.log");
    return;
  }
  const config: CounterOptions = {
    message: "My message [count] to go",
    increment: 1,
    start: 0,
    end: 100,
    interval: 100,
    ...args,
  };

  // Define variables
  let i = config.start;
  let step = 0;

  const messageCount = config.messages?.length || 0;
  const stepsCount =
    (config.start > config.end
      ? config.start - config.end + 1
      : config.end - config.start + 1) / config.increment;
  const doSteps = messageCount > 0 && messageCount == stepsCount;
  const countDown = config.start > config.end;

  // Prepare action
  const counterAction = () => {
    CLEAR();

    let message = doSteps
      ? config.messages[step].replace("[count]", i.toString())
      : config.message.replace("[count]", i.toString());

    BLOCK_LINE(message, {
      ...settings,
      newLine: i == config.end,
    });

    i = countDown ? i - config.increment : i + config.increment;
    doSteps && step++;
  };

  counterAction();
  // Do the Interval
  return await new Promise((resolve) => {
    let count = setInterval(() => {
      counterAction();

      const isEnding =
        (countDown ? i == config.end - 1 : i == config.end + 1) ||
        (doSteps && step == stepsCount);

      if (isEnding) {
        // if (countDown) NEW_LINE();
        resolve();
        clearInterval(count);
      }
    }, config.interval);
  });
  // return;
};
