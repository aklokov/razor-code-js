"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileGen_1 = require("../common/fileGen");
const fileContent_1 = require("./fileContent");
function generate(node, config) {
    const stringGen = fileGen_1.startFile(config);
    fileContent_1.generateFileContent(stringGen, node, config);
    return stringGen.toString();
}
exports.generate = generate;
//# sourceMappingURL=tsGen.js.map