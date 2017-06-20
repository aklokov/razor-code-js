import * as stateItems from './State';
import { IStateItem } from './State/interfaces';
import states from './State/states';

function getStateItem(stateName: string): IStateItem {
    switch (stateName) {
        case states.root:
            return stateItems.rootState;
        case states.simpleConfig:
            return stateItems.simpleConfigState;
        case states.final:
            return stateItems.finalState;
        default:
            throw new Error('unsupported state');
    }
}

export default getStateItem;
