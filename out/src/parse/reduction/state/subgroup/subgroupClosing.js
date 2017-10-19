"use strict";
exports.__esModule = true;
var interfaces_1 = require("../interfaces");
var nodes_1 = require("../../../../nodes");
var functions = require("../stateFunctions");
var elseWaitState = require("./elseWaitState");
var cleanNodes_1 = require("./cleanNodes");
function createForEachNode(state) {
    var node = new nodes_1.ForEachNode(state.previous.content, cleanNodes_1.cleanNodes(state.children));
    return functions.group.addNode(state.previous.previous, node);
}
function createIfElseNode(state) {
    var node = new nodes_1.IfNode(state.previous.content, cleanNodes_1.cleanNodes(state.previous.nodes), cleanNodes_1.cleanNodes(state.children));
    return functions.group.addNode(state.previous.previous, node);
}
function closeSubgroup(state) {
    switch (state.previous.owner) {
        case interfaces_1.SubgroupOwner.foreach:
            return createForEachNode(state);
        case interfaces_1.SubgroupOwner["if"]:
            return elseWaitState.createState(state);
        case interfaces_1.SubgroupOwner["else"]:
            return createIfElseNode(state);
        default:
            throw new Error('owner type not supported');
    }
}
exports.closeSubgroup = closeSubgroup;
//# sourceMappingURL=subgroupClosing.js.map