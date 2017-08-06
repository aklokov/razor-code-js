import { IGroupState, IState, SubgroupOwner } from './interfaces';
import { keywords } from '../../../tokens';
import * as functions from './stateFunctions';
import * as stateItems from './';

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
                return stateItems.implicitExpressionState.createState(afterAdd);
            }
        case keywords.atparenthesis:
            {
                const afterAdd = functions.content.tryAddLiteralNode(current);
                return stateItems.explicitExpressionState.createState(afterAdd);
            }
        case keywords.atbrace:
            {
                const afterAdd = functions.content.tryAddLiteralNode(current);
                return stateItems.injectionState.createState(afterAdd);
            }
        case keywords.foreach:
        case keywords.foreachSpaced:
            {
                const afterAdd = functions.content.tryAddLiteralNode(current);
                return stateItems.subgroupConditionState.createState(afterAdd, SubgroupOwner.foreach);
            }
        case keywords.if:
        case keywords.ifSpaced:
            {
                const afterAdd = functions.content.tryAddLiteralNode(current);
                return stateItems.subgroupConditionState.createState(afterAdd, SubgroupOwner.if);
            }
        case keywords.escapeBrace:
            return functions.content.addToken(current, '}');
        case keywords.atStar:
            return stateItems.commentState.createState(current);
        case keywords.atbracket:
            return
        default:
            return functions.content.addToken(current, token);
    }
}
