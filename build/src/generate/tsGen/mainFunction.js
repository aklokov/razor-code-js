"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateNode_1 = require("./generateNode");
function generateMainFunction(sgen, root, config) {
    const parms = config.parameters.join(', ');
    if (parms.length) {
        sgen.append(`function generateContent(gen: any, ${config.parameters.join(', ')}): void `);
    }
    else {
        sgen.append(`function generateContent(gen: any): void `);
    }
    sgen.braces(() => generateMainFunctionContent(sgen, root));
}
exports.generateMainFunction = generateMainFunction;
function generateMainFunctionContent(sgen, root) {
    sgen.appendLine('const indent = gen.indent;');
    root.children.forEach(node => generateNode_1.generateNode(sgen, node));
}
//# sourceMappingURL=mainFunction.js.map