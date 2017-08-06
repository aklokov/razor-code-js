import * as nodes from '../../nodes';
import { NodeType } from '../../nodes';
import { StringGen } from '../common/StringGen';
import * as nodeGen from './nodeGen';

export function generateNode(sgen: StringGen, node: nodes.BasicNode): void {
    switch (node.type) {
        case NodeType.Literal:
            nodeGen.generateLiteral(sgen, node as nodes.ContentNode);
            break;
        case NodeType.Eol:
            nodeGen.eol(sgen);
            break;
        case NodeType.ForceEol:
            nodeGen.forceEol(sgen);
            break;
        case NodeType.Expression:
            nodeGen.generateExpression(sgen, node as nodes.ContentNode);
            break;
        case NodeType.Injection:
            nodeGen.generateInjection(sgen, node as nodes.ContentNode);
            break;
        case NodeType.ForEach:
            nodeGen.generateForEach(sgen, node as nodes.ForEachNode);
            break;
        case NodeType.If:
            nodeGen.generateIfNode(sgen, node as nodes.IfNode);
            break;
        default:
            break;
    }
}


