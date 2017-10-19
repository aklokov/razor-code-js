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
function exportName(config, content) {
    var newExportName = content.trim();
    if (!newExportName.length) {
        return config;
    }
    return __assign({}, config, { exportName: newExportName });
}
exports.exportName = exportName;
//# sourceMappingURL=exportName.js.map