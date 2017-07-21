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

export interface IBracketState extends IState {
    topBracket: boolean;
    contentState: IStateWithContent;
    previous: IState;
}

export interface IAngleBracketState extends IBracketState {
    passedFirstChar: boolean;
}

export interface IQuoteBracketState extends IBracketState {
    escaped: boolean;
}


export interface IChildState extends IState {
    content: string;
    previous: IGroupState;
}

export interface IGroupState extends IState {
    content: string;
    hasContent: boolean;
    children: BasicNode[];
}

export interface IRootState extends IGroupState {
}

export interface IFinalState extends IState {
    rootNode: RootNode;
}

export interface IConfigState extends IState {
    content: string;
    token: string;
    root: IRootState;
}
