import { RootNode, BasicNode } from '../../../nodes';
import StateType from './StateType';

export interface IState {
    type: StateType;
}

export interface IStateItem {
    reduce(current: IState, token: string): IState;
}

export interface IStateWithContent extends IState {
    content: string;
}

export interface IChildState extends IState {
    content: string;
    previous: IGroupState;
}

export interface IGroupState extends IStateWithContent {
    hasContent: boolean;
    children: BasicNode[];
}

export interface IRootState extends IGroupState {
}

export interface IFinalState extends IState {
    rootNode: RootNode;
}

export interface ISimpleConfigState extends IStateWithContent {
    token: string;
    root: IRootState;
}
