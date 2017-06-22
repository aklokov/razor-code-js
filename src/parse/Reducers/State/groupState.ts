import { IGroupState } from './interfaces';
import { BasicNode, LiteralNode, NodeType } from '../../../nodes';
import { keywords } from '../../tokens';


function addToken(current: IGroupState, token: string): IGroupState {
    return {
        ...current,
        content: [...current.content, token]
    };
}

function addNode(current: IGroupState, node: BasicNode): IGroupState {
    return {
        ...current,
        hasContent: true,
        content: [],
        children: [...current.children, node]
    };
}

function contentIsNotEmpty(content: string[]): boolean {
    return content.some(item => !!item.trim().length);
}

function nodeHasContent(node: IGroupState): boolean {
    return node.hasContent || contentIsNotEmpty(node.content);
}

function getContent(current: IGroupState): string {
    return current.content.join('');
}

function afterForceEol(current: IGroupState): boolean {
    if (!current.children.length) {
        return false;
    }

    const lastNode = current.children[current.children.length - 1];
    return lastNode.type === NodeType.ForceEol;
}

function emptyContentAfterForceEol(current: IGroupState): boolean {
    return afterForceEol(current) && !contentIsNotEmpty(current.content);
}

function tryAddLiteralNode(current: IGroupState): IGroupState {
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

function addEol(current: IGroupState): IGroupState {
    const afterAdd = tryAddLiteralNode(current);

    // dump empty line if there are no previous content
    if (!afterAdd.hasContent || afterForceEol(afterAdd)) {
        return afterAdd;
    }

    return addNode(afterAdd, new BasicNode(NodeType.Eol));
}

function forceAddContent(current: IGroupState): IGroupState {
    const content = getContent(current);
    return content.length
        ? addNode(current, new LiteralNode(content))
        : current;
}

function addForceEol(current: IGroupState): IGroupState {
    const afterAdd = forceAddContent(current);
    return addNode(afterAdd, new BasicNode(NodeType.ForceEol));
}


function reduceGroupState(current: IGroupState, token: string): IGroupState {
    switch (token) {
        case keywords.eol:
            return addForceEol(current);
        case '\n':
            return addEol(current);
        case keywords.foreach:
        case keywords.if:
            throw new Error('not implemented');
        default:
            return addToken(current, token);
    }
}


export {
    reduceGroupState,
    tryAddLiteralNode,
    nodeHasContent,
    addToken
}
