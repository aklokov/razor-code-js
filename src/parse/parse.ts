import StateManager from './StateManage/StateManager';
import { IState } from './reduction/state/interfaces';
import { RootNode } from '../nodes';
import rootReducer from './reduction/rootReducer';
import parseImpl from './parseImpl';

export default function parse(source: string): RootNode {
    const manager = new StateManager<IState>(rootReducer);
    return parseImpl(manager, source);
}
