import StateType from './StateType';
import { IState, IRootState, ISimpleConfigState } from './interfaces';
import { keywords } from '../../tokens';
import { ConfigNode } from '../../../nodes';

function backToRootState(currentState: ISimpleConfigState): IRootState {
    const node = new ConfigNode(currentState.token, currentState.content);
    return {
        ...currentState.root,
        children: [...currentState.root.children, node]
    };
}

function addToState(currentState: ISimpleConfigState, token: string): ISimpleConfigState {
    return {
        ...currentState,
        content: currentState.content + token
    };
}

export function reduce(current: IState, token: string): IState {
    const currentState: ISimpleConfigState = current as ISimpleConfigState;
    switch (token) {
        case keywords.lineFeed:
        case keywords.eof:
            return backToRootState(currentState);
        default:
            return addToState(currentState, token);
    }
}

export function createState(root: IRootState, token: string, content: string = ''): ISimpleConfigState {
    const newState: ISimpleConfigState = {
        root,
        token,
        content,
        type: StateType.Config
    };

    return newState;
}
