# CLI BLOCKS

Create good looking blocks in your CLI

![intro](https://i.ibb.co/9v2bx1N/Screenshot-2020-02-22-at-11-34-29.png)

```js
import * as log from "cli-block";

log.start("CLI Blocks");
log.blockHeader("Let's go");
log.blockLine();
log.blockLine("So, this is CLI Blocks");
log.blockLine();
log.blockLine("A package to easily create good looking blocks in your CLI");
log.blockFooter();
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

// or 
 
import { start } from "cli-block";

start("CLI Blocks");

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
