import { states, IState, IFinalState, TokenAction } from './import';
import { RootNode, Node } from '../../Nodes/export';

function reduce(current: IState, action: TokenAction): IState {
    throw new Error('should be no more tokens after eof');
}

function createState(nodes: Node[]): IState {
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
