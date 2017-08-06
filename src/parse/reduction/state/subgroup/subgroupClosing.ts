import { IState, IGroupState, ISubgroupState, SubgroupOwner } from '../interfaces';
import { ForEachNode, IfNode } from '../../../../nodes';
import * as functions from '../stateFunctions';
import * as elseWaitState from './elseWaitState';
import { cleanNodes } from './cleanNodes';

function createForEachNode(state: ISubgroupState): IGroupState {
    const node = new ForEachNode(state.previous.content, cleanNodes(state.children));
    return functions.group.addNode(state.previous.previous, node);
}

function createIfElseNode(state: ISubgroupState): IGroupState {
    const node = new IfNode(state.previous.content, cleanNodes(state.previous.nodes), cleanNodes(state.children));
    return functions.group.addNode(state.previous.previous, node);
}

export function closeSubgroup(state: ISubgroupState): IState {
    switch (state.previous.owner) {
        case SubgroupOwner.foreach:
            return createForEachNode(state);
        case SubgroupOwner.if:
            return elseWaitState.createState(state);
        case SubgroupOwner.else:
            return createIfElseNode(state);
        default:
            throw new Error('owner type not supported');
    }
}
