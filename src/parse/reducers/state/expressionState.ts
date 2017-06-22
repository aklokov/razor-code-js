import { IState, IGroupState, IChildState } from './interfaces';
import StateType from './StateType';
import { keywords } from '../../tokens';
import * as functions from './stateFunctions';

export function reduce(current: IChildState, token: string): IState {
    switch (token) {
        case keywords.eof:
            return {
                ...current.previous
            };
        default:
            return functions.content.addToken(current, token);
    }

}

export function createState(previous: IGroupState): IChildState {
    return {
        type: StateType.Expression,
        previous,
        content: ''
    };
}
