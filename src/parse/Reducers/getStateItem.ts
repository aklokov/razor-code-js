import * as stateItems from './state';
import { IStateItem } from './state/interfaces';
import states from './state/states';

function getStateItem(stateName: string): IStateItem {
    switch (stateName) {
        case states.root:
            return stateItems.rootState;
        case states.simpleConfig:
            return stateItems.configState;
        case states.final:
            return stateItems.finalState;
        default:
            throw new Error('unsupported state');
    }
}

export default getStateItem;
