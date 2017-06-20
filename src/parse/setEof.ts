import { keywords } from './tokens';
export default function setEof(tokens: string[]): string[] {
    const index = tokens.indexOf(keywords.eof);
    if (index !== -1) {
        return tokens.slice(0, index + 1);
    }

    return [...tokens, keywords.eof];
}
