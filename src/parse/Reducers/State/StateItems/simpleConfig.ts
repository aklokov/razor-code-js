import IState from '../IState';
import { TokenAction } from '../../actions';
import IGroupState from '../IGroupState';
import states from '../states';
import SimpleConfigNode from '../../../Nodes/SimpleConfigNode';

interface ISimpleConfigState extends IState {
    tokens: string[];
    configToken: string;
    previous: IGroupState;
}

function reduce(current: IState, action: TokenAction): IState {
    const currentState: ISimpleConfigState = current as ISimpleConfigState;
    switch (action.token) {
        case '\n':
            return {
                ...currentState.previous,
                group: [...currentState.previous.group, new SimpleConfigNode(currentState.configToken)]
            };
        default:
            return addTokenToState(currentState, action.token);
    }
}

function addTokenToState(state: ISimpleConfigState, token: string): IState {
    return {
        ...state,
        tokens: [...state.tokens, token]
    };
}

function createState(previous: IGroupState, configToken: string, tokens: string[] = []): IState {
    const newState: ISimpleConfigState = {
        previous,
        configToken,
        tokens,
        name: states.simpleConfig
    };

    return newState;
}

export {
    reduce,
    createState,
}
