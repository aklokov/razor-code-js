import { StringGen } from '../common/StringGen';
import { IConfig } from '../config';

export function generateIGenInterface(sgen: StringGen): void {
    sgen.append('export interface IGen ');
    sgen.braces(() => {
        sgen.appendLine('append: (text: string) => void;');
        sgen.appendLine('eol: () => void;');
        sgen.appendLine('forceEol(() => void)');
    });
}

export function generateGenClass(sgen: StringGen, config: IConfig): void {
    sgen.append('class Gen ');
    sgen.braces(() => generateClassContent(sgen, config));
}

function generateClassContent(sgen: StringGen, config: IConfig): void {
    sgen.appendLine(`public indent: string = ''`);
    sgen.appendLine('private lines: string[] = [];');
    sgen.appendLine('private eolPrinted: boolean = false;');
    sgen.appendLine();
    sgen.append('public append(text: string): void ');
    sgen.braces(() => {
        sgen.appendLine('this.lines.push(indent + text);');
        sgen.appendLine('this.eolPrinted = true;');
    });
    sgen.appendLine();
    sgen.append('public eol(): void ');
    sgen.braces(() => {
        sgen.append('if(this.eolPrinted) ');
        sgen.braces(() => sgen.appendLine('return;'));
        sgen.appendLine('this.eolPrinted = true;');
        sgen.appendLine(`this.lines.push(${getEol(config.lineFeed)});`);
    });
    sgen.appendLine();
    sgen.append('public forceEol(): void ');
    sgen.braces(() => {
        sgen.appendLine('this.eolPrinted = true;');
        sgen.appendLine(`this.lines.push(${getEol(config.lineFeed)});`);
    });
    sgen.appendLine();
    sgen.append('public toString(): string ');
    sgen.braces(() => sgen.appendLine(`return this.lines.join('');`));
}

function getEol(eol: string): string {
    if (eol.length === 2) {
        return '\\r\\n';
    } else if (eol === '\n') {
        return '\\n';
    } else {
        return '\\r';
    }
}
