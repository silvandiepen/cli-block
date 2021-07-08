import { bold } from "kleur";

import { SettingsArgType } from "../types";
import { border } from "../border";
import { BorderElement } from "../border/border.model";
import { useSettings, defaultSettings, getContentWidth } from "../settings";
import { spacedText, stylizeValue, LOGG } from "../util";
import { CREATE_BLOCK_LINE } from "./blocks.line";

export const CREATE_BLOCK_TABLE = async (
  table: any[],
  settings: SettingsArgType = defaultSettings
): Promise<string[]> => {
  settings = useSettings(settings);

  const getTableWidth = (table: any[]): number => {
    let height = 1;
    table.forEach((item) => {
      if (typeof item == "object" && height < item.length) height = item.length;
    });
    return height;
  };

  const width =
    Math.floor(getContentWidth(settings) / getTableWidth(table)) - 2;

  // Check if all tables

  table = table.map((item) =>
    typeof item == "string" ? (item = [item]) : (item = item)
  );

  settings.tableSpace && (table = [[], ...table, []]);
  settings.tableHeader && table.splice(2, 0, []);
  // for (let r = 0; r < table.length; r++) {

  table = table.map((row) => {
    return (row = [
      ...row,
      ...new Array(getTableWidth(table) - row.length),
    ]).map((i) =>
      i == undefined
        ? (i = spacedText(width, ""))
        : (i = spacedText(width, stylizeValue(i)))
    );
  });

  settings.tableHeader &&
    (table[1] = table[1].map((item) => (item = `${bold(item)}`)));

  let lines = [];
  table.forEach((row) => {
    lines.push(
      CREATE_BLOCK_LINE(
        row.join(` ${border(BorderElement.side, settings)} `),
        settings
      )
    );
  });
  return lines;
};

export const BLOCK_TABLE = async (
  table: any[],
  settings: SettingsArgType = defaultSettings
): Promise<void> => {
  settings = useSettings(settings);

  const lines = await CREATE_BLOCK_TABLE(table, settings);

  lines.forEach((line) => {
    LOGG(line, settings);
  });
};
