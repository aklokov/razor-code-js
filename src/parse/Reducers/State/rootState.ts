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

function hasContent(content: string[]): boolean {
    return content.some(item => !!item.trim().length);
}

function tryAddContentNode(current: IRootState): IRootState {
    if (!hasContent(current.content)) {
        return current;
    }

    const node = new ContentNode(current.content.join(''));
    return {
        ...current,
        hasContent: true,
        content: [],
        group: [...current.group, node]
    };
}

function addBasicNode(current: IRootState, type: NodeType): IRootState {
    const afterAdd = tryAddContentNode(current);
    const node = new BasicNode(type);
    return {
        ...afterAdd,
        group: [...afterAdd.group, node]
    };
}

function addEol(current: IRootState): IRootState {
    return addBasicNode(current, NodeType.Eol);
}

function addForceEol(current: IRootState): IRootState {
    return addBasicNode(current, NodeType.ForceEol);
}

function tryCreateSimpleConfig(current: IRootState, token: string): IState {
    if (hasContent(current.content) || current.hasContent) {
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
            return finalState.createState(tryAddContentNode(currentState).group);
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
        group: [],
        content: []
    };
}

export {
    reduce,
    createState,
}
