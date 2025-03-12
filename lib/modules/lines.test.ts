import { success, error, warn, info, blockSuccess, blockError, blockWarn, blockInfo } from "./lines";
import { logger } from "../util";

// Mock the logger function
jest.mock("../util", () => ({
  ...jest.requireActual("../util"),
  logger: jest.fn(),
  green: (text: string) => `[green]${text}[/green]`,
  red: (text: string) => `[red]${text}[/red]`,
  yellow: (text: string) => `[yellow]${text}[/yellow]`,
  blue: (text: string) => `[blue]${text}[/blue]`
}));

describe("Line Module Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Standard Line Functions", () => {
    it("success should log message with green checkmark", () => {
      success("Test success");
      expect(logger).toHaveBeenCalledWith("[green]✔[/green] Test success", {});
    });

    it("error should log message with red X", () => {
      error("Test error");
      expect(logger).toHaveBeenCalledWith("[red]×[/red] Test error", {});
    });

    it("warn should log message with yellow exclamation", () => {
      warn("Test warning");
      expect(logger).toHaveBeenCalledWith("[yellow]![/yellow] Test warning", {});
    });

    it("info should log message without prefix", () => {
      info("Test info");
      expect(logger).toHaveBeenCalledWith("[blue]i[/blue] Test info", {});
    });

    it("should handle array of messages", () => {
      success(["Line 1", "Line 2"]);
      expect(logger).toHaveBeenCalledWith("[green]✔[/green] Line 1", {});
      expect(logger).toHaveBeenCalledWith("   Line 2", {});
    });
  });

  describe("Block Line Functions", () => {
    it("blockSuccess should log message with green checkmark in block style", () => {
      blockSuccess("Test block success");
      expect(logger).toHaveBeenCalledWith("[green]✔[/green] Test block success", { useBlock: true });
    });

    it("blockError should log message with red X in block style", () => {
      blockError("Test block error");
      expect(logger).toHaveBeenCalledWith("[red]×[/red] Test block error", { useBlock: true });
    });

    it("blockWarn should log message with yellow exclamation in block style", () => {
      blockWarn("Test block warning");
      expect(logger).toHaveBeenCalledWith("[yellow]![/yellow] Test block warning", { useBlock: true });
    });

    it("blockInfo should log message without prefix in block style", () => {
      blockInfo("Test block info");
      expect(logger).toHaveBeenCalledWith("[blue]i[/blue] Test block info", { useBlock: true });
    });

    it("should handle array of messages in block style", () => {
      blockSuccess(["Block Line 1", "Block Line 2"]);
      expect(logger).toHaveBeenCalledWith("[green]✔[/green] Block Line 1", { useBlock: true });
      expect(logger).toHaveBeenCalledWith("   Block Line 2", { useBlock: true });
    });
  });

  describe("Line Options Handling", () => {
    it("should respect custom options", () => {
      const customOptions = { indent: 2, useBlock: false };
      success("Test with options", {  indent: 2, useBlock: false,});
      expect(logger).toHaveBeenCalledWith("  [green]✔[/green] Test with options", customOptions);
    });

    it("should handle null message", () => {
      info(null);
      expect(logger).toHaveBeenCalledWith("", {});
    });
  });
});
