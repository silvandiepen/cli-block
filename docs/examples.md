---
title: Examples
icon: /assets/icon_examples.svg
tags: documentation,examples
---

# Examples

Here are comprehensive examples demonstrating various features of cli-block, including real-world scenarios and common use cases.

## Common Use Cases

### Command Line Tool Progress
```typescript
import * as log from "cli-block";

async function deployApplication() {
  log.start("Deployment Process");

  // Show initialization
  log.blockHeader("Initializing Deployment");
  log.blockLine("Environment: Production");
  log.blockLine("Target: AWS EC2");

  // Display build progress
  log.blockMid("Building Application");
  await log.blockLoader("Compiling source files", true);
  log.blockLineSuccess("Build completed successfully");

  // Show deployment steps
  log.blockMid("Deploying");
  const deploySteps = ['Uploading assets', 'Configuring server', 'Starting services'];
  for (const step of deploySteps) {
    await log.blockStepLoader({
      message: step,
      start: 0,
      end: 100,
      interval: 50
    });
  }

  // Completion summary
  log.blockMid("Summary");
  log.blockJson({
    status: "success",
    duration: "45s",
    services: ["web", "api", "database"]
  });
  log.blockFooter("Deployment Complete");
}
```

## Basic Usage

```typescript
import * as log from "cli-block";

log.start("My Application");
log.blockHeader("Configuration");
log.blockLine("Setting up environment...");
log.blockLine("Loading modules...");
log.blockFooter();
```

## Advanced Blocks

```typescript
// Table Example
log.blockHeader("User Data");
log.blockTable([
  { name: "John", age: 30, role: "Admin" },
  { name: "Jane", age: 25, role: "User" }
]);
log.blockFooter();

// JSON Display
log.blockHeader("Config");
log.blockJson({
  server: "production",
  port: 3000,
  features: ["auth", "api"]
});
log.blockFooter();

// Progress Indicators
log.blockHeader("Processing");
log.blockLoader("Uploading", true);
// ... async operation
log.blockLoader("Uploading", false);
log.blockCounter("Files", 7, 10);
log.blockFooter();
```

## Styled Blocks

```typescript
// Custom styling
const settings = {
  borderType: "double",
  borderColor: "blue",
  frameWidth: 60
};

log.start("Styled Blocks", settings);
log.blockHeader("Custom Style", settings);
log.blockLine("This block has custom styling", settings);
log.blockFooter(null, settings);
```

## Column Layout

```typescript
log.blockHeader("Project Status");
log.blockRowLine(["Module", "Status", "Progress"]);
log.blockMid();
log.blockRowLine(["Core", "Complete", "100%"]);
log.blockRowLine(["API", "In Progress", "75%"]);
log.blockRowLine(["UI", "Pending", "0%"]);
log.blockFooter();
```
