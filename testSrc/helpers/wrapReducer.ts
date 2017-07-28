
import * as deepFreeze from 'deep-freeze';
import { IState } from '../../src/parse/reduction/state/interfaces';

function protect<T>(obj: T): T {
    const serialized = JSON.stringify(obj);
    const deserialized = JSON.parse(serialized);
    return deepFreeze(deserialized);
}

function wrapReducer(reducer: (c: IState, t: string) => IState): (c: IState, t: string) => IState {
    return function wrapper(prev: IState, token: string): IState {
        const newState = reducer(prev, token);
        return protect(newState);
    };
}

export default wrapReducer;
