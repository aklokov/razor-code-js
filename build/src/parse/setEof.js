"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = require("../tokens");
function setEof(tokens) {
    const index = tokens.indexOf(tokens_1.keywords.eof);
    if (index !== -1) {
        return tokens.slice(0, index + 1);
    }
    return [...tokens, tokens_1.keywords.eof];
}
exports.default = setEof;
//# sourceMappingURL=setEof.js.map