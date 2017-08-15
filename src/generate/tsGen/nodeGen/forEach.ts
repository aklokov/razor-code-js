import { ForEachNode } from '../../../nodes';
import { StringGen } from '../../common/StringGen';
import { generateNode } from '../generateNode';

export function generateForEach(sgen: StringGen, node: ForEachNode): void {
    sgen.append(`for (${node.condition}) `);
    sgen.braces(() => generateForEachContent(sgen, node));
}

function generateForEachContent(sgen: StringGen, node: ForEachNode): void {
    node.children.forEach(child => generateNode(sgen, child));
}
