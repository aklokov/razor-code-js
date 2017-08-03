import { RootNode } from '@nodes';
import { IConfig } from '../config';
import { StringGen } from '../common/StringGen';
import { generateNode } from './generateNode';

export function generateMainFunction(sgen: StringGen, root: RootNode, config: IConfig): void {
    const parms = config.parameters.join(', ');
    if (parms.length) {
        sgen.append(`function generateContent(gen: Gen, ${config.parameters.join(', ')}): string[] `);
    } else {
        sgen.append(`function generateContent(gen: Gen): string[] `);
    }

    sgen.braces(() => generateMainFunctionContent(root, sgen));
}

function generateMainFunctionContent(root: RootNode, sgen: StringGen): void {
    sgen.appendLine('const indent = gen.indent;');
    root.children.forEach(node => generateNode(node, sgen));
}
