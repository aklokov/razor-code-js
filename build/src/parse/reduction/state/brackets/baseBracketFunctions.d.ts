import { IState, IStateWithContent, IBracketState } from '../interfaces';
import { StateType } from '../StateType';
export declare function goBack(current: IBracketState, token: string): IState;
export declare function reducerCreation(openingBrackets: Map<string, boolean>, closingBracket: string): (c: IBracketState, t: string) => IState;
export declare function quotesReducerCreation(closingBracket: string): (c: IBracketState, t: string) => IState;
export declare function stateCreation(openingBracket: string, type: StateType): (i: IStateWithContent, s: IState, t: boolean) => IBracketState;
