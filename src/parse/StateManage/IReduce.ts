import IAction from './IAction';

interface IReduce<T> {
    (prev: T, action: IAction): T;
}

export default IReduce;
