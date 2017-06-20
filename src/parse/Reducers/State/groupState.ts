import { IGroupState } from './interfaces';
import { BasicNode } from '../../../nodes';

function backToGroupState(prev: IGroupState, node: BasicNode): IGroupState {
    return {
        ...prev,
        group: [...prev.group, node]
    };
}

export {
    backToGroupState
}
