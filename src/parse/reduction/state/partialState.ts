import { StateType } from './StateType';
import { IState, IGroupState, IPartialState } from './interfaces';
import { keywords, openingBracketsMap } from '../../../tokens';
import { PartialNode } from '../../../nodes';
import * as functions from './stateFunctions';
import * as bracketMain from './brackets/bracketMain';

export function reduceStage1(current: IPartialState, token: string): IState {
    if (token !== '(') {
        return functions.content.addToken(current.previous, keywords.at);
    }

    const newState: IPartialState = {
        ...current,
        content: '',
        generatorName: current.content.trim()
    };

    return newState;
}

export function reduceStage2(current: IPartialState, token: string): IState {
    if (openingBracketsMap[token]) {
        return bracketMain.createTopBracketState(current, current, token);
    }

    if (token === ')') {
        if (!current.generatorName.length) {
            return current.previous;
        }
        const node = new PartialNode(current.generatorName, current.content);
        return functions.group.addNode(current.previous, node);
    }

    return functions.content.addToken(current.previous, keywords.at);
}

export function reduce(current: IPartialState, token: string): IState {
    if (token === keywords.eof || token === ']') {
        return current.previous;
    }

    if (!current.generatorName) {
        return reduceStage1(current, token);
    }

    return reduceStage2(current, token);
}

export function createState(previous: IGroupState): IPartialState {
    const newState: IPartialState = {
        content: '',
        generatorName: null,
        previous,
        type: StateType.Config
    };

    return newState;
}
