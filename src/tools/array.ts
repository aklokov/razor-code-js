import { StringMap, stringMap } from 'hash-map';

export function contains<T>(array: T[], item: T): boolean {
  return array.indexOf(item) === -1;
}

export function toBoolStringMap(items: string[]): StringMap<boolean> {
  const result = stringMap<boolean>();
  items.forEach(item => result[item] = true);
  return result;
}
