import { bold } from "kleur";

import { LoggerSettings } from "../types";
import { border } from "../border";
import { BorderElement } from "../border/border.model";
import { useSettings, getContentWidth } from "../settings";
import { spacedText, stylizeValue, logger } from "../util";
import { createBlockLine } from "./blocks.line";

export const createBlockTable = async (
  table: any[],
  settings: Partial<LoggerSettings> = {}
): Promise<string[]> => {
  const cfg = useSettings(settings);

  const getTableWidth = (table: any[]): number => {
    let height = 1;
    table.forEach((item) => {
      if (typeof item == "object" && height < item.length) height = item.length;
    });
    return height;
  };

  const width = Math.floor(getContentWidth(cfg) / getTableWidth(table)) - 2;

  // Check if all tables

  table = table.map((item) =>
    typeof item == "string" ? (item = [item]) : (item = item)
  );

  cfg.tableSpace && (table = [[], ...table, []]);
  cfg.tableHeader && table.splice(2, 0, []);
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

  cfg.tableHeader &&
    (table[1] = table[1].map((item) => (item = `${bold(item)}`)));

  let lines = [];
  table.forEach((row) => {
    lines.push(
      createBlockLine(row.join(` ${border(BorderElement.side, cfg)} `), cfg)
    );
  });
  return lines;
};

export const blockTable = async (
  table: any[],
  settings: Partial<LoggerSettings> = {}
): Promise<void> => {
  const cfg = useSettings(settings);

  const lines = await createBlockTable(table, cfg);

  lines.forEach((line) => {
    logger(line, cfg);
  });
};
