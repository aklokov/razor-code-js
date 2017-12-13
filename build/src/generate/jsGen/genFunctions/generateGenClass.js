"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
function generateGenClass(sgen, config) {
    sgen.append('class Gen ');
    sgen.braces(() => generateClassContent(sgen, config));
}
exports.generateGenClass = generateGenClass;
function generateClassContent(sgen, config) {
    sgen.append('constructor() ');
    sgen.braces(() => {
        sgen.appendLine(`this.indent = '';`);
        sgen.appendLine('this.lines = [];');
        sgen.appendLine('this.eolPrinted = true;');
    });
    sgen.appendLine();
    sgen.append('append(text) ');
    sgen.braces(() => {
        sgen.appendLine('if (this.eolPrinted) { this.lines.push(this.indent); }');
        sgen.appendLine('this.lines.push(text);');
        sgen.appendLine('this.eolPrinted = false;');
    });
    sgen.appendLine();
    sgen.append('eol() ');
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
//# sourceMappingURL=generateGenClass.js.map