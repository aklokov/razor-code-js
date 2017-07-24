import { IState, ISubgroupState } from '../interfaces';
import StateType from '../StateType';
import { keywords } from '../../../tokens';
// import * as functions from '../stateFunctions';

export function reduce(current: ISubgroupState, token: string): IState {
    if (token === keywords.eof) {
        return current.previous;
    }

    //    if (token === '}')

    return current;
}

export function createState(subgroupState: ISubgroupState): ISubgroupState {
    return {
        ...subgroupState,
        type: StateType.MultilineSubgroup
    };
}
