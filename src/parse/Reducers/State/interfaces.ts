import { TokenAction } from '../actions';
import { RootNode, Node } from '../../../nodes';

interface IState {
    name: string;
}

interface IStateItem {
    reduce(current: IState, action: TokenAction): IState;
}

interface IGroupState extends IState {
    group: Node[];
}

interface IFinalState extends IState {
    rootNode: RootNode;
}

export {
    IState,
    IStateItem,
    IGroupState,
    IFinalState
}