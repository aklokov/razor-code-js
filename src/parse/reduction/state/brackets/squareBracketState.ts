import { IState, IStateWithContent, IBracketState } from '../interfaces';
import StateType from '../StateType';
import * as baseBracketFunctions from './baseBracketFunctions';

const openingBrackets = {
    '<': true,
    '(': true,
    '[': true,
    '{': true,
    '\'': true,
    '"': true
};
const openingBracket = '[';
const closingBracket = ']';

const reduce: (c: IBracketState, t: string) => IState
    = baseBracketFunctions.reducerCreation(openingBrackets, closingBracket);

const createState: (i: IStateWithContent, s: IState, t: boolean) => IBracketState
    = baseBracketFunctions.stateCreation(openingBracket, StateType.SquareBracket);

export {
    reduce,
    createState
}
