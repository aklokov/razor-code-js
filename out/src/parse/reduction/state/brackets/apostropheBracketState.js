"use strict";
exports.__esModule = true;
var StateType_1 = require("../StateType");
var baseBracketFunctions = require("./baseBracketFunctions");
var openingBracket = '\'';
var closingBracket = '\'';
var reduce = baseBracketFunctions.quotesReducerCreation(closingBracket);
exports.reduce = reduce;
var createState = baseBracketFunctions.stateCreation(openingBracket, StateType_1.StateType.ApostropheBracket);
exports.createState = createState;
//# sourceMappingURL=apostropheBracketState.js.map