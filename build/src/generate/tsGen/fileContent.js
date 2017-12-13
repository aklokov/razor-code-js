"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainFunction_1 = require("./mainFunction");
const entryFunction_1 = require("./entryFunction");
const iGen_1 = require("./iGen");
function generateFileContent(sgen, root, config) {
    config.imports.forEach(imp => sgen.appendLine('import ' + imp));
    sgen.appendLine();
    iGen_1.generateGenClass(sgen, config);
    sgen.appendLine();
    entryFunction_1.generateEntryFunction(sgen, config);
    sgen.appendLine();
    mainFunction_1.generateMainFunction(sgen, root, config);
    sgen.appendLine();
    generateExport(sgen, config);
}
exports.generateFileContent = generateFileContent;
function generateExport(sgen, config) {
    sgen.append(`export const ${config.exportName} = `);
    sgen.bracesSemicolon(() => {
        sgen.appendLine('generate,');
        sgen.appendLine('generateContent');
    });
}
//# sourceMappingURL=fileContent.js.map