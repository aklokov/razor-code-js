import { PartialNode } from '../../../nodes';
import { StringGen } from '../../common/StringGen';
import { createIndent } from '../../../tools/createIndent';
import { appendCallParms } from '../callParms';

const indent = createIndent();
export function generatePartial(sgen: StringGen, node: PartialNode): void {
    sgen.appendLine(`gen.indent = indent + '${indent}';`);
    sgen.appendLine(`${node.generatorName}.generateContent(${appendCallParms(node.parameters)});');`);
    sgen.appendLine(`gen.indent = indent;`);
}
