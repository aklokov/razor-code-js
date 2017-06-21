import states from './states';
import { IState, IRootState } from './interfaces';
import { BasicNode, ContentNode, NodeType } from '../../../nodes';
import { keywords } from '../../tokens';
import { TokenAction } from '../actions';
import * as finalState from './finalState';
import * as simpleConfig from './simpleConfigState';

function addToken(current: IRootState, token: string): IRootState {
    return {
        ...current,
        content: [...current.content, token]
    };
}

function addNode(current: IRootState, node: BasicNode): IRootState {
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

function nodeHasContent(node: IRootState): boolean {
    return node.hasContent || contentIsNotEmpty(node.content);
}

function getContent(current: IRootState): string {
    return current.content.join('');
}

function afterForceEol(current: IRootState): boolean {
    if (!current.children.length) {
        return false;
    }

    const lastNode = current.children[current.children.length - 1];
    return lastNode.type === NodeType.ForceEol;
}

function emptyContentAfterForceEol(current: IRootState): boolean {
    return afterForceEol(current) && !contentIsNotEmpty(current.content);
}

function tryAddContentNode(current: IRootState): IRootState {
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

    return addNode(current, new ContentNode(getContent(current)));
}



function addEol(current: IRootState): IRootState {
    const afterAdd = tryAddContentNode(current);

    // dump empty line if there are no previous content
    if (!afterAdd.hasContent || afterForceEol(current)) {
        return afterAdd;
    }

    return addNode(afterAdd, new BasicNode(NodeType.Eol));
}

function forceAddContent(current: IRootState): IRootState {
    const content = getContent(current);
    return content.length
        ? addNode(current, new ContentNode(content))
        : current;
}

function addForceEol(current: IRootState): IRootState {
    const afterAdd = forceAddContent(current);
    return addNode(afterAdd, new BasicNode(NodeType.ForceEol));
}

function tryCreateSimpleConfig(current: IRootState, token: string): IState {
    if (nodeHasContent(current)) {
        return addToken(current, token);
    }

    return simpleConfig.createState(current, token);
}

function reduce(current: IState, action: TokenAction): IState {
    const currentState = current as IRootState;
    switch (action.token) {
        case keywords.language:
        case keywords.parameters:
        case keywords.import:
        case keywords.namespace:
        case keywords.using:
            return tryCreateSimpleConfig(currentState, action.token);
        case keywords.eof:
            return finalState.createState(tryAddContentNode(currentState).children);
        case keywords.eol:
            return addForceEol(currentState);
        case '\n':
            return addEol(currentState);
        case keywords.foreach:
        case keywords.if:
            throw new Error('not implemented');
        default:
            return addToken(currentState, action.token);
    }
}

function createState(): IRootState {
    return {
        name: states.root,
        hasContent: false,
        children: [],
        content: []
    };
}

export {
    reduce,
    createState,
}
