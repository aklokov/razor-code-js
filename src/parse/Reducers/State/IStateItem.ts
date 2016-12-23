import IState from './IState';

interface IStateItem {
    processState(current: IState, token: string): IState;
}

export default IStateItem;
