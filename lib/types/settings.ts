import { BorderType, BorderColor } from "../../lib/border/border.model";

export enum LoggerType {
  STDOUT = "stdout",
  CONSOLE = "console",
}
export enum LoggerLevel {
  NONE = 0,
  ERROR = 1,
  PERFORMANCE = 2,
  VERBOSE = 3,
}
export interface LoggerSettings {
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
  logLevel: LoggerLevel;
  logOutputLevel: LoggerLevel;
}
export interface SettingsConfig {
  exclude?: string[];
  include?: string[];
  margin?: boolean;
  marginBottom?: boolean;
  marginTop?: boolean;
  header?: string;
  footer?: string;
}
