import { IState, IGroupState, IChildState } from './interfaces';
export declare function reduce(current: IChildState, token: string): IState;
export declare function createState(previous: IGroupState): IChildState;
