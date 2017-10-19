"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var nodes_1 = require("../../../../nodes");
var group = require("./group");
function afterForceEol(current) {
    if (!current.children.length) {
        return false;
    }
    var lastNode = current.children[current.children.length - 1];
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
function addToken(current) {
    var tokens = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        tokens[_i - 1] = arguments[_i];
    }
    return __assign({}, current, { content: current.content + tokens.join('') });
}
exports.addToken = addToken;
function tryAddLiteralNode(current) {
    if (!current.content.length) {
        return current;
    }
    if (!nodeHasContent(current) || emptyContentAfterForceEol(current)) {
        return __assign({}, current, { content: '' });
    }
    return group.addNode(current, new nodes_1.LiteralNode(getContent(current)));
}
exports.tryAddLiteralNode = tryAddLiteralNode;
function forceAddContent(current) {
    var content = getContent(current);
    return content.length
        ? group.addNode(current, new nodes_1.LiteralNode(content))
        : current;
}
exports.forceAddContent = forceAddContent;
//# sourceMappingURL=content.js.map