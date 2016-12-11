import IState from './IState';

interface IStateItem {
    processState(prev: IState, token: string): IState;
}

export default IStateItem;
