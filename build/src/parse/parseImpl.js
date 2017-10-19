"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_breakdown_js_1 = require("token-breakdown-js");
const tokens_1 = require("../tokens");
const setEof_1 = require("./setEof");
function parseImpl(reducer, source) {
    const tokens = token_breakdown_js_1.Create(tokens_1.allTokens).breakDown(source);
    const tokensWithEof = setEof_1.default(tokens);
    let state;
    tokensWithEof.forEach(token => state = reducer(state, token));
    const result = state;
    return result.rootNode;
}
exports.default = parseImpl;
//# sourceMappingURL=parseImpl.js.map