import { IGroupState, IStateWithContent } from '../interfaces';
import { LiteralNode, NodeType } from '../../../../nodes';
import * as group from './group';

export function afterForceEol(current: IGroupState): boolean {
    if (!current.children.length) {
        return false;
    }

    const lastNode = current.children[current.children.length - 1];
    return lastNode.type === NodeType.ForceEol;
}

function emptyContentAfterForceEol(current: IGroupState): boolean {
    return afterForceEol(current) && !contentIsNotEmpty(current.content);
}

function contentIsNotEmpty(content: string): boolean {
    return !!content.trim().length;
}

export function nodeHasContent(node: IGroupState): boolean {
    return node.hasContent || contentIsNotEmpty(node.content);
}

export function getContent(current: IStateWithContent): string {
    return current.content;
}

export function addToken(current: IStateWithContent, token: string): IStateWithContent {
    return {
        ...current,
        content: current.content + token
    };
}

export function tryAddLiteralNode(current: IGroupState): IGroupState {
    if (!current.content.length) {
        return current;
    }

    if (!nodeHasContent(current) || emptyContentAfterForceEol(current)) {
        // dump empty line if there are no previous content
        return {
            ...current,
            content: ''
        };
    }

    return group.addNode(current, new LiteralNode(getContent(current)));
}

export function forceAddContent(current: IGroupState): IGroupState {
    const content = getContent(current);
    return content.length
        ? group.addNode(current, new LiteralNode(content))
        : current;
}
