import { RootNode } from '../src/nodes';
import rootReducer from '../src/parse/reduction/rootReducer';
import StateManager from '../src/parse/StateManage/StateManager';
import wrapReducer from '../src/parse/StateManage/wrapReducer';
import { IState } from '../src/parse/reduction/state/interfaces';
import parseImpl from '../src/parse/parseImpl';

export default function wrappedParser(source: string): RootNode {
    const reducer = wrapReducer(rootReducer);
    const manager = new StateManager<IState>(reducer);
    return parseImpl(manager, source);
}
