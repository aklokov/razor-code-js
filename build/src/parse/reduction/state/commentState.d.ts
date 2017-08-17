import { IState, IGroupState, ICommentState } from './interfaces';
export declare function reduce(current: ICommentState, token: string): IState;
export declare function createState(previous: IGroupState): ICommentState;
