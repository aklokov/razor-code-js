import { IState, ISubgroupConditionState, ISubgroupState } from '../interfaces';
import StateType from '../StateType';
import { keywords } from '../../../tokens';
import * as multiline from './multilineSubgroupState';
import * as functions from '../stateFunctions';
import * as groupState from '../groupState';
import { closeSubgroup } from './subgroupClosing';
import { isMultiline } from './nodesFunctions';

export function reduce(current: ISubgroupState, token: string): IState {
    if (token === keywords.eof || token === '}') {
        const afterAdd = functions.content.tryAddLiteralNode(current);
        return closeSubgroup(afterAdd as ISubgroupState);
    }

    if (token === keywords.eol || token === keywords.lineFeed) {
        const afterAdd = groupState.reduceGroupState(current, token) as ISubgroupState;
        return multiline.createState(afterAdd);
    }

    const afterAdd = groupState.reduceGroupState(current, token) as ISubgroupState;
    if (afterAdd.children.some(isMultiline)) {
        return multiline.createState(afterAdd);
    }

    return afterAdd;
}

export function createState(previous: ISubgroupConditionState): ISubgroupState {
    return {
        type: StateType.Subgroup,
        previous,
        content: '',
        hasContent: false,
        children: []
    };
}
