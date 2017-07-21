import { IState, IGroupState, IChildState } from '../interfaces';
import { keywords } from '../../../tokens';
import * as functions from '../stateFunctions';
import { ContentNode, NodeType } from '../../../../nodes';
import * as bracketMain from '../brackets/bracketMain';
import { openingBracketsMap } from '../../../tokens';

function createNode(current: IChildState, nodeType: NodeType): ContentNode {
    return new ContentNode(functions.content.getContent(current), nodeType);
}

function addNodeToPreviousState(current: IChildState, nodeType: NodeType): IGroupState {
    return current.content.length
        ? functions.group.addNode(current.previous, createNode(current, nodeType))
        : current.previous;
}

function contentBreakEncountered(current: IChildState, token: string, nodeType: NodeType): IState {
    return addNodeToPreviousState(current, nodeType);
}

function eofEncountered(current: IChildState, nodeType: NodeType): IState {
    return addNodeToPreviousState(current, nodeType);
}

export function reduce(current: IChildState, token: string, closing: string, nodeType: NodeType): IState {
    if (token === keywords.eof) {
        return eofEncountered(current, nodeType);
    }

    if (openingBracketsMap[token]) {
        return bracketMain.createTopBracketState(current, current, token);
    }

    if (token === closing) {
        return contentBreakEncountered(current, token,  nodeType);
    }

    return functions.content.addToken(current, token);
}
