import { StateType } from './StateType';
import { IState, IGroupState, IPartialState } from './interfaces';
import { keywords, openingBracketsMap } from '../../../tokens';
import { PartialNode, NodeType, ContentNode } from '../../../nodes';
import * as functions from './stateFunctions';
import * as bracketMain from './brackets/bracketMain';

function setFlag(current: IPartialState, previous: IGroupState): IPartialState {
  return {
    ...current,
    previous,
    addedNode: true
  };
}

function createNodeWithoutIndent(current: IPartialState): IPartialState {
  const node = new PartialNode(current.generatorName, current.content, '');
  const previous = functions.group.addNode(current.previous, node);
  return setFlag(current, previous);
}

function tryCreateIndentNode(current: IPartialState): IPartialState {
  const nodes = current.previous.children;
  const literal = nodes[nodes.length - 1] as ContentNode;
  if (literal.content.trim().length) {
    return createNodeWithoutIndent(current);
  }

  const node = new PartialNode(current.generatorName, current.content, literal.content);
  const children = [...nodes.slice(0, nodes.length - 1), node];
  const previous = {
    ...current.previous,
    children
  };
  return setFlag(current, previous);
}

export function reduceStage1(current: IPartialState, token: string): IState {
  if (token !== '(') {
    return functions.content.addToken(current, token);
  }

  const newState: IPartialState = {
    ...current,
    content: '',
    generatorName: current.content.trim()
  };

  return newState;
}

function closingCallParms(current: IPartialState): IPartialState {
  if (!current.generatorName.length) {
    return setFlag(current, current.previous);
  }

  const nodes = current.previous.children;
  if (nodes.length) {
    if (nodes[nodes.length - 1].type === NodeType.Literal) {
      if (nodes.length === 1) {
        return tryCreateIndentNode(current);
      }

      const prevNode = nodes[nodes.length - 2];
      if (prevNode.type === NodeType.Eol || prevNode.type === NodeType.ForceEol) {
        return tryCreateIndentNode(current);
      }
    }
  }

  return createNodeWithoutIndent(current);
}

export function reduceStage2(current: IPartialState, token: string): IState {
  if (openingBracketsMap.has(token)) {
    return bracketMain.createTopBracketState(current, current, token);
  }

  if (token === ')') {
    return closingCallParms(current);
  }

  return functions.content.addToken(current, token);
}

export function reduce(current: IPartialState, token: string): IState {
  if (token === keywords.eof || token === ']' || current.addedNode) {
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
    type: StateType.Partial,
    addedNode: false
  };

  return newState;
}
