import { SettingsArgType } from "../types";
import { BlockType } from "./blocks.model";
export declare const CREATE_BLOCK: (blockType: BlockType, content: any, settings?: SettingsArgType) => Promise<string[]>;
export declare const BLOCK: (blockType: BlockType, content: any, settings?: SettingsArgType) => Promise<void>;
