import { IState, IStateWithContent } from '../interfaces';
import * as states from '../index';
import * as functions from '../stateFunctions';

function createState(contentState: IStateWithContent, previous: IState, token: string, topBracket: boolean): IState {
    switch (token) {
        case '(':
            return states.parenthesisState.createState(contentState, previous, topBracket);
        case '[':
            return states.squareBracketState.createState(contentState, previous, topBracket);
        case '<':
            return states.angleBracketState.createState(contentState, previous, topBracket);
        default:
            return functions.content.addToken(contentState, token);
    }
}

export function createTopBracketState(contentState: IStateWithContent, previous: IState, token: string): IState {
    return createState(contentState, previous, token, true);
}

export function createBracketState(contentState: IStateWithContent, previous: IState, token: string): IState {
    return createState(contentState, previous, token, false);
}
