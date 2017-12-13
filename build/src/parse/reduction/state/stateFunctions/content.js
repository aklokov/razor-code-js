"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = require("../../../../nodes");
const group = require("./group");
function afterForceEol(current) {
    if (!current.children.length) {
        return false;
    }
    const lastNode = current.children[current.children.length - 1];
    return lastNode.type === nodes_1.NodeType.ForceEol;
}
exports.afterForceEol = afterForceEol;
function emptyContentAfterForceEol(current) {
    return afterForceEol(current) && contentIsEmpty(current.content);
}
function contentIsEmpty(content) {
    return !content.trim().length;
}
function nodeHasContent(node) {
    return node.hasContent || !contentIsEmpty(node.content);
}
exports.nodeHasContent = nodeHasContent;
function getContent(current) {
    return current.content;
}
exports.getContent = getContent;
function addToken(current, ...tokens) {
    return Object.assign({}, current, { content: current.content + tokens.join('') });
}
exports.addToken = addToken;
function tryAddLiteralNode(current) {
    if (!current.content.length) {
        return current;
    }
    if (!nodeHasContent(current) || emptyContentAfterForceEol(current)) {
        return Object.assign({}, current, { content: '' });
    }
    return group.addNode(current, new nodes_1.LiteralNode(getContent(current)));
}
exports.tryAddLiteralNode = tryAddLiteralNode;
function forceAddContent(current) {
    const content = getContent(current);
    return content.length
        ? group.addNode(current, new nodes_1.LiteralNode(content))
        : current;
}
exports.forceAddContent = forceAddContent;
//# sourceMappingURL=content.js.map