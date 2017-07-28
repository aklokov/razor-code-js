import { IState } from './state/interfaces';
import getStateItem from './getStateItem';
import StateType from './state/StateType';
import * as rootState from './state/rootState';
import { keywords, replacements } from '../tokens';

function rootReducer(current: IState, token: string): IState {
    current = current || rootState.createState();

    token = replacements[token] || token;
    if (token === keywords.eof) {
        var nextState = current;
        while (nextState.type !== StateType.Final) {
            nextState = getStateItem(nextState.type).reduce(nextState, token);
        }
        return nextState;
    }

    return getStateItem(current.type).reduce(current, token);
};

export default rootReducer;
