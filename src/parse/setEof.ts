import { keywords } from './tokens';
export default function setEof(tokens: string[]): string[] {
    const withEof = [...tokens, keywords.eof];
    const index = withEof.indexOf(keywords.eof);
    return withEof.slice(0, index + 1);
}
