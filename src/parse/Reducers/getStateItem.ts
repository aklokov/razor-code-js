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
        case StateType.Expression:
            return stateItems.expressionState;
        default:
            throw new Error('unsupported state');
    }
}

export default getStateItem;
