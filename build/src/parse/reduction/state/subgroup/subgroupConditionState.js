"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("../StateType");
const tokens_1 = require("../../../../tokens");
const bracketMain = require("../brackets/bracketMain");
const braceWaitState = require("./braceWaitState");
const functions = require("../stateFunctions");
function reduce(current, token) {
    if (token === tokens_1.keywords.eof) {
        return current.previous;
    }
    if (tokens_1.openingBracketsMap.has(token)) {
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
        previous,
        content: '',
        owner,
        nodes: []
    };
}
exports.createState = createState;
//# sourceMappingURL=subgroupConditionState.js.map