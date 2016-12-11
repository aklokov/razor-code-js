import tokenBreakdown from 'token-breakdown-js';
import { allTokens, replacements } from './tokens';
import { IStateManager } from './StateManage/interfaces';
import IRoot from './Reducers/IRoot';
import DocumentNode from './Nodes/DocumentNode';
import { TokenAction, EndAction } from './Reducers/actions';

export default function parseImpl(manager: IStateManager<IRoot>, source: string): DocumentNode {
    const tokens = tokenBreakdown(allTokens, replacements).breakDown(source);
    tokens.forEach(token => manager.dispatch(new TokenAction(token)));
    manager.dispatch(new EndAction());
    const result = manager.getState();
    return result.document;
}
