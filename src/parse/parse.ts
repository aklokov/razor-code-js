import { IReduce, IStateManager } from './StateManage/interfaces';
import StateManager from './StateManage/StateManager';
import IRootState from './State/IRootState';
import DocumentNode from './Nodes/DocumentNode';
import rootReducer from './Reducers/rootReducer';
import parseImpl from './parseImpl';

export default function parse(source: string): DocumentNode {
    const manager = new StateManager<IRootState>(rootReducer);
    return parseImpl(manager, source);
}
