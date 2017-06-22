import { IGroupState } from '../interfaces';
import { BasicNode, NodeType } from '../../../../nodes';
import * as groupStateFunctions from './groupStateFunctions';

export function addEol(current: IGroupState): IGroupState {
    const afterAdd = groupStateFunctions.tryAddLiteralNode(current);

    // dump empty line if there are no previous content
    if (!afterAdd.hasContent || groupStateFunctions.afterForceEol(afterAdd)) {
        return afterAdd;
    }

    return groupStateFunctions.addNode(afterAdd, new BasicNode(NodeType.Eol));
}

export function addForceEol(current: IGroupState): IGroupState {
    const afterAdd = groupStateFunctions.forceAddContent(current);
    return groupStateFunctions.addNode(afterAdd, new BasicNode(NodeType.ForceEol));
}
