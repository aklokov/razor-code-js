"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("./StateType");
const nodes_1 = require("../../../nodes");
const cleanNodes_1 = require("./subgroup/cleanNodes");
function reduce(current, token) {
    throw new Error('should be no more tokens after eof');
}
exports.reduce = reduce;
function createState(nodes) {
    const state = {
        type: StateType_1.StateType.Final,
        rootNode: new nodes_1.RootNode(cleanNodes_1.cleanNodes(nodes))
    };
    return state;
}
exports.createState = createState;
//# sourceMappingURL=finalState.js.map