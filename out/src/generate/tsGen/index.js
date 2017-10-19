"use strict";
exports.__esModule = true;
var fileGen_1 = require("../common/fileGen");
var fileContent_1 = require("./fileContent");
function generate(node, config) {
    var stringGen = fileGen_1.startFile(config);
    fileContent_1.generateFileContent(stringGen, node, config);
    return stringGen.toString();
}
exports.generate = generate;
//# sourceMappingURL=index.js.map