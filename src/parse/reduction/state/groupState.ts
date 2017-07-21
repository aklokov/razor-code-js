import { IGroupState, IState } from './interfaces';
import { keywords } from '../../tokens';
import * as functions from './stateFunctions';
import { implicitExpressionState, explicitExpressionState, injectionState } from './';

export function reduceGroupState(current: IGroupState, token: string): IState {
    switch (token) {
        case keywords.eol:
            return functions.eol.addForceEol(current);
        case keywords.lineFeed:
            return functions.eol.tryAddEol(current);
        case keywords.atat:
            return functions.content.addToken(current, keywords.at);
        case keywords.at:
            {
                const afterAdd = functions.content.tryAddLiteralNode(current);
                return implicitExpressionState.createState(afterAdd);
            }
        case keywords.atparenthesis:
            {
                const afterAdd = functions.content.tryAddLiteralNode(current);
                return explicitExpressionState.createState(afterAdd);
            }
        case keywords.atbrace:
            {
                const afterAdd = functions.content.tryAddLiteralNode(current);
                return injectionState.createState(afterAdd);
            }
        case keywords.foreach:
        case keywords.if:
            throw new Error('not implemented');
        default:
            return functions.content.addToken(current, token);
    }
}
