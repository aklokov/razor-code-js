import IState from '../IState';
import { keywords } from '../../../tokens';
import states from '../states';
import IGroupState from '../IGroupState';
import { TokenAction } from '../../actions';
import * as simpleConfig from './simpleConfig';

function reduce(current: IState, action: TokenAction): IState {
    const currentState = current as IGroupState;
    switch (action.token) {
        case keywords.inherits:
        case keywords.constructor:
        case keywords.implements:
        case keywords.partialPattern:
            return simpleConfig.createState(currentState, action.token);
        default:
            return current; // todo
    }
}

function createState(): IGroupState {
    return {
        name: states.initial,
        group: []
    };
}

export {
    reduce,
    createState,
}
