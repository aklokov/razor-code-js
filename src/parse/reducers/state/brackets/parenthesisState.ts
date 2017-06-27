import { IState, IStateWithContent, IBracketState } from '../interfaces';
import { keywords } from '../../../tokens';
import StateType from '../StateType';
import * as bracketMain from './bracketMain';
import * as functions from '../stateFunctions';

const openingBrackets = {
    '<': true,
    '(': true,
    '[': true,
    '{': true,
    '\'': true,
    '"': true
};
const openingBracket = '(';
const closingBracket = ')';

export function reduce(current: IBracketState, token: string): IState {
    if (token === keywords.eof) {
        return current.previous;
    }

    const contentState = functions.content.addToken(current.contentState, token);

    if (closingBracket === token) {
        if (current.topBracket) {
            return contentState;
        }

        return {
            ...current.previous,
            contentState
        };
    }

    if (openingBrackets[token]) {
        return bracketMain.createBracketState(contentState, current, token);
    }

    return {
        ...current,
        contentState
    };
}

export function createState(contentState: IStateWithContent, previous: IState, topBracket: boolean): IBracketState {
    const content = functions.content.addToken(contentState, openingBracket);
    return {
        topBracket,
        type: StateType.RoundParenthesis,
        contentState: content,
        previous
    };
}
