import states from './states';
import { IState, IGroupState } from './interfaces';
import { TokenAction } from '../actions';
import SimpleConfigNode from '../../Nodes/SimpleConfigNode';

interface ISimpleConfigState extends IState {
    content: string[];
    token: string;
    previous: IGroupState;
}

function reduce(current: IState, action: TokenAction): IState {
    const currentState: ISimpleConfigState = current as ISimpleConfigState;
    switch (action.token) {
        case '\n':
            const node = new SimpleConfigNode(currentState.token, currentState.content.join());
            return {
                ...currentState.previous,
                group: [...currentState.previous.group, node]
            };
        default:
            return {
                ...currentState,
                tokens: [...currentState.content, action.token]
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
