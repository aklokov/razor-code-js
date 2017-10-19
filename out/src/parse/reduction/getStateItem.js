"use strict";
exports.__esModule = true;
var stateItems = require("./state");
var StateType_1 = require("./state/StateType");
function getStateItem(type) {
    switch (type) {
        case StateType_1.StateType.Root: return stateItems.rootState;
        case StateType_1.StateType.Config: return stateItems.configState;
        case StateType_1.StateType.Final: return stateItems.finalState;
        case StateType_1.StateType.ImplicitExpression: return stateItems.implicitExpressionState;
        case StateType_1.StateType.ExplicitExpression: return stateItems.explicitExpressionState;
        case StateType_1.StateType.Injection: return stateItems.injectionState;
        case StateType_1.StateType.RoundParenthesis: return stateItems.parenthesisState;
        case StateType_1.StateType.CurlyBrace: return stateItems.curlyBraceState;
        case StateType_1.StateType.SquareBracket: return stateItems.squareBracketState;
        case StateType_1.StateType.AngleBracket: return stateItems.angleBracketState;
        case StateType_1.StateType.QuoteBracket: return stateItems.quoteBracketState;
        case StateType_1.StateType.ApostropheBracket: return stateItems.apostropheBracketState;
        case StateType_1.StateType.SubgroupCondition: return stateItems.subgroupConditionState;
        case StateType_1.StateType.BraceWait: return stateItems.braceWaitState;
        case StateType_1.StateType.Subgroup: return stateItems.subgroupState;
        case StateType_1.StateType.MultilineSubgroup: return stateItems.multilineSubgroupState;
        case StateType_1.StateType.ElseWait: return stateItems.elseWaitState;
        case StateType_1.StateType.Comment: return stateItems.commentState;
        case StateType_1.StateType.Partial: return stateItems.partialState;
        default:
            throw new Error('unsupported state');
    }
}
exports["default"] = getStateItem;
//# sourceMappingURL=getStateItem.js.map