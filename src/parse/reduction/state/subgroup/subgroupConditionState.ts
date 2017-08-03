import { IState, IGroupState, ISubgroupConditionState, SubgroupOwner } from '../interfaces';
import { StateType } from '../StateType';
import { keywords, openingBracketsMap } from '@src/tokens';
import * as bracketMain from '../brackets/bracketMain';
import * as braceWaitState from './braceWaitState';
import * as functions from '../stateFunctions';

export function reduce(current: ISubgroupConditionState, token: string): IState {
    if (token === keywords.eof) {
        return current.previous;
    }

    if (openingBracketsMap[token]) {
        return bracketMain.createTopBracketState(current, current, token);
    }

    if (token === ')') {
        return braceWaitState.createState(current);
    }

    return functions.content.addToken(current, token);
}

export function createState(previous: IGroupState, owner: SubgroupOwner): ISubgroupConditionState {
    return {
        type: StateType.SubgroupCondition,
        previous,
        content: '',
        owner,
        nodes: []
    };
}
