"use strict";
exports.__esModule = true;
var StateType_1 = require("./StateType");
var tokens_1 = require("../../../tokens");
var finalState = require("./finalState");
var configState = require("./configState");
var groupState = require("./groupState");
var functions = require("./stateFunctions");
function tryCreateConfig(current, token) {
    if (functions.content.nodeHasContent(current)) {
        return functions.content.addToken(current, token);
    }
    return configState.createState(current, token);
}
function reduce(current, token) {
    var currentState = current;
    switch (token) {
        case tokens_1.keywords.language:
        case tokens_1.keywords.parameters:
        case tokens_1.keywords.exportName:
        case tokens_1.keywords.lineFeedType:
        case tokens_1.keywords["import"]:
        case tokens_1.keywords.namespace:
        case tokens_1.keywords.using:
            return tryCreateConfig(currentState, token);
        case tokens_1.keywords.eof:
            return finalState.createState(functions.content.tryAddLiteralNode(currentState).children);
        default:
            return groupState.reduceGroupState(currentState, token);
    }
}
exports.reduce = reduce;
function createState() {
    return {
        type: StateType_1.StateType.Root,
        hasContent: false,
        children: [],
        content: ''
    };
}
exports.createState = createState;
//# sourceMappingURL=rootState.js.map