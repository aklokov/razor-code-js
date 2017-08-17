"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("./StateType");
const tokens_1 = require("../../../tokens");
const functions = require("./stateFunctions");
const nodes_1 = require("../../../nodes");
const groupState = require("./groupState");
const bracketMain = require("./brackets/bracketMain");
const array_1 = require("../../../tools/array");
function createNode(current) {
    return new nodes_1.ContentNode(functions.content.getContent(current), nodes_1.NodeType.Expression);
}
function addNodeToPreviousState(current) {
    return current.content.length
        ? functions.group.addNode(current.previous, createNode(current))
        : functions.content.addToken(current.previous, tokens_1.keywords.at);
}
function expressionBreakEncountered(current, token) {
    const previous = addNodeToPreviousState(current);
    return groupState.reduceGroupState(previous, token);
}
function eofEncountered(current) {
    return addNodeToPreviousState(current);
}
const openingBrackets = {
    '<': true,
    '(': true,
    '[': true
};
let expressionBreaks = array_1.toBoolStringMap([...tokens_1.flowKeywords, ...tokens_1.tokens]);
function reduce(current, token) {
    if (token === tokens_1.keywords.eof) {
        return eofEncountered(current);
    }
    if (openingBrackets[token]) {
        return bracketMain.createTopBracketState(current, current, token);
    }
    if (expressionBreaks[token]) {
        return expressionBreakEncountered(current, token);
    }
    return functions.content.addToken(current, token);
}
exports.reduce = reduce;
function createState(previous) {
    return {
        type: StateType_1.StateType.ImplicitExpression,
        previous,
        content: ''
    };
}
exports.createState = createState;
//# sourceMappingURL=implicitExpressionState.js.map