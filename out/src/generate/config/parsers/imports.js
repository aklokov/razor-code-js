"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
function imports(config, content) {
    var newImport = content.trim();
    if (!newImport.length) {
        return config;
    }
    return __assign({}, config, { imports: config.imports.concat([newImport]) });
}
exports.imports = imports;
//# sourceMappingURL=imports.js.map