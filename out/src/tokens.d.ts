declare const keywords: {
    at: string;
    atat: string;
    atparenthesis: string;
    atbrace: string;
    atbracket: string;
    atStar: string;
    escapeBrace: string;
    if: string;
    ifSpaced: string;
    else: string;
    foreach: string;
    foreachSpaced: string;
    lineFeed: string;
    eol: string;
    eof: string;
    language: string;
    parameters: string;
    exportName: string;
    lineFeedType: string;
    import: string;
    namespace: string;
    using: string;
};
declare const openingBrackets: string[];
declare const configKeywords: string[];
declare const flowKeywords: string[];
declare const tokens: string[];
declare const allTokens: string[];
declare const replacements: {
    '\r': string;
    '\r\n': string;
};
declare const openingBracketsMap: {
    [id: string]: boolean;
};
export { keywords, openingBrackets, openingBracketsMap, configKeywords, flowKeywords, tokens, allTokens, replacements };
