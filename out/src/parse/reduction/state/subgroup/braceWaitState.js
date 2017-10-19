"use strict";
exports.__esModule = true;
var StateType_1 = require("../StateType");
var tokens_1 = require("../../../../tokens");
var functions = require("../stateFunctions");
var subgroupState = require("./subgroupState");
function reduce(current, token) {
    if (token === tokens_1.keywords.eof) {
        return current.previous;
    }
    if (token === ' ' || token === '\t') {
        return functions.content.addToken(current, token);
    }
    if (token === '{') {
        return subgroupState.createState(current.previous);
    }
    return functions.content.addToken(current.previous.previous, current.content + token);
}
exports.reduce = reduce;
function createState(previous) {
    return {
        type: StateType_1.StateType.BraceWait,
        previous: previous,
        content: ''
    };
}
exports.createState = createState;
//# sourceMappingURL=braceWaitState.js.map