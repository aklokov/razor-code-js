import { IState, IStateWithContent, IBracketState } from '../interfaces';
import { keywords } from '../../../tokens';
import StateType from '../StateType';
import * as bracketMain from './bracketMain';
import * as functions from '../stateFunctions';
import { StringMap } from '../../../../tools/dictionary';

export function goBack(current: IBracketState, token: string): IState {
    const contentState = functions.content.addToken(current.contentState, token);

    if (current.topBracket) {
        return contentState;
    }

    return {
        ...current.previous,
        contentState
    };
}

export function reducerCreation(openingBrackets: StringMap<boolean>, closingBracket: string): (c: IBracketState, t: string) => IState {
    return function reduce(current: IBracketState, token: string): IState {
        if (token === keywords.eof) {
            return current.previous;
        }

        if (openingBrackets[token]) {
            return bracketMain.createBracketState(current.contentState, current, token);
        }

        if (closingBracket === token) {
            return goBack(current, token);
        }

        return {
            ...current,
            contentState: functions.content.addToken(current.contentState, token)
        };
    };
}

export function stateCreation(openingBracket: string, type: StateType): (i: IStateWithContent, s: IState, t: boolean) => IBracketState {
    return function createState(contentState: IStateWithContent, previous: IState, topBracket: boolean): IBracketState {
        const content = functions.content.addToken(contentState, openingBracket);
        return {
            topBracket,
            type: type,
            contentState: content,
            previous
        };
    };
}
