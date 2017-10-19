"use strict";
exports.__esModule = true;
var generateNode_1 = require("../generateNode");
function generateIfNode(sgen, node) {
    sgen.appendLine("if(" + node.condition + ") {");
    sgen.pushIndent();
    generateIfContent(sgen, node);
    sgen.popIndent();
    if (node.elseChildren && node.elseChildren.length) {
        sgen.appendLine('} else {');
        sgen.pushIndent();
        generateElseContent(sgen, node);
        sgen.popIndent();
    }
    sgen.appendLine('}');
}
exports.generateIfNode = generateIfNode;
function generateIfContent(sgen, node) {
    node.ifChildren.forEach(function (child) { return generateNode_1.generateNode(sgen, child); });
}
function generateElseContent(sgen, node) {
    node.elseChildren.forEach(function (child) { return generateNode_1.generateNode(sgen, child); });
}
//# sourceMappingURL=generateIf.js.map