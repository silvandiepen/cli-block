import { SettingsType, SettingsArgType } from "../types";
export declare const defaultSettings: SettingsType;
export declare const useSettings: (settings: SettingsArgType) => SettingsType;
export declare const getFrameWidth: (settings?: SettingsArgType) => number;
export declare const getPadding: (settings?: SettingsArgType) => number;
export declare const getContentWidth: (settings?: SettingsArgType) => number;
