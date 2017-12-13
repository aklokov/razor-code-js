"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genFunctions_1 = require("./genFunctions");
function generateFileContent(sgen, root, config) {
    config.imports.forEach(imp => sgen.appendLine(imp));
    sgen.appendLine();
    genFunctions_1.generateGenClass(sgen, config);
    sgen.appendLine();
    genFunctions_1.generateEntryFunction(sgen, config);
    sgen.appendLine();
    genFunctions_1.generateMainFunction(sgen, root, config);
    sgen.appendLine();
    generateExport(sgen, config);
}
exports.generateFileContent = generateFileContent;
function generateExport(sgen, config) {
    sgen.append(`module.exports = `);
    sgen.bracesSemicolon(() => {
        sgen.appendLine('generate,');
        sgen.appendLine('generateContent');
    });
}
//# sourceMappingURL=generateFileContent.js.map