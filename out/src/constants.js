"use strict";
exports.__esModule = true;
var language;
(function (language) {
    language["typescript"] = "ts";
    language["javascript"] = "js";
    language["csharp"] = "cs";
})(language = exports.language || (exports.language = {}));
;
var lineFeedType;
(function (lineFeedType) {
    lineFeedType["windows"] = "windows";
    lineFeedType["unix"] = "unix";
    lineFeedType["mac"] = "mac";
})(lineFeedType = exports.lineFeedType || (exports.lineFeedType = {}));
;
exports.defaultLanguage = language.typescript;
exports.indentSize = 4;
//# sourceMappingURL=constants.js.map