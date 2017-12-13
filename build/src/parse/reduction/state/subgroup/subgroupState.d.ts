import { IState, ISubgroupConditionState, ISubgroupState } from '../interfaces';
export declare function reduce(current: ISubgroupState, token: string): IState;
export declare function createState(previous: ISubgroupConditionState): ISubgroupState;
