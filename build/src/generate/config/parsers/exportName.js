"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exportName(config, content) {
    const newExportName = content.trim();
    if (!newExportName.length) {
        return config;
    }
    return Object.assign({}, config, { exportName: newExportName });
}
exports.exportName = exportName;
//# sourceMappingURL=exportName.js.map