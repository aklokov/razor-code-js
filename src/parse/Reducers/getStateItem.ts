import * as stateItems from './state';
import { IStateItem } from './state/interfaces';
import StateType from './state/StateType';

function getStateItem(type: StateType): IStateItem {
    switch (type) {
        case StateType.Root:
            return stateItems.rootState;
        case StateType.Config:
            return stateItems.configState;
        case StateType.Final:
            return stateItems.finalState;
        case StateType.ImplicitExpression:
            return stateItems.implicitExpressionState;
        case StateType.RoundParenthesis:
            return stateItems.parenthesisState;
        case StateType.SquareBracket:
            return stateItems.squareBracketState;
        case StateType.AngleBracket:
            return stateItems.angleBracketState;
        case StateType.QuoteBracket:
            return stateItems.quoteBracketState;
        case StateType.ApostropheBracket:
            return stateItems.apostropheBracketState;
        default:
            throw new Error('unsupported state');
    }
}

export default getStateItem;
