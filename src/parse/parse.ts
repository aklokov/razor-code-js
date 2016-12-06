import StateManager from './StateManage/StateManager';
import IRoot from './Reducers/IRoot';
import DocumentNode from './Nodes/DocumentNode';
import rootReducer from './Reducers/rootReducer';
import parseImpl from './parseImpl';

export default function parse(source: string): DocumentNode {
    const manager = new StateManager<IRoot>(rootReducer);
    return parseImpl(manager, source);
}
