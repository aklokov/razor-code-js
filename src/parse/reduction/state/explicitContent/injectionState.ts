import { StateType } from '../StateType';
import { IState, IGroupState, IChildState } from '../interfaces';
import { NodeType } from '../../../../nodes';
import * as explicit from './explicitContentReducer';

export function reduce(current: IChildState, token: string): IState {
    return explicit.reduce(current, token, '}', NodeType.Injection);
}

export function createState(previous: IGroupState): IChildState {
    return {
        type: StateType.Injection,
        previous,
        content: ''
    };
}
