import { StringMap } from './dictionary';

export function contains<T>(array: T[], item: T): boolean {
    return array.indexOf(item) === -1;
}

export function toBoolStringMap(items: string[]): StringMap<boolean> {
    const result: StringMap<boolean> = {};
    items.forEach(item => result[item] = true);
    return result;
}
