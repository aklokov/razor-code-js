"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var StateType_1 = require("./StateType");
var tokens_1 = require("../../../tokens");
var nodes_1 = require("../../../nodes");
var functions = require("./stateFunctions");
var bracketMain = require("./brackets/bracketMain");
function setFlag(current, previous) {
    return __assign({}, current, { previous: previous, addedNode: true });
}
function createNodeWithoutIndent(current) {
    var node = new nodes_1.PartialNode(current.generatorName, current.content, '');
    var previous = functions.group.addNode(current.previous, node);
    return setFlag(current, previous);
}
function tryCreateIndentNode(current) {
    var nodes = current.previous.children;
    var literal = nodes[nodes.length - 1];
    if (literal.content.trim().length) {
        return createNodeWithoutIndent(current);
    }
    var node = new nodes_1.PartialNode(current.generatorName, current.content, literal.content);
    var children = nodes.slice(0, nodes.length - 1).concat([node]);
    var previous = __assign({}, current.previous, { children: children });
    return setFlag(current, previous);
}
function reduceStage1(current, token) {
    if (token !== '(') {
        return functions.content.addToken(current, token);
    }
    var newState = __assign({}, current, { content: '', generatorName: current.content.trim() });
    return newState;
}
exports.reduceStage1 = reduceStage1;
function closingCallParms(current) {
    if (!current.generatorName.length) {
        return setFlag(current, current.previous);
    }
    var nodes = current.previous.children;
    if (nodes.length) {
        if (nodes[nodes.length - 1].type === nodes_1.NodeType.Literal) {
            if (nodes.length === 1) {
                return tryCreateIndentNode(current);
            }
            var prevNode = nodes[nodes.length - 2];
            if (prevNode.type === nodes_1.NodeType.Eol || prevNode.type === nodes_1.NodeType.ForceEol) {
                return tryCreateIndentNode(current);
            }
        }
    }
    return createNodeWithoutIndent(current);
}
function reduceStage2(current, token) {
    if (tokens_1.openingBracketsMap[token]) {
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
    var newState = {
        content: '',
        generatorName: null,
        previous: previous,
        type: StateType_1.StateType.Partial,
        addedNode: false
    };
    return newState;
}
exports.createState = createState;
//# sourceMappingURL=partialState.js.map