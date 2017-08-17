"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("../StateType");
const nodes_1 = require("../../../../nodes");
const explicit = require("./explicitContentReducer");
function reduce(current, token) {
    return explicit.reduce(current, token, '}', nodes_1.NodeType.Injection);
}
exports.reduce = reduce;
function createState(previous) {
    return {
        type: StateType_1.StateType.Injection,
        previous,
        content: ''
    };
}
exports.createState = createState;
//# sourceMappingURL=injectionState.js.map