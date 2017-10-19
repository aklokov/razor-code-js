"use strict";
exports.__esModule = true;
var StateType_1 = require("../StateType");
var nodes_1 = require("../../../../nodes");
var explicit = require("./explicitContentReducer");
function reduce(current, token) {
    return explicit.reduce(current, token, ')', nodes_1.NodeType.Expression);
}
exports.reduce = reduce;
function createState(previous) {
    return {
        type: StateType_1.StateType.ExplicitExpression,
        previous: previous,
        content: ''
    };
}
exports.createState = createState;
//# sourceMappingURL=explicitExpressionState.js.map