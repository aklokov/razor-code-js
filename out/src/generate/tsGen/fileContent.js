"use strict";
exports.__esModule = true;
var mainFunction_1 = require("./mainFunction");
var entryFunction_1 = require("./entryFunction");
var iGen_1 = require("./iGen");
function generateFileContent(sgen, root, config) {
    config.imports.forEach(function (imp) { return sgen.appendLine('import ' + imp); });
    sgen.appendLine();
    iGen_1.generateIGenInterface(sgen);
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
    sgen.append("export const " + config.exportName + " = ");
    sgen.bracesSemicolon(function () {
        sgen.appendLine('generate,');
        sgen.appendLine('generateContent');
    });
}
//# sourceMappingURL=fileContent.js.map