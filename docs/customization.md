---
title: Customizing
icon: /assets/icon_customizing.svg
tags: documentation,custom
---

# Customizing

Cli-block offers extensive customization options to match your application's visual style. You can customize the border style, colors, and layout of your CLI blocks.

## Global Settings

You can set global settings that apply to all blocks in your application:

```typescript
import * as log from "cli-block";

const globalSettings = {
  borderType: "double",
  borderColor: "blue",
  frameWidth: 80
};

// Apply settings to all subsequent blocks
log.start("My Application", globalSettings);
```

## Per-Block Customization

You can also customize individual blocks by passing settings as the second argument:

```js
const settings = {
  borderType: "double",
  borderColor: "blue",
};

log.start("My Text", settings);
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
