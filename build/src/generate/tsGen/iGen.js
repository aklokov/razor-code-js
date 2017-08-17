"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
function generateIGenInterface(sgen) {
    sgen.append('export interface IGen ');
    sgen.braces(() => {
        sgen.appendLine('append: (text: string) => void;');
        sgen.appendLine('eol: () => void;');
        sgen.appendLine('forceEol: () => void;');
    });
}
exports.generateIGenInterface = generateIGenInterface;
function generateGenClass(sgen, config) {
    sgen.append('class Gen ');
    sgen.braces(() => generateClassContent(sgen, config));
}
exports.generateGenClass = generateGenClass;
function generateClassContent(sgen, config) {
    sgen.appendLine(`public indent: string = '';`);
    sgen.appendLine('private lines: string[] = [];');
    sgen.appendLine('private eolPrinted: boolean = true;');
    sgen.appendLine();
    sgen.append('public append(text: string): void ');
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
    sgen.append('public forceEol(): void ');
    sgen.braces(() => {
        sgen.appendLine('this.eolPrinted = true;');
        sgen.appendLine(`this.lines.push('${getEol(config.lineFeed)}');`);
    });
    sgen.appendLine();
    sgen.append('public toString(): string ');
    sgen.braces(() => sgen.appendLine(`return this.lines.join('');`));
}
function getEol(eol) {
    switch (eol) {
        case constants_1.lineFeedType.windows:
            return '\\r\\n';
        case constants_1.lineFeedType.mac:
            return '\\r';
        case constants_1.lineFeedType.unix:
        default:
            return '\\n';
    }
}
//# sourceMappingURL=iGen.js.map