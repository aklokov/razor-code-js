import { IState } from './state/interfaces';
import { IAction, IReduce } from '../StateManage/interfaces';
import getStateItem from './getStateItem';
import StateType from './state/StateType';
import { TokenAction, actions } from './actions';
import * as rootState from './state/rootState';
import { keywords, replacements } from '../tokens';

const rootReducer: IReduce<IState> = function (current: IState, action: IAction): IState {
    current = current || rootState.createState();
    const tokenAction = action as TokenAction;
    if (action.type !== actions.token) {
        return current;
    }

    const token = replacements[tokenAction.token] || tokenAction.token;
    switch (token) {
        case keywords.eof:
            var nextState = current;
            while (nextState.type !== StateType.Final) {
                nextState = getStateItem(nextState.type).reduce(nextState, token);
            }
            return nextState;
        default:
            return getStateItem(current.type).reduce(current, token);
    }
};

export default rootReducer;
