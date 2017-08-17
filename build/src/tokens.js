"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./tools/array");
const hash_map_1 = require("hash-map");
const at = '@';
const atat = at + at;
const atparenthesis = at + '(';
const atbrace = at + '{';
const atbracket = at + '[';
const escapeBrace = at + '}';
const atStar = at + '*';
const keywords = hash_map_1.objectToMap({
    at,
    atat,
    atparenthesis,
    atbrace,
    atbracket,
    atStar,
    escapeBrace,
    if: at + 'if(',
    ifSpaced: at + 'if (',
    else: 'else',
    foreach: at + 'foreach(',
    foreachSpaced: at + 'foreach (',
    lineFeed: '\n',
    eol: at + 'eol',
    eof: at + 'eof',
    language: at + 'language ',
    parameters: at + 'parameters ',
    exportName: at + 'exportname ',
    lineFeedType: at + 'linefeed ',
    import: at + 'import ',
    namespace: at + 'namespace ',
    using: at + 'using '
});
exports.keywords = keywords;
const openingBrackets = [
    '<', '(', '[',
    '{', '"', '\''
];
exports.openingBrackets = openingBrackets;
const configKeywords = [
    keywords.language,
    keywords.parameters,
    keywords.import,
    keywords.exportName,
    keywords.lineFeedType,
    keywords.namespace,
    keywords.using
];
exports.configKeywords = configKeywords;
const flowKeywords = [
    keywords.if,
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
const tokens = [
    ...openingBrackets,
    '\r', '\r\n',
    '>', ')', ']', '}',
    ' ', '=', '\\',
    '*', ',', ';', ':'
];
exports.tokens = tokens;
const allTokens = [...tokens, ...configKeywords, ...flowKeywords];
exports.allTokens = allTokens;
const replacements = hash_map_1.objectToMap({
    '\r': keywords.lineFeed,
    '\r\n': keywords.lineFeed
});
exports.replacements = replacements;
const openingBracketsMap = array_1.toBoolStringMap(openingBrackets);
exports.openingBracketsMap = openingBracketsMap;
//# sourceMappingURL=tokens.js.map