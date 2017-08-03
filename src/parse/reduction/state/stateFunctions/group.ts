import { IGroupState } from '../interfaces';
import { BasicNode } from '@nodes';

export function addNode(current: IGroupState, node: BasicNode): IGroupState {
    return {
        ...current,
        hasContent: true,
        content: '',
        children: [...current.children, node]
    };
}
