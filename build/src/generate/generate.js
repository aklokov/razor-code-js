"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const tsGen = require("./tsGen/tsGen");
const jsGen = require("./jsGen/jsGen");
const constants_1 = require("../constants");
function generateImpl(rootNode) {
    const config = config_1.createConfig(rootNode);
    switch (config.language) {
        case constants_1.language.typescript:
            return tsGen.generate(rootNode, config);
        case constants_1.language.javascript:
            return jsGen.generate(rootNode, config);
        default:
            return '/* unsupported language */';
    }
}
exports.default = generateImpl;
//# sourceMappingURL=generate.js.map