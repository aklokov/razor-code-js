import { IState, IStateWithContent } from '../interfaces';
import * as states from '../index';

function createState(contentState: IStateWithContent, previous: IState, token: string, topBracket: boolean): IState {
    switch (token) {
        case '(':
            return states.parenthesisState.createState(contentState, previous, topBracket);
        case '[':
            return states.squareBracketState.createState(contentState, previous, topBracket);
        case '{':
            return states.curlyBraceState.createState(contentState, previous, topBracket);
        case '<':
            return states.angleBracketState.createState(contentState, previous, topBracket);
        case '"':
            return states.quoteBracketState.createState(contentState, previous, topBracket);
        case '\'':
            return states.apostropheBracketState.createState(contentState, previous, topBracket);
        default:
            throw new Error('unknown brace');
    }
}

export function createTopBracketState(contentState: IStateWithContent, previous: IState, token: string): IState {
    return createState(contentState, previous, token, true);
}

export function createBracketState(contentState: IStateWithContent, previous: IState, token: string): IState {
    return createState(contentState, previous, token, false);
}
