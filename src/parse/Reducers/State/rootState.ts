import { states, IState, IGroupState, TokenAction, keywords } from './import';
import * as finalState from './finalState';
import * as simpleConfig from './simpleConfigState';

function reduce(current: IState, action: TokenAction): IState {
    const currentState = current as IGroupState;
    switch (action.token) {
        case keywords.inherits:
        case keywords.constructor:
        case keywords.implements:
        case keywords.partialPattern:
        case keywords.using:
            return simpleConfig.createState(currentState, action.token);
        case keywords.eof:
            return finalState.createState(currentState.group);
        default:
            return current; // todo
    }
}

function createState(): IState {
    const state: IGroupState = {
        name: states.root,
        group: []
    };
    return state;
}

export {
    reduce,
    createState,
}
