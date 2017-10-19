import { IState, IGroupState, IPartialState } from './interfaces';
export declare function reduceStage1(current: IPartialState, token: string): IState;
export declare function reduceStage2(current: IPartialState, token: string): IState;
export declare function reduce(current: IPartialState, token: string): IState;
export declare function createState(previous: IGroupState): IPartialState;
