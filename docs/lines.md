---
icon: /assets/icon_logging.svg
title: Line Functions
tags: documentation,functions,lines
---

# Line Functions

Cli-block provides a set of line functions for displaying messages with different status indicators. These functions come in both block and non-block variants.

## Basic Line Functions

### Info Line

Displays a plain text message without any status indicator.

```typescript
import { info } from "cli-block";

info("Processing files...");
// Output: Processing files...
```

### Success Line

Displays a message with a green checkmark (✔).

```typescript
import { success } from "cli-block";

success("Build completed successfully");
// Output: ✔ Build completed successfully
```

### Error Line

Displays a message with a red cross (×).

```typescript
import { error } from "cli-block";

error("Failed to connect to server");
// Output: × Failed to connect to server
```

### Warning Line

Displays a message with a yellow exclamation mark (!).

```typescript
import { warn } from "cli-block";

warn("Deprecated feature used");
// Output: ! Deprecated feature used
```

## Block Variants

Each line function has a block variant that displays the message within a bordered block.

```typescript
import { blockInfo, blockSuccess, blockError, blockWarn } from "cli-block";

blockInfo("Processing files...");
// Output: │ Processing files... │

blockSuccess("Build completed successfully");
// Output: │ ✔ Build completed successfully │

blockError("Failed to connect to server");
// Output: │ × Failed to connect to server │

blockWarn("Deprecated feature used");
// Output: │ ! Deprecated feature used │
```

## Configuration

All line functions accept a settings object as their second parameter to customize the output:

```typescript
import { success, LoggerSettings } from "cli-block";

const options: Partial<LoggerSettings> = {
  indent: 2,        // Number of spaces to indent
  useBlock: true,   // Display as a block (alternative to using block* functions)
  prefix: ">>"      // Custom prefix (overrides default status indicators)
};

success("Task completed", options);
```

### Multi-line Messages

All line functions support both single strings and arrays of strings for multi-line output:

```typescript
import { info } from "cli-block";

info([
  "First line",
  "Second line",
  "Third line"
]);
// Output:
// First line
//    Second line
//    Third line
```

The first line will include any prefix (if applicable), while subsequent lines are automatically indented for better readability.
