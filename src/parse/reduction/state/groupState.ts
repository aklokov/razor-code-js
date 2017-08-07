import { IGroupState, IState, SubgroupOwner } from './interfaces';
import { keywords } from '../../../tokens';
import * as functions from './stateFunctions';
import * as stateItems from './';

function add(current: IGroupState): IGroupState {
  return functions.content.forceAddContent(current);
}
export function reduceGroupState(current: IGroupState, token: string): IState {
  switch (token) {
    case keywords.eol:
      return functions.eol.addForceEol(current);
    case keywords.lineFeed:
      return functions.eol.tryAddEol(current);
    case keywords.atat:
      return functions.content.addToken(current, keywords.at);
    case keywords.at:
      return stateItems.implicitExpressionState.createState(add(current));
    case keywords.atparenthesis:
      return stateItems.explicitExpressionState.createState(add(current));
    case keywords.atbrace:
      return stateItems.injectionState.createState(add(current));
    case keywords.foreach:
    case keywords.foreachSpaced:
      return stateItems.subgroupConditionState.createState(add(current), SubgroupOwner.foreach);
    case keywords.if:
    case keywords.ifSpaced:
      return stateItems.subgroupConditionState.createState(add(current), SubgroupOwner.if);
    case keywords.escapeBrace:
      return functions.content.addToken(current, '}');
    case keywords.atStar:
      return stateItems.commentState.createState(add(current));
    case keywords.atbracket:
      return stateItems.partialState.createState(add(current));
    default:
      return functions.content.addToken(current, token);
  }
}
