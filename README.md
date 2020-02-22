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
  ┃     × Some text                         ┃
```

#### SUCCES_LINE

```bash
  ┃     ✔ Some text                         ┃
```

#### WARNING_LINE

```bash
  ┃     ! Some text                         ┃
```

#### END_BLOCK

```bash
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

#### EMPTY

```bash

```

Sometimes you just need some space.
