import { IState, IStateWithContent } from '../interfaces';
export declare function createTopBracketState(contentState: IStateWithContent, previous: IState, token: string): IState;
export declare function createBracketState(contentState: IStateWithContent, previous: IState, token: string): IState;
