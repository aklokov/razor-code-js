import { IGroupState } from '../interfaces';
import { BasicNode, LiteralNode, NodeType } from '../../../../nodes';

function contentIsNotEmpty(content: string[]): boolean {
    return content.some(item => !!item.trim().length);
}

export function nodeHasContent(node: IGroupState): boolean {
    return node.hasContent || contentIsNotEmpty(node.content);
}

function getContent(current: IGroupState): string {
    return current.content.join('');
}

export function addNode(current: IGroupState, node: BasicNode): IGroupState {
    return {
        ...current,
        hasContent: true,
        content: [],
        children: [...current.children, node]
    };
}

export function addToken(current: IGroupState, token: string): IGroupState {
    return {
        ...current,
        content: [...current.content, token]
    };
}

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

export function tryAddLiteralNode(current: IGroupState): IGroupState {
    if (!current.content.length) {
        return current;
    }

    if (!nodeHasContent(current) || emptyContentAfterForceEol(current)) {
        // dump empty line if there are no previous content
        return {
            ...current,
            content: []
        };
    }

    return addNode(current, new LiteralNode(getContent(current)));
}

export function forceAddContent(current: IGroupState): IGroupState {
    const content = getContent(current);
    return content.length
        ? addNode(current, new LiteralNode(content))
        : current;
}
