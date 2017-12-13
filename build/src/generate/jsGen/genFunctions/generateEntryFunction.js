"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const callParms_1 = require("../../tsGen/callParms");
function generateEntryFunction(sgen, config) {
    sgen.append(`function generate(${config.parameters.join(', ')}) `);
    sgen.braces(() => generateEntryFunctionContent(sgen, config));
}
exports.generateEntryFunction = generateEntryFunction;
function generateEntryFunctionContent(sgen, config) {
    sgen.appendLine('const gen = new Gen();');
    sgen.appendLine(`generateContent(${callParms_1.callParms(config.parameters)});`);
    sgen.appendLine('return gen.toString();');
}
//# sourceMappingURL=generateEntryFunction.js.map