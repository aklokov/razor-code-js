"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../interfaces");
const nodes_1 = require("../../../../nodes");
const functions = require("../stateFunctions");
const elseWaitState = require("./elseWaitState");
const cleanNodes_1 = require("./cleanNodes");
function createForEachNode(state) {
    const node = new nodes_1.ForEachNode(state.previous.content, cleanNodes_1.cleanNodes(state.children));
    return functions.group.addNode(state.previous.previous, node);
}
function createIfElseNode(state) {
    const node = new nodes_1.IfNode(state.previous.content, cleanNodes_1.cleanNodes(state.previous.nodes), cleanNodes_1.cleanNodes(state.children));
    return functions.group.addNode(state.previous.previous, node);
}
function closeSubgroup(state) {
    switch (state.previous.owner) {
        case interfaces_1.SubgroupOwner.foreach:
            return createForEachNode(state);
        case interfaces_1.SubgroupOwner.if:
            return elseWaitState.createState(state);
        case interfaces_1.SubgroupOwner.else:
            return createIfElseNode(state);
        default:
            throw new Error('owner type not supported');
    }
}
exports.closeSubgroup = closeSubgroup;
//# sourceMappingURL=subgroupClosing.js.map