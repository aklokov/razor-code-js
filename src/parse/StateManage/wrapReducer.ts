import { IAction, IReduce, IStateManager } from './interfaces';
import StateManager from './StateManager';
import * as deepFreeze from 'deep-freeze';

function wrapReducer<T>(reducer: IReduce<T>) : IReduce<T>{
    const wrapper: IReduce<T> = function(prev:T, action: IAction):T{
        const state = reducer(this.state, action);
        const serialized = JSON.stringify(state);
        const deserialized = JSON.parse(serialized);
        return deepFreeze(deserialized);
    }

    return wrapper;
}

export default wrapReducer;