import IRoot from '../Reducers/IRoot';
import { IAction, IReduce } from '../StateManage/interfaces';
import * as states from './State/states';
import getStateItem from './getStateItem';
import * as actions from './actions';

const rootReducer: IReduce<IRoot> = function (prev: IRoot, action: IAction): IRoot {
    prev = prev || { document: undefined, state: { name: states.initial } };
    const item = getStateItem(prev.state.name);
    switch (action.type) {
        case actions.token:
            const tokenAction = action as TokenAction;
            const newState = item.processState(prev.state, tokenAction.token);
            return prev;
        case actions.end:
            return prev;
        default:
            return prev;
    }    
};

export default rootReducer;
