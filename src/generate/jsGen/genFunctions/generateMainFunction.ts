import { RootNode } from '../../../nodes';
import { IConfig } from '../../config';
import { StringGen } from '../../common/StringGen';
import { generateNode } from '../../tsgen/generateNode';

export function generateMainFunction(sgen: StringGen, root: RootNode, config: IConfig): void {
    const parms = config.parameters.join(', ');
    if (parms.length) {
        sgen.append(`function generateContent(gen, ${config.parameters.join(', ')}) `);
    } else {
        sgen.append(`function generateContent(gen) `);
    }

    sgen.braces(() => generateMainFunctionContent(sgen, root));
}

function generateMainFunctionContent(sgen: StringGen, root: RootNode): void {
    sgen.appendLine('const indent = gen.indent;');
    root.children.forEach(node => generateNode(sgen, node));
}
