import tokenBreakdown from 'token-breakdown-js';
import { allTokens, replacements } from './tokens';
import { IAction, IReduce, IStateManager } from './StateManage/interfaces';
import IRootState from './State/IRootState';
import DocumentNode from './Nodes/DocumentNode';

class TokenAction implements IAction {
    public type: string = "TOKEN";
    constructor(public token: string) { }
}

class EndAction implements IAction {
    public type: string = "END";
}

export default function parseImpl(manager: IStateManager<IRootState>, source: string): DocumentNode {
    const tokens = tokenBreakdown(allTokens, replacements).breakDown(source);
    tokens.forEach(token => manager.dispatch(new TokenAction(token)));
    manager.dispatch(new EndAction());
    const result = manager.getState();
    return result.document;
}