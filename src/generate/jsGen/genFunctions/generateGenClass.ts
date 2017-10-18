import { StringGen } from '../../common/StringGen';
import { IConfig } from '../../config';
import { lineFeedType } from '../../../constants';

export function generateGenClass(sgen: StringGen, config: IConfig): void {
    sgen.append('class Gen ');
    sgen.braces(() => generateClassContent(sgen, config));
}

function generateClassContent(sgen: StringGen, config: IConfig): void {
    sgen.appendLine(`indent = '';`);
    sgen.appendLine('lines = [];');
    sgen.appendLine('eolPrinted = true;');
    sgen.appendLine();
    sgen.append('append(text) ');
    sgen.braces(() => {
        sgen.appendLine('if (this.eolPrinted) { this.lines.push(this.indent); }');
        sgen.appendLine('this.lines.push(text);');
        sgen.appendLine('this.eolPrinted = false;');
    });
    sgen.appendLine();
    sgen.append('public eol(): void ');
    sgen.braces(() => {
        sgen.append('if (this.eolPrinted) ');
        sgen.braces(() => sgen.appendLine('return;'));
        sgen.appendLine('this.eolPrinted = true;');
        sgen.appendLine(`this.lines.push('${getEol(config.lineFeed)}');`);
    });
    sgen.appendLine();
    sgen.append('forceEol() ');
    sgen.braces(() => {
        sgen.appendLine('this.eolPrinted = true;');
        sgen.appendLine(`this.lines.push('${getEol(config.lineFeed)}');`);
    });
    sgen.appendLine();
    sgen.append('toString() ');
    sgen.braces(() => sgen.appendLine(`return this.lines.join('');`));
}

function getEol(eol: string): string {
    switch (eol) {
        case lineFeedType.windows:
            return '\\r\\n';
        case lineFeedType.mac:
            return '\\r';
        case lineFeedType.unix:
        default:
            return '\\n';
    }
}
