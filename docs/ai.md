---
tags: documentation,ai
icon: /assets/icon_docs.svg
---

# CLI-Block for AI Usage

## Package Overview
CLI-Block is a TypeScript/JavaScript package designed to create visually appealing command-line interface blocks. It provides a comprehensive set of functions for displaying formatted text, loading indicators, tables, and other UI elements in the terminal.

## Core Functionality

### Logging System
- **Logging Types**:
  - `LoggingType.STDOUT`: Uses `process.stdout.write` (default)
  - `LoggingType.CONSOLE`: Uses `console.log`

- **Logging Levels**:
  - `LoggingLevel.NONE` (0): No output
  - `LoggingLevel.ERROR` (1): Only errors
  - `LoggingLevel.PERFORMANCE` (2): Minimal information
  - `LoggingLevel.VERBOSE` (3): All information

### Block Types
1. **Basic Blocks**:
   ```typescript
   import { start, blockHeader, blockMid, blockLine, blockRowLine, blockFooter } from "cli-block";

   start("Application Name"); // Initializes a block session
   blockHeader("Section Title"); // Creates a header block
   blockLine("Content"); // Creates a content line
   blockMid("Subsection"); // Creates a mid-section divider
   blockRowLine(["Column 1", "Column 2"]); // Creates a row with auto-spaced columns
   blockFooter(); // Closes the block
   ```

2. **Special Blocks**:
   - `blockLoader`: Dynamic loading indicator
   - `blockCounter`: Numerical progress display
   - `blockJson`: JSON data formatting
   - `blockTable`: Tabular data display
   - `blockStepLoader`: Step-by-step progress indicator
   - `blockMid`: Mid-section divider with optional title
   - `blockRowLine`: Auto-spaced columnar content

### Utility Functions
- `objectToString(obj)`: Converts objects to displayable strings
- `toRoundNumber(number, decimals?)`: Rounds numbers with optional decimal places
- `toStringValue(value)`: Converts any value type to string representation
- `spaces(number)`: Generates specified number of spaces
- `spacedText(number, text)`: Adds trailing spaces to text
- `repeat(number, value)`: Repeats a string value
- `stylizeValues(value)`: Formats values for display
- `centerText(width, text)`: Centers text within given width
- `breakText(text)`: Wraps text based on frame width

## Implementation Patterns

### Basic Usage Pattern
```typescript
import * as log from "cli-block";

log.start("Process Name");
log.blockHeader("Operation Title");
log.blockLine("Processing step 1...");
// ... operation logic
log.blockLine("Processing step 2...");
// ... operation logic
log.blockFooter();
```

### Progress Tracking Pattern
```typescript
import { blockLoader, blockCounter } from "cli-block";

// For continuous operations
blockLoader("Processing", true); // Start loader
// ... async operation
blockLoader("Processing", false); // Stop loader

// For countable operations
blockCounter("Items", currentCount, totalCount);
```

### Data Display Pattern
```typescript
import { blockJson, blockTable } from "cli-block";

// JSON data display
blockJson({ key: "value", nested: { data: true } });

// Tabular data display
blockTable([
  { col1: "Header 1", col2: "Header 2" },
  { col1: "Data 1", col2: "Data 2" }
]);
```

## Configuration
```typescript
import { setSettings } from "cli-block";

setSettings({
  logging: "stdout", // or "console"
  logLevel: 2, // Set logging level
  logOutputLevel: 3, // Set overall output level
  // Additional styling options available
});
```

## Best Practices for AI Implementation
1. Always initialize with `start()` before creating blocks
2. Close block sequences with `blockFooter()`
3. Use appropriate logging levels based on context
4. Handle asynchronous operations properly with loader blocks
5. Format data appropriately using utility functions before display

## Error Handling
- All block functions handle undefined/null values gracefully
- Use try-catch blocks around operations that might fail
- Utilize logging levels to control error output visibility

## Type Definitions
The package includes TypeScript definitions for all functions and configurations. Refer to the types directory in the source code for detailed type information.

## Dependencies
Essential dependencies include:
- @sil/color: Color handling
- kleur: Terminal styling
- mono-str-width: String width calculations
- window-size: Terminal size detection

This documentation is specifically formatted for AI consumption and integration.
