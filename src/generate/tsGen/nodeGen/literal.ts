import { ContentNode } from '../../../nodes';
import { StringGen } from '../../common/StringGen';

export function generateLiteral(sgen: StringGen, node: ContentNode): void {
    sgen.appendLine(`gen.append('${node.content}');`);
}
