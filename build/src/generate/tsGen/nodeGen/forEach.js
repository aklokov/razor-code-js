"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateNode_1 = require("../generateNode");
function generateForEach(sgen, node) {
    sgen.append(`for (${node.condition}) `);
    sgen.braces(() => generateForEachContent(sgen, node));
}
exports.generateForEach = generateForEach;
function generateForEachContent(sgen, node) {
    node.children.forEach(child => generateNode_1.generateNode(sgen, child));
}
//# sourceMappingURL=forEach.js.map