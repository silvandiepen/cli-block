import { SettingsArgType } from "../types";
export declare const LOGG: (v?: string, settings?: SettingsArgType) => void;
export declare const CLEAR: () => void;
export declare const NEW_LINE: () => boolean;
export declare const ASYNC_NEW_LINE: () => Promise<void>;
export declare const RENEW_LINE: (msg: string) => void;
export declare const EMPTY: (msg?: string, settings?: SettingsArgType) => void;
