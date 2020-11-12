"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
const settings_1 = require("../lib/settings/");
let cliSettings = {
    borderColor: "yellow",
    borderType: "fat",
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
const show = () => __awaiter(void 0, void 0, void 0, function* () {
    lib_1.START("The Script Title", cliSettings);
    lib_1.BLOCK_START("hoi");
    lib_1.BLOCK_LINE();
    lib_1.BLOCK_LINE("with content");
    lib_1.BLOCK_MID();
    lib_1.BLOCK_MID("JSON");
    yield lib_1.BLOCK_JSON(JSON_EXAMPLE);
    lib_1.BLOCK_MID("Settings");
    yield lib_1.BLOCK_SETTINGS(JSON_EXAMPLE);
    lib_1.BLOCK_MID("default settings");
    yield lib_1.BLOCK_SETTINGS(settings_1.defaultSettings);
    lib_1.BLOCK_MID("default table");
    lib_1.BLOCK_TABLE(TABLE_EXAMPLE);
    lib_1.BLOCK_MID("Full width, headerless table");
    lib_1.BLOCK_TABLE(TABLE_EXAMPLE, {
        tableHeader: false,
        tableSpace: false,
        padding: 0,
    });
    lib_1.BLOCK_MID("Specials");
    lib_1.BLOCK_LINE_ERROR("An error");
    lib_1.BLOCK_LINE_WARNING("A warning");
    lib_1.BLOCK_LINE_SUCCESS("Yes, this works");
    lib_1.BLOCK_MID("Content");
    lib_1.BLOCK_LINE(`Fusce interdum blandit ligula, eu ornare tellus convallis ut. Praesent ut elit tempor, luctus urna ac, mattis est. Donec tincidunt sollicitudin eleifend. Donec eu rutrum arcu. Pellentesque lobortis ante libero, vel ultrices mi cursus at. Nullam et leo in justo lacinia blandit in eu quam. Donec magna lectus, posuere sed urna sit amet, venenatis vehicula libero. Donec sed sagittis elit. Suspendisse at dolor vel ipsum aliquet pulvinar sit amet accumsan sapien. Vivamus eget odio mi. Cras tempus vel sapien non viverra. Proin id placerat ipsum. In cursus nisi vel nulla bibendum finibus. Curabitur consequat tortor at tellus rutrum, vel rhoncus magna tempus. Quisque et nisl ac magna cursus aliquet. Donec eget luctus diam. Nulla et lectus lacinia, faucibus risus eget, eleifend neque. Aenean ut luctus est. Mauris dui libero, dapibus vel vehicula quis, convallis vitae neque. Nunc faucibus lacus urna, a accumsan nulla dapibus in. Duis suscipit augue sed magna efficitur, id imperdiet arcu gravida. Cras luctus, eros sed varius luctus, erat urna ullamcorper risus, non scelerisque felis velit luctus sem. Quisque arcu ipsum, vestibulum quis efficitur pretium, hendrerit ac eros. Curabitur at ligula sed mauris pretium euismod. Donec accumsan nisi quis sapien elementum consectetur.`);
    lib_1.BLOCK_MID("Count down");
    yield lib_1.BLOCK_COUNTER({
        message: "Still [count] seconds to go...",
        start: 5,
        end: 0,
        increment: 1,
        interval: 1000,
    });
    lib_1.BLOCK_MID("Count up");
    yield lib_1.BLOCK_COUNTER({
        message: "Loading the end [count]%",
        start: 0,
        end: 100,
        increment: 1,
        interval: 25,
    });
    lib_1.BLOCK_MID("Count up, multi message");
    yield lib_1.BLOCK_COUNTER({
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
    lib_1.BLOCK_MID("Count down, multi message");
    yield lib_1.BLOCK_COUNTER({
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
    lib_1.BLOCK_MID("Loader");
    yield lib_1.BLOCK_LOADER();
    lib_1.BLOCK_MID("Loader Custom");
    yield lib_1.BLOCK_LOADER({
        message: "[loader] [percentage] to go",
        increment: 2,
        width: "50",
        start: 0,
        end: 100,
        interval: 50,
        charFilled: "╱",
        charUnfilled: "╲",
    });
    lib_1.BLOCK_END();
});
show();
//# sourceMappingURL=kitchensink.js.map