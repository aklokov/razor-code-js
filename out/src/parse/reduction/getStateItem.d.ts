import { IStateItem } from './state/interfaces';
import { StateType } from './state/StateType';
declare function getStateItem(type: StateType): IStateItem;
export default getStateItem;
