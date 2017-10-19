"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var indents = {};
function createIndent(amount) {
    if (indents[amount]) {
        return indents[amount];
    }
    var indent = [];
    var count = amount * constants_1.indentSize;
    while (count--) {
        indent.push(' ');
    }
    return indents[amount] = indent.join('');
}
exports.createIndent = createIndent;
//# sourceMappingURL=createIndent.js.map