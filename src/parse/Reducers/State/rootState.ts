import states from './states';
import { IState, IRootState } from './interfaces';
import { keywords } from '../../tokens';
import { TokenAction } from '../actions';
import * as finalState from './finalState';
import * as configState from './configState';
import * as groupState from './groupState';

function tryCreateSimpleConfig(current: IRootState, token: string): IState {
    if (groupState.nodeHasContent(current)) {
        return groupState.addToken(current, token);
    }

    return configState.createState(current, token);
}

function reduce(current: IState, action: TokenAction): IState {
    const currentState = current as IRootState;
    switch (action.token) {
        case keywords.language:
        case keywords.parameters:
        case keywords.import:
        case keywords.namespace:
        case keywords.using:
            return tryCreateSimpleConfig(currentState, action.token);
        case keywords.eof:
            return finalState.createState(groupState.tryAddLiteralNode(currentState).children);
        default:
            return groupState.reduceGroupState(currentState, action.token);
    }
}

function createState(): IRootState {
    return {
        name: states.root,
        hasContent: false,
        children: [],
        content: []
    };
}

export {
    reduce,
    createState,
}
