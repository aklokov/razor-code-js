import * as initial from './State/stateItems/initial';
import IStateItem from './State/IStateItem';

function getStateItem(stateName: string): IStateItem {
    return initial;
}

export default getStateItem;
