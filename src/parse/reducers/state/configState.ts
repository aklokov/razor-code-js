import states from './states';
import { IState, IRootState, ISimpleConfigState } from './interfaces';
import { keywords } from '../../tokens';
import { TokenAction } from '../actions';
import { ConfigNode } from '../../../nodes';

function backToRootState(currentState: ISimpleConfigState): IRootState {
    const node = new ConfigNode(currentState.token, currentState.content.join(''));
    return {
        ...currentState.root,
        children: [...currentState.root.children, node]
    };
}

function addToState(currentState: ISimpleConfigState, token: string): ISimpleConfigState {
    return {
        ...currentState,
        content: [...currentState.content, token]
    };
}

export function reduce(current: IState, action: TokenAction): IState {
    const currentState: ISimpleConfigState = current as ISimpleConfigState;
    switch (action.token) {
        case '\n':
        case keywords.eof:
            return backToRootState(currentState);
        default:
            return addToState(currentState, action.token);
    }
}

export function createState(root: IRootState, token: string, content: string[] = []): ISimpleConfigState {
    const newState: ISimpleConfigState = {
        root,
        token,
        content,
        name: states.simpleConfig
    };

    return newState;
}
