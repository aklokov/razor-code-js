import StateType from './StateType';
import { IState, IRootState } from './interfaces';
import { keywords } from '../../tokens';
import * as finalState from './finalState';
import * as configState from './configState';
import * as groupState from './groupState';
import * as functions from './stateFunctions';

function tryCreateConfig(current: IRootState, token: string): IState {
    if (functions.content.nodeHasContent(current)) {
        return functions.content.addToken(current, token);
    }

    return configState.createState(current, token);
}

export function reduce(current: IState, token: string): IState {
    const currentState = current as IRootState;
    switch (token) {
        case keywords.language:
        case keywords.parameters:
        case keywords.import:
        case keywords.namespace:
        case keywords.using:
            return tryCreateConfig(currentState, token);
        case keywords.eof:
            return finalState.createState(functions.content.tryAddLiteralNode(currentState).children);
        default:
            return groupState.reduceGroupState(currentState, token);
    }
}

export function createState(): IRootState {
    return {
        type: StateType.Root,
        hasContent: false,
        children: [],
        content: ''
    };
}
