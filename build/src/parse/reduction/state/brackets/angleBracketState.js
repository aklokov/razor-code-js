"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("../StateType");
const baseBracketFunctions = require("./baseBracketFunctions");
const openingBrackets = {
    '<': true
};
const openingBracket = '<';
const closingBracket = '>';
const baseReduce = baseBracketFunctions.reducerCreation(openingBrackets, closingBracket);
function reduce(current, token) {
    if (current.passedFirstChar) {
        return baseReduce(current, token);
    }
    if (token === ' ') {
        return baseBracketFunctions.goBack(current, token);
    }
    const passed = Object.assign({}, current, { passedFirstChar: true });
    return baseReduce(passed, token);
}
exports.reduce = reduce;
const createState = baseBracketFunctions.stateCreation(openingBracket, StateType_1.StateType.AngleBracket);
exports.createState = createState;
//# sourceMappingURL=angleBracketState.js.map