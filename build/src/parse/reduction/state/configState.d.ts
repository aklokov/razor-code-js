import { IState, IRootState, IConfigState } from './interfaces';
export declare function reduce(current: IState, token: string): IState;
export declare function createState(root: IRootState, token: string): IConfigState;
