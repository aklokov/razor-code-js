import { RootNode, BasicNode } from '../../../nodes';
import { StateType } from './StateType';

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

export interface ICommentState extends IState {
    starEncountered: boolean;
    content: string;
    previous: IGroupState;
}

export interface ISubgroupConditionState extends IChildState {
    owner: SubgroupOwner;
    nodes: BasicNode[];
}

export enum SubgroupOwner {
    foreach = 0,
    if,
    else
};

export interface IBraceWaitState extends IState {
    content: string;
    previous: ISubgroupConditionState;
}

export interface IElseWaitState extends IState {
    content: string;
    elseFound: boolean;
    previous: ISubgroupConditionState;
}

export interface IGroupState extends IState {
    content: string;
    hasContent: boolean;
    children: BasicNode[];
}

export interface IRootState extends IGroupState {
}

export interface ISubgroupState extends IGroupState {
    previous: ISubgroupConditionState;
}

export interface IFinalState extends IState {
    rootNode: RootNode;
}

export interface IConfigState extends IState {
    content: string;
    token: string;
    root: IRootState;
}

export interface IPartialState extends IState {
    content: string;
    generatorName: string;
    previous: IGroupState;
}
