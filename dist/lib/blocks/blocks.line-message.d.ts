import { SettingsArgType } from "../types";
export declare const CREATE_BLOCK_LINE_SUCCESS: (msg: string, settings?: SettingsArgType) => string[];
export declare const BLOCK_LINE_SUCCESS: (msg: string, settings?: SettingsArgType) => void;
export declare const CREATE_BLOCK_LINE_ERROR: (msg: string, settings?: SettingsArgType) => string[];
export declare const BLOCK_LINE_ERROR: (msg: string, settings?: SettingsArgType) => void;
export declare const CREATE_BLOCK_LINE_WARNING: (msg: string, settings?: SettingsArgType) => string[];
export declare const BLOCK_LINE_WARNING: (msg: string, settings?: SettingsArgType) => void;
export declare const CREATE_BLOCK_WARNINGS: (warning: string[], settings?: SettingsArgType) => string[];
export declare const CREATE_BLOCK_ERRORS: (error: string[], settings?: SettingsArgType) => string[];
