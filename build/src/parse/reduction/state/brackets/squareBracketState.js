"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("../StateType");
const baseBracketFunctions = require("./baseBracketFunctions");
const tokens_1 = require("../../../../tokens");
const openingBracket = '[';
const closingBracket = ']';
const reduce = baseBracketFunctions.reducerCreation(tokens_1.openingBracketsMap, closingBracket);
exports.reduce = reduce;
const createState = baseBracketFunctions.stateCreation(openingBracket, StateType_1.StateType.SquareBracket);
exports.createState = createState;
//# sourceMappingURL=squareBracketState.js.map