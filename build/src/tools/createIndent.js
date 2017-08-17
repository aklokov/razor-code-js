"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const hash_map_1 = require("hash-map");
const indents = hash_map_1.numberMap();
function createIndent(amount = 1) {
    if (indents[amount]) {
        return indents[amount];
    }
    const indent = [];
    let count = amount * constants_1.indentSize;
    while (count--) {
        indent.push(' ');
    }
    return indents[amount] = indent.join('');
}
exports.createIndent = createIndent;
//# sourceMappingURL=createIndent.js.map