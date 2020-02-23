# CLI BLOCKS

Create good looking blocks in your CLI

![intro](https://i.ibb.co/9v2bx1N/Screenshot-2020-02-22-at-11-34-29.png)

```js
const log = require("../index.js");

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
const log = require("../index.js");

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

#### BLOCK_ERROR_LINE

Automatically adds a red x for the line

```bash
  ┃     × Something went wrong              ┃
```

#### BLOCK_SUCCES_LINE

Automatically adds a green check for the line

```bash
  ┃     ✔ This is right                     ┃
```

#### BLOCK_WARNING_LINE

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

Take an object and shows its values. Can be used for easily showwing your settings in an object.

```bash
  ┃     src           /path/to/files        ┃
  ┃     dest          /path/to/dir          ┃
  ┃     type          json                  ┃
  ┃     multi         false                 ┃
  ┃     multi         false                 ┃
```

### Customizing

There are few things which can be easily customized. The border type and the color of the borders.
To give the borders another color you pass an object to the function with the settings;

```js
const settings = {
	borderType: "double",
	borderColor: "blue"
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
