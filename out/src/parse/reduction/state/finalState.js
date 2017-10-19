"use strict";
exports.__esModule = true;
var StateType_1 = require("./StateType");
var nodes_1 = require("../../../nodes");
var cleanNodes_1 = require("./subgroup/cleanNodes");
function reduce(current, token) {
    throw new Error('should be no more tokens after eof');
}
exports.reduce = reduce;
function createState(nodes) {
    var state = {
        type: StateType_1.StateType.Final,
        rootNode: new nodes_1.RootNode(cleanNodes_1.cleanNodes(nodes))
    };
    return state;
}
exports.createState = createState;
//# sourceMappingURL=finalState.js.map