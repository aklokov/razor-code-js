"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("../StateType");
const baseBracketFunctions = require("./baseBracketFunctions");
const openingBracket = '"';
const closingBracket = '"';
const reduce = baseBracketFunctions.quotesReducerCreation(closingBracket);
exports.reduce = reduce;
const createState = baseBracketFunctions.stateCreation(openingBracket, StateType_1.StateType.QuoteBracket);
exports.createState = createState;
//# sourceMappingURL=quoteBracketState.js.map