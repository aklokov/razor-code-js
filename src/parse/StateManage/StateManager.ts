import { IAction, IReduce, IStateManager } from './interfaces';

class StateManager<T> implements IStateManager<T> {
    private state: T;
    public constructor(private reducer: IReduce<T>) {
        this.state = reducer(undefined, { type: '@@INIT' });
    }

    public dispatch(action: IAction): void {
        this.state = this.reducer(this.state, action);
    }

    public getState(): T {
        return this.state;
    }
}

export default StateManager;
