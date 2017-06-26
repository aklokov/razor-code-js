import { IState, IGroupState, IChildState } from './interfaces';
import StateType from './StateType';
import { keywords } from '../../tokens';
import * as functions from './stateFunctions';
import { ContentNode, NodeType } from '../../../nodes';

function createNode(current: IChildState): ContentNode {
    return new ContentNode(functions.content.getContent(current), NodeType.Expression);
}

export function reduce(current: IChildState, token: string): IState {
    let previous: IGroupState;
    switch (token) {
        case '"':
        case ')':
        case '}':
        case ']':
        case '\'':
        case ' ':
        case '>':
        case ';':
        case ',':
        case '=':
        case ':':
            previous = functions.group.addNode(current.previous, createNode(current));
            return functions.content.addToken(previous, token);
        case '@':
            previous = functions.group.addNode(current.previous, createNode(current));
            return {
                ...current,
                previous
            };
        case keywords.lineFeed:
            previous = functions.group.addNode(current.previous, createNode(current));
            return functions.eol.addEol(previous);
        case keywords.eof:
            return { ...current.previous };
        default:
            return functions.content.addToken(current, token);
    }
}

export function createState(previous: IGroupState): IChildState {
    return {
        type: StateType.Expression,
        previous,
        content: ''
    };
}
