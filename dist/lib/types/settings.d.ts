import { BorderType, BorderColor } from "../../lib/border/border.model";
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
}
export interface SettingsConfig {
    exclude?: string[];
    include?: string[];
}
