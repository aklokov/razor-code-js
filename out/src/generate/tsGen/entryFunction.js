"use strict";
exports.__esModule = true;
var callParms_1 = require("./callParms");
function generateEntryFunction(sgen, config) {
    sgen.append("function generate(" + config.parameters.join(', ') + "): string ");
    sgen.braces(function () { return generateEntryFunctionContent(sgen, config); });
}
exports.generateEntryFunction = generateEntryFunction;
function generateEntryFunctionContent(sgen, config) {
    sgen.appendLine('const gen = new Gen();');
    sgen.appendLine("generateContent(" + callParms_1.callParms(config.parameters) + ");");
    sgen.appendLine('return gen.toString();');
}
//# sourceMappingURL=entryFunction.js.map