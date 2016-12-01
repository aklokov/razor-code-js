import { parse } from './parse/parse';
import { jsGen } from './jsGen/jsGen';
import { csGen } from './csGen/csGen';
import { tsGen } from './tsGen/tsGen';

function generateTs(source: string): string {
    const nodes = parse(source);
    return tsGen(source);
}

function generateCs(source: string): string {
    const nodes = parse(source);
    return csGen(source);
}

function generateJs(source: string): string {
    const nodes = parse(source);
    return jsGen(source);
}

export {
    generateTs,
    generateJs,
    generateCs
}
