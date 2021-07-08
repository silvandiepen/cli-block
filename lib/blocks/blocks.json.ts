import { useSettings, SettingsArgType, defaultSettings } from "../settings";
import { highlight } from "cli-highlight";
import { LOGG } from "../util";
import { CREATE_BLOCK_LINE } from "./blocks.line";

export const CREATE_BLOCK_JSON = async (
  obj: Object,
  settings: SettingsArgType = defaultSettings
): Promise<string[]> => {
  settings = useSettings(settings);

  const text = highlight(JSON.stringify(obj, null, "\t"), {
    language: "json",
    ignoreIllegals: true,
  });
  const JSONlines = text.split("\n");

  let lines: string[] = [];

  lines.push(CREATE_BLOCK_LINE(null, settings)[0]);
  JSONlines.forEach((line) => {
    lines.push(CREATE_BLOCK_LINE(line.replace(/\t/g, " "), settings)[0]);
  });
  lines.push(CREATE_BLOCK_LINE(null, settings)[0]);

  return lines;
};
/*
  
    BLOCK JSON
  
  */
export const BLOCK_JSON = async (
  obj: Object,
  settings: SettingsArgType = defaultSettings
) => {
  settings = useSettings(settings);

  const lines = await CREATE_BLOCK_JSON(obj, settings);

  lines.forEach((line) => {
    LOGG(line, settings);
  });
};
