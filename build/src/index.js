"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse_1 = require("./parse/parse");
const generate_1 = require("./generate/generate");
function generate(source) {
    const nodes = parse_1.default(source);
    return generate_1.default(nodes);
}
exports.generate = generate;
//# sourceMappingURL=index.js.map