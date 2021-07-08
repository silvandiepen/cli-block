import { useSettings } from "../settings";
import { SettingsArgType } from "../types";
import kleur from "kleur";

import { BorderCharacters, BorderElement } from "./border.model";

const borderCharacters: BorderCharacters = {
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
  type: BorderElement,
  settings: SettingsArgType = {}
): string => {
  const s = useSettings(settings);
  let char = borderCharacters[s.borderType][type] || "";

  // console.log(s);

  if (kleur[s.borderColor]) char = kleur[s.borderColor](char);

  return char;
};
