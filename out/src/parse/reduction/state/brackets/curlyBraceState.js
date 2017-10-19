"use strict";
exports.__esModule = true;
var StateType_1 = require("../StateType");
var baseBracketFunctions = require("./baseBracketFunctions");
var tokens_1 = require("../../../../tokens");
var openingBracket = '{';
var closingBracket = '}';
var reduce = baseBracketFunctions.reducerCreation(tokens_1.openingBracketsMap, closingBracket);
exports.reduce = reduce;
var createState = baseBracketFunctions.stateCreation(openingBracket, StateType_1.StateType.CurlyBrace);
exports.createState = createState;
//# sourceMappingURL=curlyBraceState.js.map