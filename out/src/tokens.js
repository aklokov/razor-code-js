"use strict";
exports.__esModule = true;
var array_1 = require("./tools/array");
var at = '@';
var atat = at + at;
var atparenthesis = at + '(';
var atbrace = at + '{';
var atbracket = at + '[';
var escapeBrace = at + '}';
var atStar = at + '*';
var keywords = {
    at: at,
    atat: atat,
    atparenthesis: atparenthesis,
    atbrace: atbrace,
    atbracket: atbracket,
    atStar: atStar,
    escapeBrace: escapeBrace,
    "if": at + 'if(',
    ifSpaced: at + 'if (',
    "else": 'else',
    foreach: at + 'foreach(',
    foreachSpaced: at + 'foreach (',
    lineFeed: '\n',
    eol: at + 'eol',
    eof: at + 'eof',
    language: at + 'language ',
    parameters: at + 'parameters ',
    exportName: at + 'exportname ',
    lineFeedType: at + 'linefeed ',
    "import": at + 'import ',
    namespace: at + 'namespace ',
    using: at + 'using '
};
exports.keywords = keywords;
var openingBrackets = [
    '<', '(', '[',
    '{', '"', '\''
];
exports.openingBrackets = openingBrackets;
var configKeywords = [
    keywords.language,
    keywords.parameters,
    keywords["import"],
    keywords.exportName,
    keywords.lineFeedType,
    keywords.namespace,
    keywords.using
];
exports.configKeywords = configKeywords;
var flowKeywords = [
    keywords["if"],
    keywords.foreach,
    keywords.lineFeed,
    keywords.eol,
    keywords.eof,
    at,
    atat,
    atparenthesis,
    atbrace,
    atbracket,
    atStar,
    escapeBrace
];
exports.flowKeywords = flowKeywords;
var tokens = openingBrackets.concat([
    '\r', '\r\n',
    '>', ')', ']', '}',
    ' ', '=', '\\',
    '*', ',', ';', ':'
]);
exports.tokens = tokens;
var allTokens = tokens.concat(configKeywords, flowKeywords);
exports.allTokens = allTokens;
var replacements = {
    '\r': keywords.lineFeed,
    '\r\n': keywords.lineFeed
};
exports.replacements = replacements;
var openingBracketsMap = array_1.toBoolStringMap(openingBrackets);
exports.openingBracketsMap = openingBracketsMap;
//# sourceMappingURL=tokens.js.map