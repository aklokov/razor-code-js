import { IState, IGroupState, IChildState } from './interfaces';
import StateType from './StateType';
import { keywords, flowKeywords, tokens } from '../../tokens';
import * as functions from './stateFunctions';
import { ContentNode, NodeType } from '../../../nodes';
import * as groupState from './groupState';
import * as bracketMain from './brackets/bracketMain';
import { toBoolStringMap } from '../../../tools/array';

function createNode(current: IChildState): ContentNode {
    return new ContentNode(functions.content.getContent(current), NodeType.Expression);
}

function addNodeToPreviousState(current: IChildState): IGroupState {
    return current.content.length
        ? functions.group.addNode(current.previous, createNode(current))
        : (functions.content.addToken(current.previous, keywords.at) as IGroupState);
}

function expressionBreakEncountered(current: IChildState, token: string): IState {
    const previous = addNodeToPreviousState(current);
    return groupState.reduceGroupState(previous, token);
}

function eofEncountered(current: IChildState): IState {
    return addNodeToPreviousState(current);
}

const openingBrackets = {
    '<': true,
    '(': true,
    '[': true
};

let expressionBreaks = toBoolStringMap([...flowKeywords, ...tokens]);

export function reduce(current: IChildState, token: string): IState {
    if (token === keywords.eof) {
        return eofEncountered(current);
    }

    if (openingBrackets[token]) {
        return bracketMain.createTopBracketState(current, current, token);
    }

    if (expressionBreaks[token]) {
        return expressionBreakEncountered(current, token);
    }

    return functions.content.addToken(current, token);
}

export function createState(previous: IGroupState): IChildState {
    return {
        type: StateType.ImplicitExpression,
        previous,
        content: ''
    };
}
