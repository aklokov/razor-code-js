import states from './states';
import { IState, IRootState, ISimpleConfigState } from './interfaces';
import { keywords } from '../../tokens';
import { TokenAction } from '../actions';
import { SimpleConfigNode } from '../../../nodes';

function backToRootState(currentState: ISimpleConfigState): IRootState {
    const node = new SimpleConfigNode(currentState.token, currentState.content.join(''));
    return {
        ...currentState.root,
        group: [...currentState.root.group, node]
    };
}

function addToState(currentState: ISimpleConfigState, token: string): ISimpleConfigState {
    return {
        ...currentState,
        content: [...currentState.content, token]
    };
}

function reduce(current: IState, action: TokenAction): IState {
    const currentState: ISimpleConfigState = current as ISimpleConfigState;
    switch (action.token) {
        case '\n':
        case keywords.eof:
            return backToRootState(currentState);
        default:
            return addToState(currentState, action.token);
    }
}

function createState(root: IRootState, token: string, content: string[] = []): ISimpleConfigState {
    const newState: ISimpleConfigState = {
        root,
        token,
        content,
        name: states.simpleConfig
    };

    return newState;
}

export {
    reduce,
    createState,
}
