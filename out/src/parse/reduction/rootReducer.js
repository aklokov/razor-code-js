"use strict";
exports.__esModule = true;
var getStateItem_1 = require("./getStateItem");
var StateType_1 = require("./state/StateType");
var rootState = require("./state/rootState");
var tokens_1 = require("../../tokens");
function rootReducer(current, token) {
    current = current || rootState.createState();
    token = tokens_1.replacements[token] || token;
    if (token === tokens_1.keywords.eof) {
        var nextState = current;
        while (nextState.type !== StateType_1.StateType.Final) {
            nextState = getStateItem_1["default"](nextState.type).reduce(nextState, token);
        }
        return nextState;
    }
    return getStateItem_1["default"](current.type).reduce(current, token);
}
;
exports["default"] = rootReducer;
//# sourceMappingURL=rootReducer.js.map