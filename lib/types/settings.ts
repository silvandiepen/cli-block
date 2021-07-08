import { BorderType, BorderColor } from "../../lib/border/border.model";

export enum LoggerType {
  STDOUT = "stdout",
  CONSOLE = "console",
}
export interface SettingsType {
  borderType: BorderType;
  borderColor: BorderColor;
  frameWidth: number;
  indentBlock: number;
  prefix: string;
  newLine: boolean;
  autoSpace: boolean;
  tableHeader: boolean;
  tableSpace: boolean;
  padding: number;
  logger: LoggerType;
}
export interface SettingsArgType {
  borderType?: BorderType;
  borderColor?: BorderColor;
  frameWidth?: number;
  indentBlock?: number;
  prefix?: string;
  newLine?: boolean;
  autoSpace?: boolean;
  tableHeader?: boolean;
  tableSpace?: boolean;
  padding?: number;
  logger?: LoggerType;
}

export interface SettingsConfig {
  exclude?: string[];
  include?: string[];
}
