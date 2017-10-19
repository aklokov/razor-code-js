"use strict";
exports.__esModule = true;
var tokens_1 = require("../../../../tokens");
var functions = require("../stateFunctions");
var nodes_1 = require("../../../../nodes");
var bracketMain = require("../brackets/bracketMain");
function createNode(current, nodeType) {
    return new nodes_1.ContentNode(functions.content.getContent(current), nodeType);
}
function addNodeToPreviousState(current, nodeType) {
    return current.content.length
        ? functions.group.addNode(current.previous, createNode(current, nodeType))
        : current.previous;
}
function contentBreakEncountered(current, token, nodeType) {
    return addNodeToPreviousState(current, nodeType);
}
function eofEncountered(current, nodeType) {
    return addNodeToPreviousState(current, nodeType);
}
function reduce(current, token, closing, nodeType) {
    if (token === tokens_1.keywords.eof) {
        return eofEncountered(current, nodeType);
    }
    if (tokens_1.openingBracketsMap[token]) {
        return bracketMain.createTopBracketState(current, current, token);
    }
    if (token === closing) {
        return contentBreakEncountered(current, token, nodeType);
    }
    return functions.content.addToken(current, token);
}
exports.reduce = reduce;
//# sourceMappingURL=explicitContentReducer.js.map