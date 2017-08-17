"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = require("../../../../tokens");
const functions = require("../stateFunctions");
const nodes_1 = require("../../../../nodes");
const bracketMain = require("../brackets/bracketMain");
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