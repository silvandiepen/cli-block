# Blocks 


## Start

__Usage__

```js
start("My Script title");
```


## Block Header

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

## Block Mid

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

## Block Footer

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

## Block Line

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

## Block Row Line

Takes an array and automatically spaces the values over a line. Can be used to create "tables"

```bash
  ┃     Atomatic     Spaced      Text       ┃
```

__Usage__

```js
blockRowLine(["Atomic", "Spaced", "Text"]);
```

### Block Line Error

Automatically adds a red x for the line

```bash
  ┃     × Something went wrong              ┃
```

__Usage__

```js
blockLineError("Something went wrong");
```

## BLOCK_LINE_SUCCES

Automatically adds a green check for the line

```bash
  ┃     ✔ This is right                     ┃
```

__Usage__

```js
blockLineError("This is right");
```

## Block Line Warning

Automatically adds a yellow warning sign for the line

```bash
  ┃     ! A warning message                 ┃
```

__Usage__

```js
blockLineWarning("A warning message");
```

## EMPTY

Just an empty line.

```bash

```

__Usage__

```js
empty();
```

## BLOCK_SETTINGS

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

### Options

| Argument | Description                                                                        | example                         |
| -------- | ---------------------------------------------------------------------------------- | ------------------------------- |
| exclude  | Accepts an array of string where you can define keys not to be displayed           | `['hidden']`                    |
| include  | Accepts an array of string where you can define all keys which should be displayed | `['src','dest','type','multi']` |
| spaced   | by default the settings will display extra space around, this can be disabled      | `true`                          |

## BLOCK_JSON

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

## Block Full

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

## Block Counter

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

## Block Loader


```bash
     ┃        100%  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒         ┃
```

### Options

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

## Block Step Loader

Practically the same loader, but can be triggered from outside. 


```bash
     ┃        100%  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒         ┃
```

### Options

| Argument     | Description                                                              | Example                           | Default                   |
| ------------ | ------------------------------------------------------------------------ | --------------------------------- | ------------------------- |
| message      | The string can ben changed in order to show another order or custom text | "[percentage] [loader] of loader" | `"[percentage] [loader]"` |
| increment    | Size of every step taken                                                 | `10`                              | `1`                       |
| step         | Define current step                                                      | `1`                               | `0`                       |
| start        | Starting number                                                          | `100`                             | `0`                       |
| end          | Ending number                                                            | `0`                               | `100`                     |
| width        | Width used of box                                                        | `"100%"`                          | `"100%"`                  |
| charFilled   | Character used for the loader done                                       | `/`                               | `▒`                       |
| charUnfilled | Character used for the loader not done                                   | `\`                               | `░`                       |
| clear        | Remove the loader when it's done.                                        | `false` loader will stay          | `true`                    |

With the above options it will look like;

```bash
     ┃        80 ////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  of loader        ┃
```

### Usage

```js

  const runs = 10;

  for (let i = 0; i < runs; i++) {
    const result = sass.compile(file); // Just an example function of something which takes its time

    blockStepLoader({
      message: `Run [step] [loader] [percentage]`,
      width: "50%",
      start: 0,
      end: runs - 1,
      step: i,
    });
  }

  ```