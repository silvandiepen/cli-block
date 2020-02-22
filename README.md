# CLI BLOCKS

Create good looking blocks in your CLI

![intro](https://i.ibb.co/9v2bx1N/Screenshot-2020-02-22-at-11-34-29.png)

```js
const BLOCKS = require("../index.js");

BLOCKS.START("CLI Blocks");
BLOCKS.START_BLOCK("Let's go");
BLOCKS.LINE();
BLOCKS.LINE("So, this is CLI Blocks");
BLOCKS.LINE();
BLOCKS.LINE("A package to easily create good looking blocks in your CLI");
BLOCKS.END_BLOCK();
```

## Available blocks

#### START

#### START_BLOCK

The start block, can have a title or just start a new block.

```bash
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
```

```bash
  ┏━━━━━━━━━━━━━━    Title    ━━━━━━━━━━━━━━┓
```

#### MID_BLOCK

A break in between blocks. Can have a title.

```bash─
  ┠─────────────────────────────────────────┨
```

```bash
  ┠──────────────    Title    ──────────────┨
```

#### LINE

A basic line, can be used for empty lines or just basic text

```bash
  ┃                                         ┃
```

```bash
  ┃     Some text                           ┃
```

#### ROW_LINE

```bash
  ┃     Atomatic     Spaced      Text       ┃
```

#### ERROR_LINE

```bash
  ┃     × Something went wrong              ┃
```

#### SUCCES_LINE

```bash
  ┃     ✔ This is right                     ┃
```

#### WARNING_LINE

```bash
  ┃     ! A warning message                 ┃
```

#### END_BLOCK

```bash
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

#### EMPTY

```bash

```

Sometimes you just need some space.

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
