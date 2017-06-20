import states from './states';
import { IState, IFinalState } from './interfaces';
import { TokenAction } from '../actions';

import { RootNode, BasicNode } from '../../../nodes';

function reduce(current: IState, action: TokenAction): IState {
    throw new Error('should be no more tokens after eof');
}

function createState(nodes: BasicNode[]): IState {
    const state: IFinalState = {
        name: states.final,
        rootNode: new RootNode(nodes)
    };
    return state;
}

export {
    reduce,
    createState,
}
