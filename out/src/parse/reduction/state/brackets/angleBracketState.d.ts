import { IState, IStateWithContent, IBracketState, IAngleBracketState } from '../interfaces';
declare function reduce(current: IAngleBracketState, token: string): IState;
declare const createState: (i: IStateWithContent, s: IState, t: boolean) => IBracketState;
export { reduce, createState };
