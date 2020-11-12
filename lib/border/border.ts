import { useSettings } from "../settings";
import { SettingsArgType } from "../types";
import kleur from "kleur";

const borderCharacters = {
  single: {
    startLine: "━",
    endLine: "━",
    midLine: "─",
    midBreakTop: "┬",
    midBreakBottom: "┴",
    side: "┃",
    topStart: "┏",
    topEnd: "┓",
    bottomStart: "┗",
    bottomEnd: "┛",
    midStart: "┠",
    midEnd: "┨",
  },
  double: {
    startLine: "═",
    endLine: "═",
    midLine: "─",
    midBreakTop: "┬",
    midBreakBottom: "┴",
    side: "║",
    topStart: "╔",
    topEnd: "╗",
    bottomStart: "╚",
    bottomEnd: "╝",
    midStart: "╟",
    midEnd: "╢",
  },
  fat: {
    startLine: "▘",
    endLine: "▗",
    midLine: "▄",
    midBreakTop: "┬",
    midBreakBottom: "┴",
    side: "▞",
    topStart: "▛",
    topEnd: "▜",
    bottomStart: "▙",
    bottomEnd: "▟",
    midStart: "▄",
    midEnd: "▄",
  },
};

export const border = (
  type: string,
  settings: SettingsArgType = {}
): string => {
  const s = useSettings(settings);

  let char = "";
  if (borderCharacters[s.borderType][type])
    char = borderCharacters[s.borderType][type];
  else return "";

  if (kleur[s.borderColor]) char = kleur[s.borderColor](char);

  return char;
};
