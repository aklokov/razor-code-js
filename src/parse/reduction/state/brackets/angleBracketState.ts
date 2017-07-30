import { IState, IStateWithContent, IBracketState, IAngleBracketState } from '../interfaces';
import { StateType } from '../StateType';
import * as baseBracketFunctions from './baseBracketFunctions';

const openingBrackets = {
    '<': true
};
const openingBracket = '<';
const closingBracket = '>';

const baseReduce: (c: IBracketState, t: string) => IState
    = baseBracketFunctions.reducerCreation(openingBrackets, closingBracket);

function reduce(current: IAngleBracketState, token: string): IState {
    if (current.passedFirstChar) {
        return baseReduce(current, token);
    }

    if (token === ' ') {
        return baseBracketFunctions.goBack(current, token);
    }

    const passed = {
        ...current,
        passedFirstChar: true
    };

    return baseReduce(passed, token);
}

const createState: (i: IStateWithContent, s: IState, t: boolean) => IBracketState
    = baseBracketFunctions.stateCreation(openingBracket, StateType.AngleBracket);

export {
    reduce,
    createState
}
