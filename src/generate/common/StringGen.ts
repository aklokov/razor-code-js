import { indentSize } from '../../constants';
import { Dictionary, NumberMap } from '../../tools/dictionary';
import { lineFeedType as lft } from '../../constants';

const dict: Dictionary = {};
dict[lft.mac] = '\r';
dict[lft.unix] = '\n';
dict[lft.windows] = '\r\n';
const indents: NumberMap<string> = {};

export class StringGen {
    private currentIndent: number = 0;
    private strings: string[] = [];
    private lineFeed: string;
    private eol: boolean = false;

    constructor(lineFeed: string = lft.unix) {
        this.lineFeed = dict[lineFeed];
    }

    public pushIndent(amount: number = 1): void {
        this.currentIndent += amount;
    }

    public popIndent(amount: number = 1): void {
        this.currentIndent -= amount;
        if (this.currentIndent < 0) {
            throw new Error('Indent error.');
        }
    }

    public appendLine(line: string = ''): void {
        if (!line.length) {
            this.appendLineFeed();
            return;
        }

        this.append(line);
        this.appendLineFeed();
    }

    public append(text: string): void {
        if (this.eol) {
            this.appendIndent();
        }

        this.strings.push(text);
        this.eol = false;
    }

    public braces(func: () => void): void {
        this.bracesImpl(func, '}');
    }

    public bracesSemicolon(func: () => void): void {
        this.bracesImpl(func, '};');
    }

    public toString(): string {
        if (this.currentIndent > 0) {
            throw new Error('indent error');
        }
        return this.strings.join('');
    }

    private bracesImpl(func: () => void, ending: string): void {
        this.append('{');
        this.appendLine();
        this.pushIndent();
        func();
        this.popIndent();
        this.appendLine(ending);
    }

    private appendLineFeed(): void {
        this.eol = true;
        this.strings.push(this.lineFeed);
    }

    private createIndent(): string {
        if (indents[this.currentIndent]) {
            return indents[this.currentIndent];
        }

        const indent = [];
        let count = this.currentIndent * indentSize;
        while (count--) {
            indent.push(' ');
        }

        return indents[this.currentIndent] = indent.join('');
    }

    private appendIndent(): void {
        if (this.currentIndent > 0) {
            this.strings.push(this.createIndent());
        }
    }
}
