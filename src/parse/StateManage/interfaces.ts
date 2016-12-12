interface IAction {
    type: string;
}

interface IReduce<T> {
    (prev: T, action: IAction): T;
}

interface IStateManager<T>{
    dispatch(action: IAction): void;
    getState(): T;
}

export {
    IAction,
    IReduce,
    IStateManager
}
