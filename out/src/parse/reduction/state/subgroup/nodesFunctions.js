"use strict";
exports.__esModule = true;
var nodes_1 = require("../../../../nodes");
function isEndOfLine(node) {
    return node.type === nodes_1.NodeType.Eol || node.type === nodes_1.NodeType.ForceEol;
}
exports.isEndOfLine = isEndOfLine;
function isMultiline(node) {
    return isEndOfLine(node) || isMultilineNode(node);
}
exports.isMultiline = isMultiline;
function isMultilineNode(node) {
    if (node.type === nodes_1.NodeType.ForEach) {
        var forEachNode = node;
        return forEachNode.children.some(isMultiline);
    }
    if (node.type === nodes_1.NodeType.If) {
        var ifNode = node;
        return ifNode.ifChildren.some(isMultiline)
            || ifNode.elseChildren.some(isMultiline);
    }
}
exports.isMultilineNode = isMultilineNode;
function isSuppressingNode(node) {
    return node.type === nodes_1.NodeType.Injection ||
        node.type === nodes_1.NodeType.Comment ||
        isMultilineNode(node);
}
exports.isSuppressingNode = isSuppressingNode;
function isSuppressableNode(node) {
    if (node.type === nodes_1.NodeType.Literal) {
        var contentNode = node;
        return !contentNode.content.trim().length;
    }
    return node.type === nodes_1.NodeType.Eol;
}
exports.isSuppressableNode = isSuppressableNode;
//# sourceMappingURL=nodesFunctions.js.map