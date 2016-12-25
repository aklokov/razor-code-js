import * as stateItems from './State/export';
import { IStateItem } from './State/interfaces';
import states from './State/states';

function getStateItem(stateName: string): IStateItem {
    switch (stateName) {
        case states.root:
            return stateItems.rootState;
        case states.simpleConfig:
            return stateItems.simpleConfigState;
        default:
            throw new Error('unsupported state');
    }
}

export default getStateItem;
