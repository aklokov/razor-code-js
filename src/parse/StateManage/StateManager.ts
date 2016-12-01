import IReduce from './IReduce';
import IAction from './IAction';

class StateManager<T>{
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
