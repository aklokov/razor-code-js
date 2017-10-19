"use strict";
exports.__esModule = true;
var callParms_1 = require("../callParms");
function generatePartial(sgen, node) {
    sgen.appendLine("gen.indent = indent + '" + node.indent + "';");
    sgen.appendLine(node.generatorName + ".generateContent(" + callParms_1.appendCallParms(node.parameters) + ");');");
    sgen.appendLine("gen.indent = indent;");
}
exports.generatePartial = generatePartial;
//# sourceMappingURL=partial.js.map