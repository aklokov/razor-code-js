"use strict";
exports.__esModule = true;
var config_1 = require("./config");
var tsGen = require("./tsGen");
var constants_1 = require("../constants");
function generateImpl(rootNode) {
    var config = config_1.createConfig(rootNode);
    switch (config.language) {
        case constants_1.language.typescript:
            return tsGen.generate(rootNode, config);
        default:
            return '/* unsupported language */';
    }
}
exports["default"] = generateImpl;
//# sourceMappingURL=generate.js.map