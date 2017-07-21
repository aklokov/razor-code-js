import { IState, IGroupState, IChildState, BraceOwner } from '../interfaces';
import StateType from '../StateType';
import { keywords } from '../../../tokens';
import { openingBracketsMap } from '../../../tokens';
import * as bracketMain from '../brackets/bracketMain';
import * as braceWaitState from './braceWaitState';
import * as functions from '../stateFunctions';

export function reduce(current: IChildState, token: string): IState {
    if (token === keywords.eof) {
        return current.previous;
    }

    if (openingBracketsMap[token]) {
        return bracketMain.createTopBracketState(current, current, token);
    }

    if (token === ')') {
        return braceWaitState.createState(current, BraceOwner.foreach);
    }

    return functions.content.addToken(current, token);
}

export function createState(previous: IGroupState): IChildState {
    return {
        type: StateType.ForEachCondition,
        previous,
        content: ''
    };
}
