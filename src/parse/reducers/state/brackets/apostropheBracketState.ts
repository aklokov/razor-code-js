import { IState, IStateWithContent, IBracketState, IQuoteBracketState } from '../interfaces';
import StateType from '../StateType';
import * as baseBracketFunctions from './baseBracketFunctions';

const openingBracket = '\'';
const closingBracket = '\'';

const reduce: (c: IQuoteBracketState, t: string) => IState
    = baseBracketFunctions.quotesReducerCreation(closingBracket);

const createState: (i: IStateWithContent, s: IState, t: boolean) => IBracketState
    = baseBracketFunctions.stateCreation(openingBracket, StateType.ApostropheBracket);

export {
    reduce,
    createState
};
