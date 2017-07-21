import { IState, IChildState, ISubgroupState, BraceOwner } from '../interfaces';
import StateType from '../StateType';
import { keywords } from '../../../tokens';
// import * as functions from '../stateFunctions';

export function reduce(current: ISubgroupState, token: string): IState {
    if (token === keywords.eof) {
        return current.previous.previous;
    }

    return current;
}

export function createState(previous: IChildState, owner: BraceOwner): ISubgroupState {
    return {
        type: StateType.BraceWait,
        owner,
        previous,
        content: '',
        hasContent: false,
        children: []
    };
}
