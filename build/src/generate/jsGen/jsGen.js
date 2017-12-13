"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileGen_1 = require("../common/fileGen");
const generateFileContent_1 = require("./generateFileContent");
function generate(node, config) {
    const stringGen = fileGen_1.startFile(config);
    generateFileContent_1.generateFileContent(stringGen, node, config);
    return stringGen.toString();
}
exports.generate = generate;
//# sourceMappingURL=jsGen.js.map