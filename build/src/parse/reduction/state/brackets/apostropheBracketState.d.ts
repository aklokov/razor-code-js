import { IState, IStateWithContent, IBracketState, IQuoteBracketState } from '../interfaces';
declare const reduce: (c: IQuoteBracketState, t: string) => IState;
declare const createState: (i: IStateWithContent, s: IState, t: boolean) => IBracketState;
export { reduce, createState };
