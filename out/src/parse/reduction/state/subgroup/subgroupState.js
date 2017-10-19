"use strict";
exports.__esModule = true;
var StateType_1 = require("../StateType");
var tokens_1 = require("../../../../tokens");
var multiline = require("./multilineSubgroupState");
var functions = require("../stateFunctions");
var groupState = require("../groupState");
var subgroupClosing_1 = require("./subgroupClosing");
var nodesFunctions_1 = require("./nodesFunctions");
function reduce(current, token) {
    if (token === tokens_1.keywords.eof || token === '}') {
        var afterAdd_1 = functions.content.tryAddLiteralNode(current);
        return subgroupClosing_1.closeSubgroup(afterAdd_1);
    }
    if (token === tokens_1.keywords.eol || token === tokens_1.keywords.lineFeed) {
        var afterAdd_2 = groupState.reduceGroupState(current, token);
        return multiline.createState(afterAdd_2);
    }
    var afterAdd = groupState.reduceGroupState(current, token);
    if (afterAdd.children.some(nodesFunctions_1.isMultiline)) {
        return multiline.createState(afterAdd);
    }
    return afterAdd;
}
exports.reduce = reduce;
function createState(previous) {
    return {
        type: StateType_1.StateType.Subgroup,
        previous: previous,
        content: '',
        hasContent: false,
        children: []
    };
}
exports.createState = createState;
//# sourceMappingURL=subgroupState.js.map