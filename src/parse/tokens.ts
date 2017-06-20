const keywords = {
    // flow
    if: '@if',
    else: 'else',
    foreach: '@foreach',
    eol: '@eol',
    eof: '@eof',

    // config
    language: '@language', // c#, js or ts
    parameters: '@parameters',

    // js/ts specific
    import: '@import',

    // c# specific
    namespace: '@namespace',
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
    keywords.eol,
    keywords.eof
];

const tokens = [
    '\n', '\r', '\r\n',
    '<', '>',
    '(', ')',
    '[', ']',
    '{', '}',
    '"', '\'',
    '@', '\\',
    ' ', '@"',
    '*', ',',
    ';', ':',
    '=', '@@'
];

const allTokens = [...tokens, ...configKeywords, ...flowKeywords];

const replacements = {
    '\r': '\n',
    '\r\n': '\n'
};

export {
    keywords,
    configKeywords,
    flowKeywords,
    allTokens,
    replacements
}
