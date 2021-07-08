// import { red, yellow, green, bold } from "kleur";

import { SettingsArgType } from "../types";
import { BlockType } from "./blocks.model";
import { defaultSettings, useSettings } from "../settings";

import {
  CREATE_BLOCK_LINE,
  CREATE_BLOCK_ROW_LINE,
  CREATE_BLOCK_LINE_SUCCESS,
  CREATE_BLOCK_LINE_ERROR,
  CREATE_BLOCK_LINE_WARNING,
  CREATE_BLOCK_START,
  CREATE_BLOCK_END,
  CREATE_BLOCK_MID,
  CREATE_BLOCK_JSON,
  CREATE_BLOCK_TABLE,
  CREATE_BLOCK_SETTINGS,
  CREATE_BLOCK_ERRORS,
  CREATE_BLOCK_WARNINGS,
} from "./";
import { LOGG } from "../util";

export const CREATE_BLOCK = async (
  blockType: BlockType,
  content: any,
  settings: SettingsArgType = defaultSettings
): Promise<string[]> => {
  settings = useSettings(settings);

  let lines: string[] = [];

  switch (blockType) {
    // case BlockType.COUNTER:
    //   BLOCK_COUNTER(content, settings);
    //   break;
    // case BlockType.LOADER:
    //   BLOCK_COUNTER(content, settings);
    //   break;
    case BlockType.LINE:
      lines = CREATE_BLOCK_LINE(content, settings);
      break;
    case BlockType.ROW_LINE:
      lines = CREATE_BLOCK_ROW_LINE(content, settings);
      break;
    case BlockType.LINE_SUCCESS:
      lines = CREATE_BLOCK_LINE_SUCCESS(content, settings);
      break;
    case BlockType.LINE_ERROR:
      lines = CREATE_BLOCK_LINE_ERROR(content, settings);
      break;
    case BlockType.LINE_WARNING:
      lines = CREATE_BLOCK_LINE_WARNING(content, settings);
      break;
    case BlockType.START:
      lines = CREATE_BLOCK_START(content, settings);
      break;
    case BlockType.END:
      lines = CREATE_BLOCK_END(content, settings);
      break;
    case BlockType.MID:
      lines = CREATE_BLOCK_MID(content, settings);
      break;
    case BlockType.TABLE:
      lines = await CREATE_BLOCK_TABLE(content, settings);
      break;
    case BlockType.JSON:
      lines = await CREATE_BLOCK_JSON(content, settings);
      break;
    case BlockType.SETTINGS:
      lines = await CREATE_BLOCK_SETTINGS(content, settings);
      break;
    case BlockType.WARNINGS:
      lines = CREATE_BLOCK_WARNINGS(content, settings);
      break;
    case BlockType.ERRORS:
      lines = CREATE_BLOCK_ERRORS(content, settings);
      break;
  }

  return lines;
};

export const BLOCK = async (
  blockType: BlockType,
  content: any,
  settings: SettingsArgType = defaultSettings
): Promise<void> => {
  const lines = await CREATE_BLOCK(blockType, content, settings);
  lines.forEach((line) => LOGG(line, settings));
};
