import parse from './parse/parse';
import jsGen from './generate/jsGen/jsGen';
import csGen from './generate/csGen/csGen';
import tsGen from './generate/tsGen/tsGen';

function generateTs(source: string): string {
    const nodes = parse(source);
    return tsGen(nodes);
}

function generateCs(source: string): string {
    const nodes = parse(source);
    return csGen(nodes);
}

function generateJs(source: string): string {
    const nodes = parse(source);
    return jsGen(nodes);
}

export {
    generateTs,
    generateJs,
    generateCs
}
