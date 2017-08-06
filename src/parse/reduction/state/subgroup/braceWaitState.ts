import { IState, ISubgroupConditionState, IBraceWaitState } from '../interfaces';
import { StateType } from '../StateType';
import { keywords } from '../../../../tokens';
import * as functions from '../stateFunctions';
import * as subgroupState from './subgroupState';
export function reduce(current: IBraceWaitState, token: string): IState {
    if (token === keywords.eof) {
        return current.previous;
    }

    if (token === ' ' || token === '\t') {
        return functions.content.addToken(current, token);
    }

    if (token === '{') {
        return subgroupState.createState(current.previous);
    }

    return functions.content.addToken(current.previous.previous, current.content + token);
}

export function createState(previous: ISubgroupConditionState): IBraceWaitState {
    return {
        type: StateType.BraceWait,
        previous,
        content: ''
    };
}
