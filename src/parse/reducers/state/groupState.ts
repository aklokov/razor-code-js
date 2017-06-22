import { IGroupState, IState } from './interfaces';
import { keywords } from '../../tokens';
import * as functions from './stateFunctions';
import * as expressionState from './expressionState';


export function reduceGroupState(current: IGroupState, token: string): IState {
    switch (token) {
        case keywords.eol:
            return functions.eol.addForceEol(current);
        case '\n':
            return functions.eol.addEol(current);
        case '@@':
            return functions.content.addToken(current, '@');
        case '@':
            return expressionState.createState(current);
        case keywords.foreach:
        case keywords.if:
            throw new Error('not implemented');
        default:
            return functions.content.addToken(current, token);
    }
}
