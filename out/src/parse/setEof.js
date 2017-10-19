"use strict";
exports.__esModule = true;
var tokens_1 = require("../tokens");
function setEof(tokens) {
    var index = tokens.indexOf(tokens_1.keywords.eof);
    if (index !== -1) {
        return tokens.slice(0, index + 1);
    }
    return tokens.concat([tokens_1.keywords.eof]);
}
exports["default"] = setEof;
//# sourceMappingURL=setEof.js.map