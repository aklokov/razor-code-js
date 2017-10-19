"use strict";
exports.__esModule = true;
var generateNode_1 = require("./generateNode");
function generateMainFunction(sgen, root, config) {
    var parms = config.parameters.join(', ');
    if (parms.length) {
        sgen.append("function generateContent(gen: IGen, " + config.parameters.join(', ') + "): string[] ");
    }
    else {
        sgen.append("function generateContent(gen: IGen): string[] ");
    }
    sgen.braces(function () { return generateMainFunctionContent(sgen, root); });
}
exports.generateMainFunction = generateMainFunction;
function generateMainFunctionContent(sgen, root) {
    sgen.appendLine('const indent = gen.indent;');
    root.children.forEach(function (node) { return generateNode_1.generateNode(sgen, node); });
}
//# sourceMappingURL=mainFunction.js.map