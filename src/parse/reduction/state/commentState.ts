import { IState, IGroupState, ICommentState } from './interfaces';
import { StateType } from './StateType';
import { keywords } from '../../../tokens';
import * as functions from './stateFunctions';
import { ContentNode, NodeType } from '../../../nodes';

function createNode(current: ICommentState): ContentNode {
    return new ContentNode(functions.content.getContent(current), NodeType.Comment);
}

function addNodeToPreviousState(current: ICommentState): IGroupState {
    return current.content.length
        ? functions.group.addNode(current.previous, createNode(current))
        : (functions.content.addToken(current.previous, keywords.at) as IGroupState);
}

function commentEndEncountered(current: ICommentState): IState {
    return addNodeToPreviousState(current);
}

function eofEncountered(current: ICommentState): IState {
    return addNodeToPreviousState(current);
}

function isStarEncountered(current: ICommentState, token: string): ICommentState {
    if (token === '*') {
        return {
            ...current,
            starEncountered: true
        };
    } else {
        return {
            ...current,
            content: current.content + token,
            starEncountered: false
        };
    }
}

export function reduce(current: ICommentState, token: string): IState {
    if (token === keywords.eof) {
        return eofEncountered(current);
    }

    if (token === keywords.at && current.starEncountered) {
        return commentEndEncountered(current);
    }

    return isStarEncountered(current, token);
}

export function createState(previous: IGroupState): ICommentState {
    return {
        type: StateType.Comment,
        previous,
        content: '',
        starEncountered: false
    };
}
