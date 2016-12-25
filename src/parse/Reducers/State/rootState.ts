import states from './states';
import { IState, IGroupState } from './interfaces';
import { keywords } from '../../tokens';
import { TokenAction } from '../actions';
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
