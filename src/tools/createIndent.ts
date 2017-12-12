import { indentSize } from '../constants';

const indents = new Map<number, string>();

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
