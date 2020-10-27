import { SettingsArgType } from "../types";
export declare const FRAME_WIDTH: number;
export declare const PADDING: number;
export declare const CONTENT_WIDTH: number;
export declare const CLEAR: () => void;
export declare const NEW_LINE: () => boolean;
export declare const RENEW_LINE: (msg: string) => void;
export declare const START: (msg: string, settings?: SettingsArgType) => void;
export declare const BLOCK_LINE: (msg?: string | string[], settings?: SettingsArgType) => void;
export declare const EMPTY: (msg: string, settings?: SettingsArgType) => void;
export declare const BLOCK_ROW_LINE: (arr: any[], settings?: SettingsArgType) => void;
export declare const BLOCK_LINE_SUCCESS: (msg: string, settings?: SettingsArgType) => void;
export declare const BLOCK_LINE_ERROR: (msg: string, settings?: SettingsArgType) => void;
export declare const BLOCK_LINE_WARNING: (msg: string, settings?: SettingsArgType) => void;
export declare const BLOCK_START: (txt?: string, settings?: SettingsArgType) => void;
export declare const BLOCK_MID: (txt?: any, settings?: SettingsArgType) => void;
export declare const BLOCK_END: (txt?: string, settings?: SettingsArgType) => void;
interface SettingsConfig {
    exclude?: string[];
    include?: string[];
}
export declare const BLOCK_JSON: (obj: any, settings?: SettingsArgType) => Promise<void>;
export declare const BLOCK_SETTINGS: (obj: any, config?: SettingsConfig, settings?: SettingsArgType) => Promise<void>;
export declare const BLOCK_WARNINGS: (warning: any, settings?: SettingsArgType) => boolean;
export declare const BLOCK_ERRORS: (error: any, settings?: SettingsArgType) => boolean;
export {};
