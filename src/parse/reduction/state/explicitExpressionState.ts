import { IState, IGroupState, IChildState } from './interfaces';
import StateType from './StateType';
import { keywords } from '../../tokens';
import * as functions from './stateFunctions';
import { ContentNode, NodeType } from '../../../nodes';
import * as bracketMain from './brackets/bracketMain';

function createNode(current: IChildState): ContentNode {
    return new ContentNode(functions.content.getContent(current), NodeType.Expression);
}

function addNodeToPreviousState(current: IChildState): IGroupState {
    return current.content.length
        ? functions.group.addNode(current.previous, createNode(current))
        : current.previous;
}

function expressionBreakEncountered(current: IChildState, token: string): IState {
    return addNodeToPreviousState(current);
}

function eofEncountered(current: IChildState): IState {
    return addNodeToPreviousState(current);
}

const openingBrackets = {
    '<': true,
    '(': true,
    '[': true,
    '{': true,
    '"': true,
    '\'': true
};


export function reduce(current: IChildState, token: string): IState {
    if (token === keywords.eof) {
        return eofEncountered(current);
    }

    if (openingBrackets[token]) {
        return bracketMain.createTopBracketState(current, current, token);
    }

    if (token === ')') {
        return expressionBreakEncountered(current, token);
    }

    return functions.content.addToken(current, token);
}

export function createState(previous: IGroupState): IChildState {
    return {
        type: StateType.ExplicitExpression,
        previous,
        content: ''
    };
}
