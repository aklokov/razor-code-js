import { BasicNode, ForEachNode, IfNode, ContentNode } from '../../../../nodes';
import { NodeType } from '../../../../nodes';

export function isEndOfLine(node: BasicNode): boolean {
    return node.type === NodeType.Eol || node.type === NodeType.ForceEol;
}

export function isMultiline(node: BasicNode): boolean {
    return isEndOfLine(node) || isMultilineNode(node);
}

export function isMultilineNode(node: BasicNode): boolean {
    if (node.type === NodeType.ForEach) {
        const forEachNode = node as ForEachNode;
        return forEachNode.children.some(isMultiline);
    }

    if (node.type === NodeType.If) {
        const ifNode = node as IfNode;
        return ifNode.ifChildren.some(isMultiline)
            || ifNode.elseChildren.some(isMultiline);
    }
}

export function isSuppressingNode(node: BasicNode): boolean {
    return node.type === NodeType.Injection ||
        node.type === NodeType.Comment ||
        isMultilineNode(node);
}

export function isSuppressableNode(node: BasicNode): boolean {
    if (node.type === NodeType.Literal) {
        const contentNode = node as ContentNode;
        return !contentNode.content.trim().length;
    }

    return node.type === NodeType.Eol;
}
