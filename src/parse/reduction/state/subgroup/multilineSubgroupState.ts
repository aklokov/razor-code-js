import { IState, ISubgroupState } from '../interfaces';
import StateType from '../StateType';
import { keywords } from '../../../tokens';
import { NodeType } from '../../../../nodes';
import * as groupState from '../groupState';
import { closeSubgroup } from './subgroupClosing';

function noNodesSinceLastEol(current: ISubgroupState): boolean {
    if (!current.children.length) {
        return true;
    }

    const lastNode = current.children[current.children.length - 1];
    return lastNode.type === NodeType.Eol || lastNode.type === NodeType.ForceEol;
}

function noContentSinceLastEol(current: ISubgroupState): boolean {
    return noNodesSinceLastEol(current) && !current.content.trim().length;
}

export function reduce(current: ISubgroupState, token: string): IState {
    if (token === keywords.eof) {
        return current.previous;
    }

    if (token === '}' && noContentSinceLastEol(current)) {
        return closeSubgroup(current as ISubgroupState);
    }

    return groupState.reduceGroupState(current, token) as ISubgroupState;
}

export function createState(subgroupState: ISubgroupState): ISubgroupState {
    return {
        ...subgroupState,
        type: StateType.MultilineSubgroup
    };
}
