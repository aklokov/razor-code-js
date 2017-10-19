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
var constants_1 = require("../../../constants");
function language(config, content) {
    var newLanguage = content.trim();
    if (newLanguage !== constants_1.language.csharp && newLanguage !== constants_1.language.javascript && newLanguage !== constants_1.language.typescript) {
        return config;
    }
    var lineFeed = newLanguage === constants_1.language.csharp ? constants_1.lineFeedType.windows : constants_1.lineFeedType.unix;
    return __assign({}, config, { language: newLanguage, lineFeed: lineFeed });
}
exports.language = language;
//# sourceMappingURL=language.js.map