import { IState } from './State/interfaces';
import { IAction, IReduce } from '../StateManage/interfaces';
import getStateItem from './getStateItem';
import states from './State/states';
import { TokenAction, actions } from './actions';
import * as rootState from './State/rootState';
import { keywords } from '../tokens';

const rootReducer: IReduce<IState> = function (current: IState, action: IAction): IState {
    current = current || rootState.createState();
    const item = getStateItem(current.name);
    const tokenAction = action as TokenAction;
    if (action.type !== actions.token) {
        return current;
    }

    switch (tokenAction.token) {
        case keywords.eof:
            var nextState = current;
            while (nextState.name !== states.final) {
                nextState = item.reduce(nextState, tokenAction);
            }
            return nextState;
        default:
            return item.reduce(current, tokenAction);
    }
};

export default rootReducer;
