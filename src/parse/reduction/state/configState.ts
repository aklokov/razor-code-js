import { StateType } from './StateType';
import { IState, IRootState, IConfigState } from './interfaces';
import { keywords } from '../../../tokens';
import { ConfigNode } from '../../../nodes';

function backToRootState(currentState: IConfigState): IRootState {
    const node = new ConfigNode(currentState.token, currentState.content);
    return {
        ...currentState.root,
        children: [...currentState.root.children, node]
    };
}

function addToState(currentState: IConfigState, token: string): IConfigState {
    return {
        ...currentState,
        content: currentState.content + token
    };
}

export function reduce(current: IState, token: string): IState {
    const currentState: IConfigState = current as IConfigState;
    switch (token) {
        case keywords.lineFeed:
        case keywords.eof:
            return backToRootState(currentState);
        default:
            return addToState(currentState, token);
    }
}

export function createState(root: IRootState, token: string, content: string = ''): IConfigState {
    const newState: IConfigState = {
        root,
        token,
        content,
        type: StateType.Config
    };

    return newState;
}
