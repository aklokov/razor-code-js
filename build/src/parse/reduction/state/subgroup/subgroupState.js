"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("../StateType");
const tokens_1 = require("../../../../tokens");
const multiline = require("./multilineSubgroupState");
const functions = require("../stateFunctions");
const groupState = require("../groupState");
const subgroupClosing_1 = require("./subgroupClosing");
const nodesFunctions_1 = require("./nodesFunctions");
function reduce(current, token) {
    if (token === tokens_1.keywords.eof || token === '}') {
        const afterAdd = functions.content.tryAddLiteralNode(current);
        return subgroupClosing_1.closeSubgroup(afterAdd);
    }
    if (token === tokens_1.keywords.eol || token === tokens_1.keywords.lineFeed) {
        const afterAdd = groupState.reduceGroupState(current, token);
        return multiline.createState(afterAdd);
    }
    const afterAdd = groupState.reduceGroupState(current, token);
    if (afterAdd.children.some(nodesFunctions_1.isMultiline)) {
        return multiline.createState(afterAdd);
    }
    return afterAdd;
}
exports.reduce = reduce;
function createState(previous) {
    return {
        type: StateType_1.StateType.Subgroup,
        previous,
        content: '',
        hasContent: false,
        children: []
    };
}
exports.createState = createState;
//# sourceMappingURL=subgroupState.js.map