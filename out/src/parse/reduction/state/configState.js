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
function backToRootState(currentState) {
    var node = new nodes_1.ConfigNode(currentState.token, currentState.content);
    return __assign({}, currentState.root, { children: currentState.root.children.concat([node]) });
}
function addToState(currentState, token) {
    return __assign({}, currentState, { content: currentState.content + token });
}
function reduce(current, token) {
    var currentState = current;
    switch (token) {
        case tokens_1.keywords.lineFeed:
        case tokens_1.keywords.eof:
            return backToRootState(currentState);
        default:
            return addToState(currentState, token);
    }
}
exports.reduce = reduce;
function createState(root, token) {
    var newState = {
        root: root,
        token: token,
        content: '',
        type: StateType_1.StateType.Config
    };
    return newState;
}
exports.createState = createState;
//# sourceMappingURL=configState.js.map