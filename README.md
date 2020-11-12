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

#### START

#### BLOCK_START

The start block, can have a title or just start a new block.

```bash
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
```

```bash
  ┏━━━━━━━━━━━━━━    Title    ━━━━━━━━━━━━━━┓
```

#### BLOCK_MID

A break in between blocks. Can have a title.

```bash─
  ┠─────────────────────────────────────────┨
```

```bash
  ┠──────────────    Title    ──────────────┨
```

#### BLOCK_LINE

A basic line, can be used for empty lines or just basic text

```bash
  ┃                                         ┃
```

```bash
  ┃     Some text                           ┃
```

#### BLOCK_ROW_LINE

Takes an array and automatically spaces the values over a line. Can be used to create "tables"

```bash
  ┃     Atomatic     Spaced      Text       ┃
```

#### BLOCK_LINE_ERROR

Automatically adds a red x for the line

```bash
  ┃     × Something went wrong              ┃
```

#### BLOCK_LINE_SUCCES

Automatically adds a green check for the line

```bash
  ┃     ✔ This is right                     ┃
```

#### BLOCK_LINE_WARNING

Automatically adds a yellow warning sign for the line

```bash
  ┃     ! A warning message                 ┃
```

#### BLOCK_END

The end of a block

```bash
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

#### EMPTY

Just an empty line.

```bash

```

#### BLOCK_SETTINGS

Take an object and shows its values. Can be used for easily showing your settings in an object.

```bash
  ┃     src           /path/to/files        ┃
  ┃     dest          /path/to/dir          ┃
  ┃     type          json                  ┃
  ┃     multi         false                 ┃
  ┃     multi         false                 ┃
```

#### BLOCK_JSON

Throw in a JSON object or string and automatically show it as Json content.

```bash
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

For now, there are two types of borders available; 'single' and 'double'

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

#### Border Color

default: `borderColor: 'dim'`

To color the borders, Cli Block uses the 'kleur' package. All options provided by kleur are possible;

reset, bold, dim, italic, underline, inverse, hidden, strikethrough, black, red, green, yellow, blue, magenta, cyan, white, gray, grey,bgBlack, bgRed, bgGreen, bgYellow,bgBlue, bgMagenta, bgCyan and bgWhite.

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
