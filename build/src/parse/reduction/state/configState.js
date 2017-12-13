"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("./StateType");
const tokens_1 = require("../../../tokens");
const nodes_1 = require("../../../nodes");
function backToRootState(currentState) {
    const node = new nodes_1.ConfigNode(currentState.token, currentState.content);
    return Object.assign({}, currentState.root, { children: [...currentState.root.children, node] });
}
function addToState(currentState, token) {
    return Object.assign({}, currentState, { content: currentState.content + token });
}
function reduce(current, token) {
    const currentState = current;
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
    const newState = {
        root,
        token,
        content: '',
        type: StateType_1.StateType.Config
    };
    return newState;
}
exports.createState = createState;
//# sourceMappingURL=configState.js.map