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
var StateType_1 = require("../StateType");
var tokens_1 = require("../../../../tokens");
var nodes_1 = require("../../../../nodes");
var groupState = require("../groupState");
var subgroupClosing_1 = require("./subgroupClosing");
function noNodesSinceLastEol(current) {
    if (!current.children.length) {
        return true;
    }
    var lastNode = current.children[current.children.length - 1];
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
    return __assign({}, subgroupState, { type: StateType_1.StateType.MultilineSubgroup });
}
exports.createState = createState;
//# sourceMappingURL=multilineSubgroupState.js.map