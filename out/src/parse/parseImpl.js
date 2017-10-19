"use strict";
exports.__esModule = true;
var token_breakdown_js_1 = require("token-breakdown-js");
var tokens_1 = require("../tokens");
var setEof_1 = require("./setEof");
function parseImpl(reducer, source) {
    var tokens = token_breakdown_js_1["default"](tokens_1.allTokens).breakDown(source);
    var tokensWithEof = setEof_1["default"](tokens);
    var state;
    tokensWithEof.forEach(function (token) { return state = reducer(state, token); });
    var result = state;
    return result.rootNode;
}
exports["default"] = parseImpl;
//# sourceMappingURL=parseImpl.js.map