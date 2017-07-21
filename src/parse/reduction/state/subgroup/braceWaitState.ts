import { IState, IChildState, IBraceWaitState, BraceOwner } from '../interfaces';
import StateType from '../StateType';
import { keywords } from '../../../tokens';
import * as functions from '../stateFunctions';
import * as subgroupState from './subgroupState';
export function reduce(current: IBraceWaitState, token: string): IState {
    if (token === keywords.eof) {
        return current.previous.previous;
    }

    if (token === ' ' || token === '\t') {
        return functions.content.addToken(current, token);
    }

    if (token === '{') {
        return subgroupState.createState(current.previous, current.owner);
    }

    const rollback = {
        ...current.previous.previous,
        content: current.content
    };

    return functions.content.addToken(rollback, token);
}

export function createState(previous: IChildState, owner: BraceOwner): IBraceWaitState {
    return {
        type: StateType.BraceWait,
        owner,
        previous,
        content: ''
    };
}
