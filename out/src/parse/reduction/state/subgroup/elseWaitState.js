"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var interfaces_1 = require("../interfaces");
var StateType_1 = require("../StateType");
var tokens_1 = require("../../../../tokens");
var functions = require("../stateFunctions");
var nodes_1 = require("../../../../nodes");
var subgroupState = require("./subgroupState");
var cleanNodes_1 = require("./cleanNodes");
function reduce(current, token) {
    if (token === ' ' || token === '\t') {
        return functions.content.addToken(current, token);
    }
    if (token === tokens_1.keywords["else"] && !current.elseFound) {
        var result = __assign({}, current, { elseFound: true, content: current.content + token });
        return result;
    }
    if (token === '{' && current.elseFound) {
        return subgroupState.createState(current.previous);
    }
    var node = new nodes_1.IfNode(current.previous.content, cleanNodes_1.cleanNodes(current.previous.nodes), []);
    var fallback = functions.group.addNode(current.previous.previous, node);
    var content = token === tokens_1.keywords.eof ? current.content : current.content + token;
    return functions.content.addToken(fallback, content);
}
exports.reduce = reduce;
function createState(state) {
    var conditionState = __assign({}, state.previous, { owner: interfaces_1.SubgroupOwner["else"], nodes: state.children });
    return {
        type: StateType_1.StateType.ElseWait,
        previous: conditionState,
        content: '',
        elseFound: false
    };
}
exports.createState = createState;
//# sourceMappingURL=elseWaitState.js.map