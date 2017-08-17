import { IState, ISubgroupState, IElseWaitState } from '../interfaces';
export declare function reduce(current: IElseWaitState, token: string): IState;
export declare function createState(state: ISubgroupState): IElseWaitState;
