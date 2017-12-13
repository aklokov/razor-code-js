"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("./StateType");
const tokens_1 = require("../../../tokens");
const nodes_1 = require("../../../nodes");
const functions = require("./stateFunctions");
const bracketMain = require("./brackets/bracketMain");
function setFlag(current, previous) {
    return Object.assign({}, current, { previous, addedNode: true });
}
function createNodeWithoutIndent(current) {
    const node = new nodes_1.PartialNode(current.generatorName, current.content, '');
    const previous = functions.group.addNode(current.previous, node);
    return setFlag(current, previous);
}
function tryCreateIndentNode(current) {
    const nodes = current.previous.children;
    const literal = nodes[nodes.length - 1];
    if (literal.content.trim().length) {
        return createNodeWithoutIndent(current);
    }
    const node = new nodes_1.PartialNode(current.generatorName, current.content, literal.content);
    const children = [...nodes.slice(0, nodes.length - 1), node];
    const previous = Object.assign({}, current.previous, { children });
    return setFlag(current, previous);
}
function reduceStage1(current, token) {
    if (token !== '(') {
        return functions.content.addToken(current, token);
    }
    const newState = Object.assign({}, current, { content: '', generatorName: current.content.trim() });
    return newState;
}
exports.reduceStage1 = reduceStage1;
function closingCallParms(current) {
    if (!current.generatorName.length) {
        return setFlag(current, current.previous);
    }
    const nodes = current.previous.children;
    if (nodes.length) {
        if (nodes[nodes.length - 1].type === nodes_1.NodeType.Literal) {
            if (nodes.length === 1) {
                return tryCreateIndentNode(current);
            }
            const prevNode = nodes[nodes.length - 2];
            if (prevNode.type === nodes_1.NodeType.Eol || prevNode.type === nodes_1.NodeType.ForceEol) {
                return tryCreateIndentNode(current);
            }
        }
    }
    return createNodeWithoutIndent(current);
}
function reduceStage2(current, token) {
    if (tokens_1.openingBracketsMap.has(token)) {
        return bracketMain.createTopBracketState(current, current, token);
    }
    if (token === ')') {
        return closingCallParms(current);
    }
    return functions.content.addToken(current, token);
}
exports.reduceStage2 = reduceStage2;
function reduce(current, token) {
    if (token === tokens_1.keywords.eof || token === ']' || current.addedNode) {
        return current.previous;
    }
    if (!current.generatorName) {
        return reduceStage1(current, token);
    }
    return reduceStage2(current, token);
}
exports.reduce = reduce;
function createState(previous) {
    const newState = {
        content: '',
        generatorName: null,
        previous,
        type: StateType_1.StateType.Partial,
        addedNode: false
    };
    return newState;
}
exports.createState = createState;
//# sourceMappingURL=partialState.js.map