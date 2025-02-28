---
icon: /assets/icon_functions.svg
---

---
icon: /assets/icon_functions.svg
title: Utility Functions
tags: documentation,functions
---

# Utility Functions

Cli-block exposes a set of utility functions that can be used to create custom blocks or manipulate text display. These functions provide the foundation for the block system and can be used independently.

## Text Manipulation

| Function | Arguments | Description | Example |
|----------|-----------|-------------|----------|
| `spaces(count)` | `number` | Generates a string with specified number of spaces | `spaces(4) // "    "` |
| `spacedText(count, text)` | `number, string` | Adds trailing spaces after text | `spacedText(10, "Hello") // "Hello     "` |
| `repeat(count, value)` | `number, string` | Repeats a string value n times | `repeat(3, "*") // "***"` |
| `centerText(width, text)` | `number, string` | Centers text within given width | `centerText(10, "Hi") // "    Hi    "` |
| `breakText(text)` | `string` | Wraps text based on frame width | `breakText("Long text") // ["Long", "text"]` |

## Value Conversion

| Function | Arguments | Description | Example |
|----------|-----------|-------------|----------|
| `objectToString(obj)` | `object` | Converts object to readable string | `objectToString({a: 1}) // "{ a: 1 }"` |
| `toRoundNumber(num, decimals?)` | `number, number?` | Rounds number to specified decimals | `toRoundNumber(1.234, 2) // 1.23` |
| `toStringValue(value)` | `any` | Converts any value to string representation | `toStringValue(true) // "true"` |
| `stylizeValues(value)` | `any` | Formats values for display purposes | `stylizeValues(null) // "null"` |

## Usage Examples

```typescript
import { centerText, spacedText, breakText } from "cli-block";

// Center text in a 20-character width
const centered = centerText(20, "Hello");

// Add 5 spaces after text
const spaced = spacedText(5, "Label:");

// Break long text into lines
const lines = breakText("This is a long line of text that needs wrapping");
```

These utility functions are particularly useful when creating custom block types or when you need to format text in a specific way for your CLI application.
