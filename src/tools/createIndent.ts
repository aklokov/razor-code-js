import { indentSize } from '../constants';
import { numberMap } from 'hash-map';

const indents = numberMap<string>();

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
