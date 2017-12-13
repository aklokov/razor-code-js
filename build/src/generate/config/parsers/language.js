"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
function language(config, content) {
    const newLanguage = content.trim();
    if (newLanguage !== constants_1.language.csharp && newLanguage !== constants_1.language.javascript && newLanguage !== constants_1.language.typescript) {
        return config;
    }
    const lineFeed = newLanguage === constants_1.language.csharp ? constants_1.lineFeedType.windows : constants_1.lineFeedType.unix;
    return Object.assign({}, config, { language: newLanguage, lineFeed: lineFeed });
}
exports.language = language;
//# sourceMappingURL=language.js.map