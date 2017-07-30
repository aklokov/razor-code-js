import { IState, ISubgroupState, ISubgroupConditionState, IElseWaitState, SubgroupOwner } from '../interfaces';
import { StateType } from '../StateType';
import { keywords } from '../../../../tokens';
import * as functions from '../stateFunctions';
import { IfNode } from '../../../../nodes';
import * as subgroupState from './subgroupState';
import { cleanNodes } from './cleanNodes';

export function reduce(current: IElseWaitState, token: string): IState {
    if (token === ' ' || token === '\t') {
        return functions.content.addToken(current, token);
    }

    if (token === keywords.else && !current.elseFound) {
        const result: IElseWaitState = {
            ...current,
            elseFound: true,
            content: current.content + token
        };
        return result;
    }

    if (token === '{' && current.elseFound) {
        return subgroupState.createState(current.previous);
    }

    const node = new IfNode(current.previous.content, cleanNodes(current.previous.nodes), []);
    const fallback = functions.group.addNode(current.previous.previous, node);
    const content = token === keywords.eof ? current.content : current.content + token;
    return functions.content.addToken(fallback, content);
}

export function createState(state: ISubgroupState): IElseWaitState {
    const conditionState: ISubgroupConditionState = {
        ...state.previous,
        owner: SubgroupOwner.else,
        nodes: state.children
    };
    return {
        type: StateType.ElseWait,
        previous: conditionState,
        content: '',
        elseFound: false
    };
}
