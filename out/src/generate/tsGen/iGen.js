"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
function generateIGenInterface(sgen) {
    sgen.append('export interface IGen ');
    sgen.braces(function () {
        sgen.appendLine('append: (text: string) => void;');
        sgen.appendLine('eol: () => void;');
        sgen.appendLine('forceEol(() => void)');
    });
}
exports.generateIGenInterface = generateIGenInterface;
function generateGenClass(sgen, config) {
    sgen.append('class Gen ');
    sgen.braces(function () { return generateClassContent(sgen, config); });
}
exports.generateGenClass = generateGenClass;
function generateClassContent(sgen, config) {
    sgen.appendLine("public indent: string = ''");
    sgen.appendLine('private lines: string[] = [];');
    sgen.appendLine('private eolPrinted: boolean = false;');
    sgen.appendLine();
    sgen.append('public append(text: string): void ');
    sgen.braces(function () {
        sgen.appendLine('if(this.eolPrinted) { this.lines.push(indent); }');
        sgen.appendLine('this.lines.push(text);');
        sgen.appendLine('this.eolPrinted = true;');
    });
    sgen.appendLine();
    sgen.append('public eol(): void ');
    sgen.braces(function () {
        sgen.append('if(this.eolPrinted) ');
        sgen.braces(function () { return sgen.appendLine('return;'); });
        sgen.appendLine('this.eolPrinted = true;');
        sgen.appendLine("this.lines.push('" + getEol(config.lineFeed) + "');");
    });
    sgen.appendLine();
    sgen.append('public forceEol(): void ');
    sgen.braces(function () {
        sgen.appendLine('this.eolPrinted = true;');
        sgen.appendLine("this.lines.push('" + getEol(config.lineFeed) + "');");
    });
    sgen.appendLine();
    sgen.append('public toString(): string ');
    sgen.braces(function () { return sgen.appendLine("return this.lines.join('');"); });
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