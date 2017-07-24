import { IState, IGroupState, ISubgroupState, SubgroupOwner } from '../interfaces';
import { ForEachNode } from '../../../../nodes';
import * as functions from '../stateFunctions';

function createForEachNode(state: ISubgroupState): IGroupState {
    const node = new ForEachNode(state.previous.content, state.children);
    return functions.group.addNode(state.previous.previous, node);
}

export function closeSubgroup(state: ISubgroupState): IState {
    switch (state.owner) {
        case SubgroupOwner.foreach:
            return createForEachNode(state);
        default:
            throw new Error('owner type not supported');
    }
}
