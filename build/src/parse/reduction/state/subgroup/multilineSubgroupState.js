"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("../StateType");
const tokens_1 = require("../../../../tokens");
const nodes_1 = require("../../../../nodes");
const groupState = require("../groupState");
const subgroupClosing_1 = require("./subgroupClosing");
function noNodesSinceLastEol(current) {
    if (!current.children.length) {
        return true;
    }
    const lastNode = current.children[current.children.length - 1];
    return lastNode.type === nodes_1.NodeType.Eol || lastNode.type === nodes_1.NodeType.ForceEol;
}
function noContentSinceLastEol(current) {
    return noNodesSinceLastEol(current) && !current.content.trim().length;
}
function reduce(current, token) {
    if (token === tokens_1.keywords.eof) {
        return current.previous;
    }
    if (token === '}' && noContentSinceLastEol(current)) {
        return subgroupClosing_1.closeSubgroup(current);
    }
    return groupState.reduceGroupState(current, token);
}
exports.reduce = reduce;
function createState(subgroupState) {
    return Object.assign({}, subgroupState, { type: StateType_1.StateType.MultilineSubgroup });
}
exports.createState = createState;
//# sourceMappingURL=multilineSubgroupState.js.map