"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rootReducer_1 = require("./reduction/rootReducer");
const parseImpl_1 = require("./parseImpl");
function parse(source) {
    return parseImpl_1.default(rootReducer_1.default, source);
}
exports.default = parse;
//# sourceMappingURL=parse.js.map