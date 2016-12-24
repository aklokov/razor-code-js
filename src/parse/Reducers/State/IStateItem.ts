import IState from './IState';
import { TokenAction } from '../actions';

interface IStateItem {
    reduce(current: IState, action: TokenAction): IState;
}

export default IStateItem;
