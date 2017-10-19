import { Create } from 'token-breakdown-js';
import { allTokens } from '../tokens';
import { IState, IFinalState } from './reduction/state/interfaces';
import { RootNode } from '../nodes';
import setEof from './setEof';

export default function parseImpl(reducer: (c: IState, t: string) => IState, source: string): RootNode {
    const tokens = Create(allTokens).breakDown(source);
    const tokensWithEof = setEof(tokens);
    let state;
    tokensWithEof.forEach(token => state = reducer(state, token));
    const result = state as IFinalState;
    return result.rootNode;
}
