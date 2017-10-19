import { IState, IStateWithContent, IBracketState } from '../interfaces';
declare const reduce: (c: IBracketState, t: string) => IState;
declare const createState: (i: IStateWithContent, s: IState, t: boolean) => IBracketState;
export { reduce, createState };
