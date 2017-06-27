import { IState, IGroupState, IChildState } from './interfaces';
import StateType from './StateType';
import { keywords, flowKeywords, tokens } from '../../tokens';
import * as functions from './stateFunctions';
import { ContentNode, NodeType } from '../../../nodes';
import * as groupState from './groupState';

function createNode(current: IChildState): ContentNode {
    return new ContentNode(functions.content.getContent(current), NodeType.Expression);
}

function addNodeToPreviousState(current: IChildState): IGroupState {
    return current.content.length
        ? functions.group.addNode(current.previous, createNode(current))
        : (functions.content.addToken(current.previous, keywords.at) as IGroupState);
}

function expressionBreakEncounteread(current: IChildState, token: string): IState {
    const previous = addNodeToPreviousState(current);
    return groupState.reduceGroupState(previous, token);
}

function eofEncountered(current: IChildState): IState {
    return addNodeToPreviousState(current);
}

// const openingBrackets = {
//     '<': true,
//     '(': true,
//     '[': true
// };

let expressionBreaks = {};
[...flowKeywords, ...tokens].forEach(token => expressionBreaks[token] = true);


export function reduce(current: IChildState, token: string): IState {
    // if(openingBrackets[token])){
    // }
    if (token === keywords.eof) {
        return eofEncountered(current);
    }

    if (expressionBreaks[token]) {
        return expressionBreakEncounteread(current, token);
    }

    return functions.content.addToken(current, token);
}

export function createState(previous: IGroupState): IChildState {
    return {
        type: StateType.Expression,
        previous,
        content: ''
    };
}
