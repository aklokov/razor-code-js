import { IState } from './State/interfaces';
import { IAction, IReduce } from '../StateManage/interfaces';
import getStateItem from './getStateItem';
import { TokenAction } from './actions';
import * as rootState from './State/rootState';
import { keywords } from '../tokens';

const rootReducer: IReduce<IState> = function (current: IState, action: IAction): IState {
    current = current || rootState.createState();
    const item = getStateItem(current.name);
    const tokenAction = action as TokenAction;
    switch (tokenAction.token) {
        case keywords.eof:
            return current;
        default:
            const tokenAction = action as TokenAction;
            const newState = item.reduce(current, tokenAction);
            return { ...current, state: newState };
    }
};

export default rootReducer;
