"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateLiteral(sgen, node) {
    const content = node.content.replace(/'/g, '\\\'');
    sgen.appendLine(`gen.append('${content}');`);
}
exports.generateLiteral = generateLiteral;
//# sourceMappingURL=literal.js.map