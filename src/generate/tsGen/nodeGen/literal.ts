import { ContentNode } from '../../../nodes';
import { StringGen } from '../../common/StringGen';

export function generateLiteral(sgen: StringGen, node: ContentNode): void {
  const content = node.content.replace(/'/g, '\\\'');
  sgen.appendLine(`gen.append('${content}');`);
}
