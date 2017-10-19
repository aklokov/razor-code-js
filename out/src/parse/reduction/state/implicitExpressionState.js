"use strict";
exports.__esModule = true;
var StateType_1 = require("./StateType");
var tokens_1 = require("../../../tokens");
var functions = require("./stateFunctions");
var nodes_1 = require("../../../nodes");
var groupState = require("./groupState");
var bracketMain = require("./brackets/bracketMain");
var array_1 = require("../../../tools/array");
function createNode(current) {
    return new nodes_1.ContentNode(functions.content.getContent(current), nodes_1.NodeType.Expression);
}
function addNodeToPreviousState(current) {
    return current.content.length
        ? functions.group.addNode(current.previous, createNode(current))
        : functions.content.addToken(current.previous, tokens_1.keywords.at);
}
function expressionBreakEncountered(current, token) {
    var previous = addNodeToPreviousState(current);
    return groupState.reduceGroupState(previous, token);
}
function eofEncountered(current) {
    return addNodeToPreviousState(current);
}
var openingBrackets = {
    '<': true,
    '(': true,
    '[': true
};
var expressionBreaks = array_1.toBoolStringMap(tokens_1.flowKeywords.concat(tokens_1.tokens));
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
        previous: previous,
        content: ''
    };
}
exports.createState = createState;
//# sourceMappingURL=implicitExpressionState.js.map