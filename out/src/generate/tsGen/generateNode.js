"use strict";
exports.__esModule = true;
var nodes_1 = require("../../nodes");
var nodeGen = require("./nodeGen");
function generateNode(sgen, node) {
    switch (node.type) {
        case nodes_1.NodeType.Literal:
            nodeGen.generateLiteral(sgen, node);
            break;
        case nodes_1.NodeType.Eol:
            nodeGen.eol(sgen);
            break;
        case nodes_1.NodeType.ForceEol:
            nodeGen.forceEol(sgen);
            break;
        case nodes_1.NodeType.Expression:
            nodeGen.generateExpression(sgen, node);
            break;
        case nodes_1.NodeType.Injection:
            nodeGen.generateInjection(sgen, node);
            break;
        case nodes_1.NodeType.ForEach:
            nodeGen.generateForEach(sgen, node);
            break;
        case nodes_1.NodeType.If:
            nodeGen.generateIfNode(sgen, node);
            break;
        case nodes_1.NodeType.Partial:
            nodeGen.generatePartial(sgen, node);
            break;
        default:
            break;
    }
}
exports.generateNode = generateNode;
//# sourceMappingURL=generateNode.js.map