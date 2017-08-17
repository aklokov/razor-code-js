import { IState, ISubgroupState } from '../interfaces';
export declare function reduce(current: ISubgroupState, token: string): IState;
export declare function createState(subgroupState: ISubgroupState): ISubgroupState;
