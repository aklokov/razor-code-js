import { IState, IChildState, ISubgroupState, SubgroupOwner } from '../interfaces';
import { BasicNode, ForEachNode, IfNode } from '../../../../nodes';
import { NodeType } from '../../../../nodes';
import StateType from '../StateType';
import { keywords } from '../../../tokens';
import * as multiline from './multilineSubgroupState';
import * as functions from '../stateFunctions';
import * as groupState from '../groupState';
import { closeSubgroup } from './subgroupClosing';

function isMultilineNode(node: BasicNode): boolean {
    if (node.type === NodeType.Eol || node.type === NodeType.ForceEol) {
        return true;
    }

    if (node.type === NodeType.ForEach) {
        const forEachNode = node as ForEachNode;
        return forEachNode.children.some(isMultilineNode);
    }

    if (node.type === NodeType.If) {
        const ifNode = node as IfNode;
        return ifNode.ifChildren.some(isMultilineNode)
            || ifNode.elseChildren.some(isMultilineNode);
    }
}

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
    if (afterAdd.children.some(isMultilineNode)) {
        return multiline.createState(afterAdd);
    }

    return afterAdd;
}

export function createState(previous: IChildState, owner: SubgroupOwner): ISubgroupState {
    return {
        type: StateType.Subgroup,
        owner,
        previous,
        content: '',
        hasContent: false,
        children: []
    };
}
