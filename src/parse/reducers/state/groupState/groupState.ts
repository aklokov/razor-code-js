import { IGroupState } from '../interfaces';
import { keywords } from '../../../tokens';
import * as groupStateFunctions from './groupStateFunctions';
import * as eolFunctions from './eolFunctions';

export function reduceGroupState(current: IGroupState, token: string): IGroupState {
    switch (token) {
        case keywords.eol:
            return eolFunctions.addForceEol(current);
        case '\n':
            return eolFunctions.addEol(current);
        case keywords.foreach:
        case keywords.if:
            throw new Error('not implemented');
        default:
            return groupStateFunctions.addToken(current, token);
    }
}
