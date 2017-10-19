"use strict";
exports.__esModule = true;
var rootReducer_1 = require("../../../src/parse/reduction/rootReducer");
var wrapReducer_1 = require("./wrapReducer");
var parseImpl_1 = require("../../../src/parse/parseImpl");
function wrappedParser(source) {
    var reducer = wrapReducer_1["default"](rootReducer_1["default"]);
    return parseImpl_1["default"](reducer, source);
}
exports["default"] = wrappedParser;
//# sourceMappingURL=wrappedParser.js.map