"use strict";
exports.__esModule = true;
var generateNode_1 = require("../generateNode");
function generateForEach(sgen, node) {
    sgen.append("for(" + node.condition + ") ");
    sgen.braces(function () { return generateForEachContent(sgen, node); });
}
exports.generateForEach = generateForEach;
function generateForEachContent(sgen, node) {
    node.children.forEach(function (child) { return generateNode_1.generateNode(sgen, child); });
}
//# sourceMappingURL=forEach.js.map