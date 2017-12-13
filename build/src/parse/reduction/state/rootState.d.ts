import { IState, IRootState } from './interfaces';
export declare function reduce(current: IState, token: string): IState;
export declare function createState(): IRootState;
