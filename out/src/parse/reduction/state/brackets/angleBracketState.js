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
var StateType_1 = require("../StateType");
var baseBracketFunctions = require("./baseBracketFunctions");
var openingBrackets = {
    '<': true
};
var openingBracket = '<';
var closingBracket = '>';
var baseReduce = baseBracketFunctions.reducerCreation(openingBrackets, closingBracket);
function reduce(current, token) {
    if (current.passedFirstChar) {
        return baseReduce(current, token);
    }
    if (token === ' ') {
        return baseBracketFunctions.goBack(current, token);
    }
    var passed = __assign({}, current, { passedFirstChar: true });
    return baseReduce(passed, token);
}
exports.reduce = reduce;
var createState = baseBracketFunctions.stateCreation(openingBracket, StateType_1.StateType.AngleBracket);
exports.createState = createState;
//# sourceMappingURL=angleBracketState.js.map