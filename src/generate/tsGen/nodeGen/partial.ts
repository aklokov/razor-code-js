import { PartialNode } from '../../../nodes';
import { StringGen } from '../../common/StringGen';
import { appendCallParms } from '../callParms';

export function generatePartial(sgen: StringGen, node: PartialNode): void {
    sgen.appendLine(`gen.indent = indent + '${node.indent}';`);
    sgen.appendLine(`${node.generatorName}.generateContent(${appendCallParms(node.parameters)});`);
    sgen.appendLine(`gen.indent = indent;`);
}
