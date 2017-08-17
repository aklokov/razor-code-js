"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../interfaces");
const StateType_1 = require("../StateType");
const tokens_1 = require("../../../../tokens");
const functions = require("../stateFunctions");
const nodes_1 = require("../../../../nodes");
const subgroupState = require("./subgroupState");
const cleanNodes_1 = require("./cleanNodes");
const getStateItem_1 = require("../../getStateItem");
function reduce(current, token) {
    if (token === ' ' || token === '\t') {
        return functions.content.addToken(current, token);
    }
    if (token === tokens_1.keywords.else && !current.elseFound) {
        const result = Object.assign({}, current, { elseFound: true, content: current.content + token });
        return result;
    }
    if (token === '{' && current.elseFound) {
        return subgroupState.createState(current.previous);
    }
    const node = new nodes_1.IfNode(current.previous.content, cleanNodes_1.cleanNodes(current.previous.nodes), []);
    let fallback = functions.group.addNode(current.previous.previous, node);
    const item = getStateItem_1.default(fallback.type);
    if (current.content) {
        fallback = item.reduce(fallback, current.content);
    }
    return item.reduce(fallback, token);
}
exports.reduce = reduce;
function createState(state) {
    const conditionState = Object.assign({}, state.previous, { owner: interfaces_1.SubgroupOwner.else, nodes: state.children });
    return {
        type: StateType_1.StateType.ElseWait,
        previous: conditionState,
        content: '',
        elseFound: false
    };
}
exports.createState = createState;
//# sourceMappingURL=elseWaitState.js.map