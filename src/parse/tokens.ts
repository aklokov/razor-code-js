const keywords = {
    if: '@if',
    for: '@for',
    foreach: '@foreach',
    eol: '@eol',
    visibility: '@visibility',

    inherits: '@inherits',
    implements: '@implements',
    constructor: '@constructor',
    member: '@member',
    partialPattern: '@partialPattern',

    // c# specific
    using: '@using'
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
    keywords.eol
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
