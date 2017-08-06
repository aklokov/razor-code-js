import { ContentNode } from '../../../nodes';
import { StringGen } from '../../common/StringGen';

export function generateExpression(sgen: StringGen, node: ContentNode): void {
    sgen.appendLine(`gen.append((${node.content}).toString());`);
}

export function generateInjection(sgen: StringGen, node: ContentNode): void {
    sgen.appendLine(node.content);
}
