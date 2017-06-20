import tokenBreakdown from 'token-breakdown-js';
import { allTokens, replacements } from './tokens';
import { IStateManager } from './StateManage/interfaces';
import { IState, IFinalState } from './Reducers/State/interfaces';
import { RootNode } from '../nodes';
import { TokenAction } from './Reducers/actions';
import setEof from './setEof';

export default function parseImpl(manager: IStateManager<IState>, source: string): RootNode {
    const tokens = tokenBreakdown(allTokens, replacements).breakDown(source);
    const tokensWithEof = setEof(tokens);
    tokensWithEof.forEach(token => manager.dispatch(new TokenAction(token)));
    const result = manager.getState() as IFinalState;
    return result.rootNode;
}
