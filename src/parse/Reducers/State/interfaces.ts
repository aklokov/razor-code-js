import { TokenAction } from '../actions';
import { RootNode, BasicNode } from '../../../nodes';

interface IState {
    name: string;
}

interface IStateItem {
    reduce(current: IState, action: TokenAction): IState;
}

interface IGroupState extends IState {
    hasContent: boolean;
    content: string[];
    children: BasicNode[];
}

interface IRootState extends IGroupState {
}

interface IFinalState extends IState {
    rootNode: RootNode;
}

interface ISimpleConfigState extends IState {
    content: string[];
    token: string;
    root: IRootState;
}

export {
    IState,
    IStateItem,
    IGroupState,
    IFinalState,
    IRootState,
    ISimpleConfigState
}
