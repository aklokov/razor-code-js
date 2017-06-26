const keywords = {
    // flow
    if: '@if',
    else: 'else',
    foreach: '@foreach',
    lineFeed: '\n',
    eol: '@eol',
    eof: '@eof',

    // config
    language: '@language ', // c#, js or ts
    parameters: '@parameters ',

    // js/ts specific
    import: '@import ',

    // c# specific
    namespace: '@namespace ',
    using: '@using '
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
    keywords.eof
];

const tokens = [
    '\r', '\r\n',
    '<', '>', '(', ')',
    '[', ']', '{', '}',
    '@', '@@', '@(', '@{',
    ' ', '=', '@"',
    '"', , '\'', '\\',
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
    allTokens,
    replacements
}
