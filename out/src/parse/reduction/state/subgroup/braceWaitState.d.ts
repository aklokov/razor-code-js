import { IState, ISubgroupConditionState, IBraceWaitState } from '../interfaces';
export declare function reduce(current: IBraceWaitState, token: string): IState;
export declare function createState(previous: ISubgroupConditionState): IBraceWaitState;
