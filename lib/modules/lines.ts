import { LoggerSettings } from "../types";
import { useSettings, getContentWidth } from "../settings";
import { green, red, yellow, logger, breakText, spaces, spacedText, strWidth, blue } from "../util";

/**
 * Creates a formatted line or multiple lines of text with optional prefix and indentation.
 * @param {string | string[] | null} msg - The message to display. Can be a single string, array of strings, or null for an empty line.
 * @param {Object} options - Configuration options for the line.
 * @param {boolean} [options.useBlock=false] - Whether to use block formatting.
 * @param {number} [options.indent=0] - Number of spaces to indent the line.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @returns {string[]} Array of formatted lines.
 */
export const createLine = (
  msg: string | null | Array<string> = null,
  options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}
): string[] => {
  const cfg = useSettings(options);
  const useBlock = options.useBlock ?? false;
  const indent = options.indent ?? 0;
  let lines = [];

  if (msg !== null) {
    if (typeof msg === "string") {
      msg = breakText(msg, getContentWidth(cfg));
    }

    if (Array.isArray(msg)) {
      msg.forEach((txt, i) => {
        if (i === 0) {
          txt = `${spaces(indent)}${cfg.prefix ? cfg.prefix + " " : ""}${txt}`;
        } else {
          txt = `${spaces(indent)}${spaces(3)}${txt}`;
        }
        lines.push(txt);
      });
    }
  } else {
    lines = [spaces(indent) + (useBlock ? " " : "")];
  }

  return lines;
};

/**
 * Displays a success message with a green checkmark (✔) prefix.
 * @param {string | string[]} msg - The message to display. Can be a single string or array of strings.
 * @param {Object} options - Configuration options for the line.
 * @param {boolean} [options.useBlock=false] - Whether to use block formatting.
 * @param {number} [options.indent=0] - Number of spaces to indent the line.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @example
 * success("Operation completed successfully");
 * // Output: ✔ Operation completed successfully
 */
export const success = (msg: string | string[], options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}) => {
  const lines = createLine(msg, { ...options, prefix: green("✔") });
  lines.forEach(txt => logger(txt, options));
};

/**
 * Displays an error message with a red cross (×) prefix.
 * @param {string | string[]} msg - The message to display. Can be a single string or array of strings.
 * @param {Object} options - Configuration options for the line.
 * @param {boolean} [options.useBlock=false] - Whether to use block formatting.
 * @param {number} [options.indent=0] - Number of spaces to indent the line.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @example
 * error("Operation failed");
 * // Output: × Operation failed
 */
export const error = (msg: string | string[], options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}) => {
  const lines = createLine(msg, { ...options, prefix: red("×") });
  lines.forEach(txt => logger(txt, options));
};

/**
 * Displays a warning message with a yellow exclamation mark (!) prefix.
 * @param {string | string[]} msg - The message to display. Can be a single string or array of strings.
 * @param {Object} options - Configuration options for the line.
 * @param {boolean} [options.useBlock=false] - Whether to use block formatting.
 * @param {number} [options.indent=0] - Number of spaces to indent the line.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @example
 * warn("Deprecated feature used");
 * // Output: ! Deprecated feature used
 */
export const warn = (msg: string | string[], options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}) => {
  const lines = createLine(msg, { ...options, prefix: yellow("!") });
  lines.forEach(txt => logger(txt, options));
};

/**
 * Displays an info message with a blue info (i) prefix.
 * @param {string | string[]} msg - The message to display. Can be a single string or array of strings.
 * @param {Object} options - Configuration options for the line.
 * @param {boolean} [options.useBlock=false] - Whether to use block formatting.
 * @param {number} [options.indent=0] - Number of spaces to indent the line.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @example
 * info("Processing files...");
 * // Output: i Processing files...
 */
export const info = (msg: string | string[], options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}) => {
  const lines = createLine(msg, {...options, prefix: blue('i')});
  lines.forEach(txt => logger(txt, options));
};

/**
 * Displays a plain text message without any prefix.
 * @param {string | string[]} msg - The message to display. Can be a single string or array of strings.
 * @param {Object} options - Configuration options for the line.
 * @param {boolean} [options.useBlock=false] - Whether to use block formatting.
 * @param {number} [options.indent=0] - Number of spaces to indent the line.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @example
 * line("Simple text message");
 * // Output: Simple text message
 */
export const line = (msg: string | string[], options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}) => {
  const lines = createLine(msg, options);
  lines.forEach(txt => logger(txt, options));
};

/**
 * Displays a success message within a bordered block.
 * @param {string | string[]} msg - The message to display. Can be a single string or array of strings.
 * @param {Object} options - Configuration options for the line.
 * @param {number} [options.indent=0] - Number of spaces to indent the block.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @example
 * blockSuccess("Operation completed successfully");
 * // Output: │ ✔ Operation completed successfully │
 */
export const blockSuccess = (msg: string | string[], options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}) => {
  success(msg, { ...options, useBlock: true });
};

/**
 * Displays an error message within a bordered block.
 * @param {string | string[]} msg - The message to display. Can be a single string or array of strings.
 * @param {Object} options - Configuration options for the line.
 * @param {number} [options.indent=0] - Number of spaces to indent the block.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @example
 * blockError("Operation failed");
 * // Output: │ × Operation failed │
 */
export const blockError = (msg: string | string[], options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}) => {
  error(msg, { ...options, useBlock: true });
};

/**
 * Displays a warning message within a bordered block.
 * @param {string | string[]} msg - The message to display. Can be a single string or array of strings.
 * @param {Object} options - Configuration options for the line.
 * @param {number} [options.indent=0] - Number of spaces to indent the block.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @example
 * blockWarn("Deprecated feature used");
 * // Output: │ ! Deprecated feature used │
 */
export const blockWarn = (msg: string | string[], options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}) => {
  warn(msg, { ...options, useBlock: true });
};

/**
 * Displays an info message within a bordered block.
 * @param {string | string[]} msg - The message to display. Can be a single string or array of strings.
 * @param {Object} options - Configuration options for the line.
 * @param {number} [options.indent=0] - Number of spaces to indent the block.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @example
 * blockInfo("Processing files...");
 * // Output: │ i Processing files... │
 */
export const blockInfo = (msg: string | string[], options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}) => {
  info(msg, { ...options, useBlock: true });
};

/**
 * Displays a plain text message within a bordered block.
 * @param {string | string[]} msg - The message to display. Can be a single string or array of strings.
 * @param {Object} options - Configuration options for the line.
 * @param {number} [options.indent=0] - Number of spaces to indent the block.
 * @param {Partial<LoggerSettings>} [options] - Additional logger settings.
 * @example
 * blockLine("Simple text message");
 * // Output: │ Simple text message │
 */
export const blockLine = (msg: string | string[], options: Partial<LoggerSettings> & { useBlock?: boolean; indent?: number } = {}) => {
  line(msg, { ...options, useBlock: true });
};
