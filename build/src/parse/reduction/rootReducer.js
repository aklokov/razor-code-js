"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStateItem_1 = require("./getStateItem");
const StateType_1 = require("./state/StateType");
const rootState = require("./state/rootState");
const tokens_1 = require("../../tokens");
function rootReducer(current, token) {
    current = current || rootState.createState();
    token = tokens_1.replacements.get(token) || token;
    if (token === tokens_1.keywords.eof) {
        var nextState = current;
        while (nextState.type !== StateType_1.StateType.Final) {
            nextState = getStateItem_1.default(nextState.type).reduce(nextState, token);
        }
        return nextState;
    }
    return getStateItem_1.default(current.type).reduce(current, token);
}
;
exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map