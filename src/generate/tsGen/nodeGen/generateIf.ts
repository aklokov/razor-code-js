import { IfNode } from '../../../nodes';
import { StringGen } from '../../common/StringGen';
import { generateNode } from '../generateNode';

export function generateIfNode(sgen: StringGen, node: IfNode): void {
    sgen.appendLine(`if(${node.condition}) {`);
    sgen.pushIndent();
    generateIfContent(sgen, node);
    sgen.popIndent();
    if (node.elseChildren && node.elseChildren.length) {
        sgen.appendLine('} else {');
        sgen.pushIndent();
        generateElseContent(sgen, node);
        sgen.popIndent();
    }

    sgen.appendLine('}');
}

function generateIfContent(sgen: StringGen, node: IfNode): void {
    node.ifChildren.forEach(child => generateNode(sgen, child));
}

function generateElseContent(sgen: StringGen, node: IfNode): void {
    node.elseChildren.forEach(child => generateNode(sgen, child));
}
