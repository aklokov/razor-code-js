import StateType from './StateType';
import { IState, IFinalState } from './interfaces';

import { RootNode, BasicNode } from '../../../nodes';
import { cleanNodes } from './subgroup/cleanNodes';
export function reduce(current: IState, token: string): IState {
    throw new Error('should be no more tokens after eof');
}

export function createState(nodes: BasicNode[]): IState {
    const state: IFinalState = {
        type: StateType.Final,
        rootNode: new RootNode(cleanNodes(nodes))
    };
    return state;
}
