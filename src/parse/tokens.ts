const keywords = {
    if: '@if',
    for: '@for',
    foreach: '@foreach',
    eol: '@eol',
    eof: '@eof',

    visibility: '@visibility ',
    inherits: '@inherits ',
    implements: '@implements ',
    constructor: '@constructor ',
    partialPattern: '@partialPattern ',
    using: '@using ',

    member: '@member'
};

const configKeywords = [
    keywords.visibility,
    keywords.using,
    keywords.inherits,
    keywords.implements,
    keywords.constructor,
    keywords.member,
    keywords.partialPattern
];
const flowKeywords = [
    keywords.if,
    keywords.for,
    keywords.foreach,
    keywords.eol,
    keywords.eof
];

const tokens = ['\n', '\r', '\r\n',
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

const allTokens = tokens.concat(configKeywords, flowKeywords);

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
