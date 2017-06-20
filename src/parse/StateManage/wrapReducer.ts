import { IAction, IReduce } from './interfaces';
import * as deepFreeze from 'deep-freeze';

function protect<T>(obj: T): T {
    const serialized = JSON.stringify(obj);
    const deserialized = JSON.parse(serialized);
    return deepFreeze(deserialized);
}

function wrapReducer<T>(reducer: IReduce<T>): IReduce<T> {
    const wrapper: IReduce<T> = function (prev: T, action: IAction): T {
        const newState = reducer(prev, protect(action));
        return protect(newState);
    };

    return wrapper;
}

export default wrapReducer;
