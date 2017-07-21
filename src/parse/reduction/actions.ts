import { IAction } from '../StateManage/interfaces';
const actions = {
    token: 'TOKEN'
};

class TokenAction implements IAction {
    public type: string = actions.token;
    constructor(public token: string) { }
}

export {
    actions,
    TokenAction
};
