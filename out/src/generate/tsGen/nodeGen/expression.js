"use strict";
exports.__esModule = true;
function generateExpression(sgen, node) {
    sgen.appendLine("gen.append((" + node.content + ").toString());");
}
exports.generateExpression = generateExpression;
function generateInjection(sgen, node) {
    sgen.appendLine(node.content);
}
exports.generateInjection = generateInjection;
//# sourceMappingURL=expression.js.map