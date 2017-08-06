import { RootNode } from '../../nodes';
import { IConfig } from '../config';
import { StringGen } from '../common/StringGen';
import { generateNode } from './generateNode';

export function generateMainFunction(sgen: StringGen, root: RootNode, config: IConfig): void {
    const parms = config.parameters.join(', ');
    if (parms.length) {
        sgen.append(`function generateContent(gen: IGen, ${config.parameters.join(', ')}): string[] `);
    } else {
        sgen.append(`function generateContent(gen: IGen): string[] `);
    }

    sgen.braces(() => generateMainFunctionContent(sgen, root));
}

function generateMainFunctionContent(sgen: StringGen, root: RootNode): void {
    sgen.appendLine('const indent = gen.indent;');
    root.children.forEach(node => generateNode(sgen, node));
}
