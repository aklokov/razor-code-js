import { toBoolStringMap } from './tools/array';

const at = '@';
const atat = at + at;
const atparenthesis = at + '(';
const atbrace = at + '{';
const escapeBrace = at + '}';
const atStar = at + '*';
// const atquote = at + '"';
const keywords = {
    // flow
    at,
    atat,
    atparenthesis,
    atbrace,
    atStar,
    escapeBrace,
    //  atquote,
    if: at + 'if(',
    ifSpaced: at + 'if (',
    else: 'else',
    foreach: at + 'foreach(',
    foreachSpaced: at + 'foreach (',
    lineFeed: '\n',
    eol: at + 'eol',
    eof: at + 'eof',

    // config
    language: at + 'language ', // c#, js or ts
    parameters: at + 'parameters ',
    exportName: at + 'exportname ',
    lineFeedType: at + 'linefeed ',

    // js/ts specific
    import: at + 'import ',

    // c# specific
    namespace: at + 'namespace ',
    using: at + 'using '
};

const openingBrackets = [
    '<', '(', '[',
    '{', '"', '\''
];

const configKeywords = [
    keywords.language,
    keywords.parameters,
    keywords.import,
    keywords.exportName,
    keywords.lineFeedType,
    keywords.namespace,
    keywords.using
];

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
    atStar,
    escapeBrace
    // atquote
];

const tokens = [
    ...openingBrackets,
    '\r', '\r\n',
    '>', ')', ']', '}',
    ' ', '=', '\\',
    '*', ',', ';', ':'
];

const allTokens = [...tokens, ...configKeywords, ...flowKeywords];

const replacements = {
    '\r': keywords.lineFeed,
    '\r\n': keywords.lineFeed
};

const openingBracketsMap = toBoolStringMap(openingBrackets);

export {
    keywords,
    openingBrackets,
    openingBracketsMap,
    configKeywords,
    flowKeywords,
    tokens,
    allTokens,
    replacements
}
