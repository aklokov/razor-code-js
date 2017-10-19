"use strict";
exports.__esModule = true;
var rootReducer_1 = require("./reduction/rootReducer");
var parseImpl_1 = require("./parseImpl");
function parse(source) {
    return parseImpl_1["default"](rootReducer_1["default"], source);
}
exports["default"] = parse;
//# sourceMappingURL=parse.js.map