import { IState, IStateWithContent, IBracketState } from '../interfaces';
import StateType from '../StateType';
import * as baseBracketFunctions from './baseBracketFunctions';
import { openingBracketsMap } from '../../../tokens';

const openingBracket = '{';
const closingBracket = '}';

const reduce: (c: IBracketState, t: string) => IState
    = baseBracketFunctions.reducerCreation(openingBracketsMap, closingBracket);

const createState: (i: IStateWithContent, s: IState, t: boolean) => IBracketState
    = baseBracketFunctions.stateCreation(openingBracket, StateType.CurlyBrace);

export {
    reduce,
    createState
}
