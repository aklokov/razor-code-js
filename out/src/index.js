"use strict";
exports.__esModule = true;
var parse_1 = require("./parse/parse");
var generate_1 = require("./generate/generate");
function generate(source) {
    var nodes = parse_1["default"](source);
    return generate_1["default"](nodes);
}
exports.generate = generate;
//# sourceMappingURL=index.js.map