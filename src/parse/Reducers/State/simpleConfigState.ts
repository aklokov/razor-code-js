import { states, IState, IGroupState, TokenAction, keywords } from './import';
import { SimpleConfigNode } from '../../../nodes';

interface ISimpleConfigState extends IState {
    content: string[];
    token: string;
    previous: IGroupState;
}

function reduce(current: IState, action: TokenAction): IState {
    const currentState: ISimpleConfigState = current as ISimpleConfigState;
    switch (action.token) {
        case '\n':
        case keywords.eof:
            const node = new SimpleConfigNode(currentState.token, currentState.content.join(''));
            return {
                ...currentState.previous,
                group: [...currentState.previous.group, node]
            };
        default:
            return {
                ...currentState,
                content: [...currentState.content, action.token]
            };
    }
}

function createState(previous: IGroupState, token: string, content: string[] = []): IState {
    const newState: ISimpleConfigState = {
        previous,
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
