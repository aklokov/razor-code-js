const at = '@';
const atat = at + at;
const atparenthesis = at + '(';
const atbrace = at + '{';
// const atquote = at + '"';
const keywords = {
    // flow
    at,
    atat,
    atparenthesis,
    atbrace,
    //  atquote,
    if: at + 'if',
    else: 'else',
    foreach: at + 'foreach',
    lineFeed: '\n',
    eol: at + 'eol',
    eof: at + 'eof',

    // config
    language: at + 'language ', // c#, js or ts
    parameters: at + 'parameters ',

    // js/ts specific
    import: at + 'import ',

    // c# specific
    namespace: at + 'namespace ',
    using: at + 'using '
};

const configKeywords = [
    keywords.language,
    keywords.parameters,
    keywords.import,
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
    atbrace
    // atquote
];

const tokens = [
    '\r', '\r\n',
    '<', '>', '(', ')',
    '[', ']', '{', '}',
    ' ', '=', '"', , '\'', '\\',
    '*', ',', ';', ':'
];

const allTokens = [...tokens, ...configKeywords, ...flowKeywords];

const replacements = {
    '\r': keywords.lineFeed,
    '\r\n': keywords.lineFeed
};

export {
    keywords,
    configKeywords,
    flowKeywords,
    tokens,
    allTokens,
    replacements
}
