"use strict";
exports.__esModule = true;
var StateType_1 = require("../StateType");
var tokens_1 = require("../../../../tokens");
var bracketMain = require("../brackets/bracketMain");
var braceWaitState = require("./braceWaitState");
var functions = require("../stateFunctions");
function reduce(current, token) {
    if (token === tokens_1.keywords.eof) {
        return current.previous;
    }
    if (tokens_1.openingBracketsMap[token]) {
        return bracketMain.createTopBracketState(current, current, token);
    }
    if (token === ')') {
        return braceWaitState.createState(current);
    }
    return functions.content.addToken(current, token);
}
exports.reduce = reduce;
function createState(previous, owner) {
    return {
        type: StateType_1.StateType.SubgroupCondition,
        previous: previous,
        content: '',
        owner: owner,
        nodes: []
    };
}
exports.createState = createState;
//# sourceMappingURL=subgroupConditionState.js.map