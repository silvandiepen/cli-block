# CLI BLOCKS

Create good looking blocks in your CLI

![intro](https://i.ibb.co/9v2bx1N/Screenshot-2020-02-22-at-11-34-29.png)

```js
import * as log from "cli-block";

log.START("CLI Blocks");
log.BLOCK_START("Let's go");
log.BLOCK_LINE();
log.BLOCK_LINE("So, this is CLI Blocks");
log.BLOCK_LINE();
log.BLOCK_LINE("A package to easily create good looking blocks in your CLI");
log.BLOCK_END();
```

## Installation

Install from npm

```bash
npm i cli-block
```

And use it in your js file;

```js
import * as log from "cli-block";

log.START("CLI Blocks");
```

## Available blocks

### Start

__Usage__

```js
start("My Script title");
```

### Block Header

The start block, can have a title or just start a new block.

```bash
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
```

```bash
  ┏━━━━━━━━━━━━━━    Title    ━━━━━━━━━━━━━━┓
```

__Usage__

```js
blockHeader();
blockHeader("Title");
```

### Block Mid

A break in between blocks. Can have a title.

```bash─
  ┠─────────────────────────────────────────┨
```

```bash
  ┠──────────────    Title    ──────────────┨
```

```js
blockMid();
blockMid("Title");
```

### Block Footer

The start block, can have a title or just start a new block.

```bash
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

```bash
  ┗━━━━━━━━━━━━━━    Title    ━━━━━━━━━━━━━━┛
```

__Usage__

```js
blockFooter();
blockFooter("Title");
```

### Block Line

A basic line, can be used for empty lines or just basic text

```bash
  ┃                                         ┃
```

```bash
  ┃     Some text                           ┃
```

__Usage__

```js
blockLine();
blockLine("Title");
```

### Block Row Line

Takes an array and automatically spaces the values over a line. Can be used to create "tables"

```bash
  ┃     Atomatic     Spaced      Text       ┃
```

__Usage__

```js
blockRowLine(["Atomic", "Spaced", "Text"]);
```

#### Block Line Error

Automatically adds a red x for the line

```bash
  ┃     × Something went wrong              ┃
```

__Usage__

```js
blockLineError("Something went wrong");
```

### BLOCK_LINE_SUCCES

Automatically adds a green check for the line

```bash
  ┃     ✔ This is right                     ┃
```

__Usage__

```js
blockLineError("This is right");
```

### Block Line Warning

Automatically adds a yellow warning sign for the line

```bash
  ┃     ! A warning message                 ┃
```

__Usage__

```js
blockLineWarning("A warning message");
```

#### EMPTY

Just an empty line.

```bash

```

__Usage__

```js
empty();
```

### BLOCK_SETTINGS

Take an object and shows its values. Can be used for easily showing your settings in an object.

```bash
  ┃                                         ┃
  ┃     src           /path/to/files        ┃
  ┃     dest          /path/to/dir          ┃
  ┃     type          json                  ┃
  ┃     multi         false                 ┃
  ┃                                         ┃
```

__Usage__

```js
blockSettings({
  src: "/path/to/files",
  dest: "/path/to/dir",
  type: "json",
  multi: false,
});
```

#### Options

| Argument | Description                                                                        | example                         |
| -------- | ---------------------------------------------------------------------------------- | ------------------------------- |
| exclude  | Accepts an array of string where you can define keys not to be displayed           | `['hidden']`                    |
| include  | Accepts an array of string where you can define all keys which should be displayed | `['src','dest','type','multi']` |
| spaced   | by default the settings will display extra space around, this can be disabled      | `true`                          |

### BLOCK_JSON

Throw in a JSON object or string and automatically show it as Json content.

```bash
     ┃                                                                                ┃
     ┃        {                                                                       ┃
     ┃         "String": "is a test",                                                 ┃
     ┃         "Number": 2000,                                                        ┃
     ┃         "Object": {                                                            ┃
     ┃          "item1": "value1",                                                    ┃
     ┃          "item2": "value1"                                                     ┃
     ┃         },                                                                     ┃
     ┃         "Array": [                                                             ┃
     ┃          "item1",                                                              ┃
     ┃          "item2"                                                               ┃
     ┃         ]                                                                      ┃
     ┃        }                                                                       ┃
     ┃                                                                                ┃
```

__Usage__

```js
blockJson({
  String: "is a test",
  Number: 2000,
  Object: {
    item1: "value1",
    item2: "value1",
  },
  Array: ["item1", "item2"],
});
```

### Block Full

A full simple block of text, just throw your text in and it will create the full block.

```bash
     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
     ┃                                                                                ┃
     ┃        Fusce interdum blandit ligula, eu ornare tellus convallis ut.           ┃
     ┃        Praesent ut elit tempor, luctus urna ac, mattis est. Donec              ┃
     ┃        tincidunt sollicitudin eleifend. Donec eu rutrum arcu.                  ┃
     ┃                                                                                ┃
     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```


__Usage__

```js
blockFull('Fusce interdum blandit ligula, eu ornare tellus convallis ut. Praesent ut elit tempor, luctus urna ac, mattis est. Donec tincidunt sollicitudin eleifend. Donec eu rutrum arcu. Pellentesque lobortis ante libero, vel ultrices mi cursus at')
```

### BLOCK_COUNTER

```bash
     ┃        Still 5 seconds to go...                                                ┃
```

You can also easily create a counter, counting up or down.

```js
await BLOCK_COUNTER({
  message: "My message [count] to go",
  increment: 1,
  start: 0,
  end: 100,
  interval: 10,
});
```

`[count]` will be replaced by the current value.

Make sure to use the Counter in an async function otherwise it will just add it to the end of your log.

**Multiple messages**
The counter also accepts multiple messages, which means you can change the message on any step. Make sure the amount of messages is equal to the number of steps, which is calculated by your start and end and includes 0. So, from 0 to 5 is 6 steps (0,1,2,3,4,5,6), so you also need to have 6 messages. If you don't, the default `message` will be used.

```js
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
```

### BLOCK_LOADER

```bash
     ┃        100%  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒         ┃
```

#### Options

| Argument     | Description                                                              | Example                           | Default                   |
| ------------ | ------------------------------------------------------------------------ | --------------------------------- | ------------------------- |
| message      | The string can ben changed in order to show another order or custom text | "[percentage] [loader] of loader" | `"[percentage] [loader]"` |
| increment    | Size of every step taken                                                 | `10`                              | `1`                       |
| start        | Starting number                                                          | `100`                             | `0`                       |
| end          | Ending number                                                            | `0`                               | `100`                     |
| interval     | How often should it update (in ms)                                       | `25`                              | `25`                      |
| width        | Width used of box                                                        | `"100%"`                          | `"100%"`                  |
| charFilled   | Character used for the loader done                                       | `/`                               | `▒`                       |
| charUnfilled | Character used for the loader not done                                   | `\`                               | `░`                       |

With the above options it will look like;

```bash
     ┃        80 ////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  of loader        ┃
```

### Customizing

There are few things which can be easily customized. The border type and the color of the borders.
To give the borders another color you pass an object to the function with the settings;

```js
const settings = {
  borderType: "double",
  borderColor: "blue",
};

log.BLOCK_START("My Text", settings);
```

You will have to pass these settings to any occurence of a log.

#### Border Type

default: `borderType: 'single'`

For now, there are two types of borders available; 'single', 'double' and 'fat'

Single:

```
┏━━━━┓
┃    ┃
┠────┨
┃    ┃
┗━━━━┛
```

Double:

```
╔════╗
║    ║
╟────╢
║    ║
╚════╝
```

__Usage__ 
```js
{
  borderType: 'single' // BorderType.single
}
```


#### Border Color

default: `borderColor: 'dim'`

dim, red, yellow, green, blue, magenta, black, white, gray

__Usage__

```js
{
  borderColor: 'yellow' // BorderType.yellow
}
```


### Logging

#### Logging Type

By default Cli block uses the process.stdout, this is because it works with all functions. But if you want to use the console.log, you can. In that case you won't be able to use blockLoader and blockCounter optimally.

__Options__

| Option  | Description                                | Type                  |
| ------- | ------------------------------------------ | --------------------- |
| stdout  | Use `process.stdout.write` to display logs | `LoggingType.STDOUT`  |
| console | Use `console.log` to display the logs      | `LoggingType.CONSOLE` |

__Usage__

```js
{
  logging: 'stdout' // LoggingType.STDOUT
}
```

#### Logging Levels
By default every log will be done, but cli-block also supports logging levels. This means that you can set a default logging level to be outputted and you can set a specific level on every log. In this way you can use enviroments to log certain things, or not.

__Options__

| Option      | Description                            | Type                       |
| ----------- | -------------------------------------- | -------------------------- |
| none        | Use `0` to never display the log       | `LoggingLevel.NONE`        |
| error       | Use `1` to only display errors         | `LoggingLevel.ERROR`       |
| performance | Use `2` to display minimal information | `LoggingLevel.PERFORMANCE` |
| verbose     | Use `3` to display all                 | `LoggingLevel.VERBOSE`     |


__Usage__

```js
{
  logLevel: 2 // LoggingType.PERFORMANCE // Set on specific Log
  logOutputLevel: 3 // LoggingType.VERBOSE // Set overal setting in your project
}
```

### Functions

Cli Blocks also exposes a set of functions used to create the blocks. These can be used to create your own type of blocks or just for other things.

| function         | Arguments                    | Description                                                         |
| ---------------- | ---------------------------- | ------------------------------------------------------------------- |
| `objectToString` | `obj`                        | Convert a object to represenative string                            |
| `toRoundNumber`  | `number`,`number` (optional) | Round up a number with a set amount of numbers after the comma      |
| `toStringValue`  | `any`                        | Converts any type of value to a representative string               |
| `spaces`         | `number`                     | Returns with a set amount of spaces.                                |
| `spacedText`     | `number`,`string`            | Returns a text with a set amount of spaces after                    |
| `repeat`         | `number`,`string`            | Returns a string with a set value repeat a set amount of times      |
| `stylizeValues`  | `any`                        | Returns the same value but for display purposes                     |
| `centerText`     | `number`,`string`            | Takes the width and puts the text in the middle of spaces           |
| `breakText`      | `string`                     | Converts a line into multiple lines based on the width of the frame |

### Settings Config

| Argument       | Description                            | Default                         | Options                             | More |
| -------------- | -------------------------------------- | ------------------------------- | ----------------------------------- | ---- |
| borderType     | The border type being used             | 'single'                        | [See border types](#border-type)    |
| borderColor    | The border color being used            | 'dim'                           | [See border color](#border-color)   |      |
| indentBlock    | Space between left of window and frame | `5`                             | Any number                          |      |
| prefix         | Prefix used on block Lines.            | ``                              |                                     |      |
| tableHeader    | Use a header on the Block Table        | `true`                          | `true` / `false`                    |      |
| frameWidth     | Max width of the frame                 | `80`                            |                                     |      |
| tableSpace     | Give a table space                     | `true`                          | `true` / `false`                    |      |
| padding        | Padding used in settings               | `-1`                            |                                     |
| logger         | The default logging function           | `stdout` / `LoggerType.STDOUT ` | `stdout`, `console`                 |
| logLevel       | Set Level of logging of log            | `3` / `LoggerLevel.VERBOSE`     | [See border color](#logging-levels) |
| logOutputLevel | Set Level of logging allowed           | `3` / `LoggerLevel.VERBOSE`     | [See border color](#logging-levels) |


```js
export const defaultSettings: LoggerSettings = {
  borderType: BorderType.single,
  borderColor: BorderColor.dim,
  frameWidth: 80,
  indentBlock: 5,
  prefix: "",
  newLine: true,
  autoSpace: true,
  tableHeader: true,
  tableSpace: true,
  padding: -1,
  logger: LoggerType.STDOUT,
  logLevel: LoggerLevel.VERBOSE,
  logOutputLevel: LoggerLevel.VERBOSE,
};
```
