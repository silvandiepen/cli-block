import {
  BLOCK_LINE,
  BLOCK_MID,
  BLOCK_START,
  BLOCK_END,
  BLOCK_LINE_ERROR,
  BLOCK_LINE_WARNING,
  BLOCK_LINE_SUCCESS,
  BLOCK_SETTINGS,
  START,
  BLOCK_JSON,
  BLOCK_TABLE,
  BLOCK_COUNTER,
  BLOCK_LOADER,
} from "../lib/blocks";
import { BorderColor, BorderType } from "../lib/border/border.model";
import { defaultSettings } from "../lib/settings/";

let cliSettings = {
  borderColor: BorderColor.yellow,
  borderType: BorderType.fat,
};

const JSON_EXAMPLE = {
  String: "is a test",
  Number: 2000,
  Object: { item1: "value1", item2: "value1" },
  Array: ["item1", "item2"],
  ObjectArray: [{ item1: "value1" }, { item2: "value2" }],
};

const TABLE_EXAMPLE = [
  ["Type", "Default", "Description"],
  ["Boolean", false, "Does work", "item5"],
  ["String", "Some item", "Yes, or no"],
  ["Number", 5, "How much?"],
];

const show = async () => {
  START("The Script Title", cliSettings);
  BLOCK_START("hoi");
  BLOCK_LINE();
  BLOCK_LINE("with content");
  BLOCK_MID();
  BLOCK_MID("JSON");
  await BLOCK_JSON(JSON_EXAMPLE);
  BLOCK_MID("Settings");
  await BLOCK_SETTINGS(JSON_EXAMPLE);
  BLOCK_MID("default settings");
  await BLOCK_SETTINGS(defaultSettings);
  BLOCK_MID("default table");
  BLOCK_TABLE(TABLE_EXAMPLE);
  BLOCK_MID("Full width, headerless table");
  BLOCK_TABLE(TABLE_EXAMPLE, {
    tableHeader: false,
    tableSpace: false,
    padding: 0,
  });
  BLOCK_MID("Specials");
  BLOCK_LINE_ERROR("An error");
  BLOCK_LINE_WARNING("A warning");
  BLOCK_LINE_SUCCESS("Yes, this works");
  BLOCK_MID("Content");
  BLOCK_LINE(
    `Fusce interdum blandit ligula, eu ornare tellus convallis ut. Praesent ut elit tempor, luctus urna ac, mattis est. Donec tincidunt sollicitudin eleifend. Donec eu rutrum arcu. Pellentesque lobortis ante libero, vel ultrices mi cursus at. Nullam et leo in justo lacinia blandit in eu quam. Donec magna lectus, posuere sed urna sit amet, venenatis vehicula libero. Donec sed sagittis elit. Suspendisse at dolor vel ipsum aliquet pulvinar sit amet accumsan sapien. Vivamus eget odio mi. Cras tempus vel sapien non viverra. Proin id placerat ipsum. In cursus nisi vel nulla bibendum finibus. Curabitur consequat tortor at tellus rutrum, vel rhoncus magna tempus. Quisque et nisl ac magna cursus aliquet. Donec eget luctus diam. Nulla et lectus lacinia, faucibus risus eget, eleifend neque. Aenean ut luctus est. Mauris dui libero, dapibus vel vehicula quis, convallis vitae neque. Nunc faucibus lacus urna, a accumsan nulla dapibus in. Duis suscipit augue sed magna efficitur, id imperdiet arcu gravida. Cras luctus, eros sed varius luctus, erat urna ullamcorper risus, non scelerisque felis velit luctus sem. Quisque arcu ipsum, vestibulum quis efficitur pretium, hendrerit ac eros. Curabitur at ligula sed mauris pretium euismod. Donec accumsan nisi quis sapien elementum consectetur.`
  );
  BLOCK_MID("Count down");
  await BLOCK_COUNTER({
    message: "Still [count] seconds to go...",
    start: 5,
    end: 0,
    increment: 1,
    interval: 1000,
  });
  BLOCK_MID("Count up");
  await BLOCK_COUNTER({
    message: "Loading the end [count]%",
    start: 0,
    end: 100,
    increment: 1,
    interval: 25,
  });
  BLOCK_MID("Count up, multi message");
  await BLOCK_COUNTER({
    messages: [
      `Starting with [count]`,
      `And this is [count]`,
      `still [count] to go`,
      `now about [count]`,
      `what a joy..:)`,
      `finally [count]`,
    ],
    start: 0,
    end: 5,
    increment: 1,
    interval: 1000,
  });
  BLOCK_MID("Count down, multi message");
  await BLOCK_COUNTER({
    messages: [
      `Starting with [count]`,
      `And this is [count]`,
      `still [count] to go`,
      `now about [count]`,
      `what a joy..:)`,
      `finally [count]`,
    ],
    start: 5,
    end: 0,
    increment: 1,
    interval: 1000,
  });
  BLOCK_MID("Loader");
  await BLOCK_LOADER();
  BLOCK_MID("Loader Custom");
  await BLOCK_LOADER({
    message: "[loader] [percentage] to go",
    increment: 2,
    width: "50",
    start: 0,
    end: 100,
    interval: 50,
    charFilled: "╱",
    charUnfilled: "╲",
  });
  BLOCK_END();
};
show();
