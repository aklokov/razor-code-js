import { indentSize } from '../constants';
import { NumberMap } from './dictionary';

const indents: NumberMap<string> = {};

export function createIndent(amount: number = 1): string {
    if (indents[amount]) {
        return indents[amount];
    }

    const indent = [];
    let count = amount * indentSize;
    while (count--) {
        indent.push(' ');
    }

    return indents[amount] = indent.join('');
}
