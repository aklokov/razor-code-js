import tokenBreakdown from 'token-breakdown-js';
import { allTokens, replacements } from './tokens';

export default function parse(source: string): string[] {
    const tokens = tokenBreakdown(allTokens, replacements).breakDown(source);
    return tokens;
}
