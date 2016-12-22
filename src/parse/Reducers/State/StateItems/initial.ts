import IState from '../IState';
import { keywords } from '../../../tokens';
import states from '../states';
import IGroupState from '../IGroupState';
function processState(current: IState, token: string): IState {
    switch (token) {
        case keywords.inherits:
        case keywords.constructor:
        case keywords.implements:
        case keywords.partialPattern:
            return null;
        default:
            return null;
    }
}

function createState(): IGroupState {
    return {
        name: states.initial,
        group: [],
        previous: undefined
    }
}

export {
    processState,
    createState,
}
