import { IGroupState } from '../interfaces';
import { BasicNode, NodeType } from '../../../../nodes';
import * as contentFunctions from './content';
import * as group from './group';

export function addEol(current: IGroupState): IGroupState {
    return group.addNode(current, new BasicNode(NodeType.Eol));
}

export function tryAddEol(current: IGroupState): IGroupState {
    const afterAdd = contentFunctions.tryAddLiteralNode(current);

    // dump empty line if there are no previous content
    if (!afterAdd.hasContent || contentFunctions.afterForceEol(afterAdd)) {
        return afterAdd;
    }

    return addEol(afterAdd);
}

export function addForceEol(current: IGroupState): IGroupState {
    const afterAdd = contentFunctions.forceAddContent(current);
    return group.addNode(afterAdd, new BasicNode(NodeType.ForceEol));
}
