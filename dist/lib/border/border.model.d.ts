export declare enum BorderType {
    single = "single",
    double = "double",
    fat = "fat"
}
export declare enum BorderColor {
    dim = "dim",
    red = "red",
    yellow = "yellow",
    green = "green",
    blue = "blue"
}
export declare enum BorderElement {
    startLine = "startLine",
    endLine = "endLine",
    midLine = "midLine",
    midBreakTop = "midBreakTop",
    midBreakBottom = "midBreakBottom",
    side = "side",
    topStart = "topStart",
    topEnd = "topEnd",
    bottomStart = "bottomStart",
    bottomEnd = "bottomEnd",
    midStart = "midStart",
    midEnd = "midEnd"
}
export declare type BorderElements = {
    [key in keyof typeof BorderElement]: string;
};
export declare type BorderCharacters = {
    [key in keyof typeof BorderType]: BorderElements;
};
