"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function imports(config, content) {
    const newImport = content.trim();
    if (!newImport.length) {
        return config;
    }
    return Object.assign({}, config, { imports: [...config.imports, newImport] });
}
exports.imports = imports;
//# sourceMappingURL=imports.js.map