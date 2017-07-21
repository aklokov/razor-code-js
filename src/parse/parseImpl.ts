import tokenBreakdown from 'token-breakdown-js';
import { allTokens } from './tokens';
import { IStateManager } from './StateManage/interfaces';
import { IState, IFinalState } from './reduction/state/interfaces';
import { RootNode } from '../nodes';
import { TokenAction } from './reduction/actions';
import setEof from './setEof';

export default function parseImpl(manager: IStateManager<IState>, source: string): RootNode {
    const tokens = tokenBreakdown(allTokens).breakDown(source);
    const tokensWithEof = setEof(tokens);
    tokensWithEof.forEach(token => manager.dispatch(new TokenAction(token)));
    const result = manager.getState() as IFinalState;
    return result.rootNode;
}
