import tokenBreakdown from 'token-breakdown-js';
import { allTokens, replacements } from './tokens';
import { IAction, IStateManager } from './StateManage/interfaces';
import IRoot from './Reducers/IRoot';
import DocumentNode from './Nodes/DocumentNode';
import * as actions from './Reducers/actions';


class TokenAction implements IAction {
    public type: string = actions.token;
    constructor(public token: string) { }
}

class EndAction implements IAction {
    public type: string = actions.end;
}

export default function parseImpl(manager: IStateManager<IRoot>, source: string): DocumentNode {
    const tokens = tokenBreakdown(allTokens, replacements).breakDown(source);
    tokens.forEach(token => manager.dispatch(new TokenAction(token)));
    manager.dispatch(new EndAction());
    const result = manager.getState();
    return result.document;
}
