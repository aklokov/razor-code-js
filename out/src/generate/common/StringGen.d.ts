export declare class StringGen {
    private currentIndent;
    private strings;
    private lineFeed;
    private eol;
    constructor(lineFeed?: string);
    pushIndent(amount?: number): void;
    popIndent(amount?: number): void;
    appendLine(line?: string): void;
    append(text: string): void;
    braces(func: () => void): void;
    bracesSemicolon(func: () => void): void;
    toString(): string;
    private bracesImpl(func, ending);
    private appendLineFeed();
    private appendIndent();
}
