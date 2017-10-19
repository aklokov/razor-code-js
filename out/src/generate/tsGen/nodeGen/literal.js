"use strict";
exports.__esModule = true;
function generateLiteral(sgen, node) {
    sgen.appendLine("gen.append('" + node.content + "');");
}
exports.generateLiteral = generateLiteral;
//# sourceMappingURL=literal.js.map