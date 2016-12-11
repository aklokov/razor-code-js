import { IAction } from '../StateManage/interfaces';
const actions = {
    token: 'TOKEN',
    end: 'END'
};

class TokenAction implements IAction {
    public type: string = actions.token;
    constructor(public token: string) { }
}

class EndAction implements IAction {
    public type: string = actions.end;
}

export {
    actions,
    TokenAction,
    EndAction
};
