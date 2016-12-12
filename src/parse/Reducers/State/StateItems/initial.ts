import IState from '../IState';
import { keywords } from '../../../tokens';

function processState(prev: IState, token: string): IState {
    switch (token) {
        case keywords.for:
            break;
        default:
            break;
    }
    return { name: 'name', nodes: [] };
}

export {
    processState
}
