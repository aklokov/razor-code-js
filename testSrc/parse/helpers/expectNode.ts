import { RootNode, BasicNode, ContentNode, NodeType, ConfigNode, ForEachNode, IfNode } from '../../../src/nodes';
import { expect } from 'chai';

function expectNodeType(node: BasicNode, type: NodeType, description: string): void {
    expect(node.type).to.be.equal(type, `node type ${description} was expected`);
}

function root(node: RootNode, childrenCount?: number): void {
    expectNodeType(node, NodeType.Root, 'Root');
    if (childrenCount) {
        expect(node.children.length).to.be.equal(childrenCount, 'child count in root node is not as expected');
    }
}

function config(node: BasicNode, token: string, content: string): void {
    expectNodeType(node, NodeType.Config, 'Config');
    const configNode = node as ConfigNode;
    expect(configNode.token).to.be.equal(token);
    expect(configNode.content).to.be.equal(content);
}

function contentNode(node: BasicNode, content: string, type: NodeType, description: string): void {
    expectNodeType(node, type, description);
    const contentNode = node as ContentNode;
    expect(contentNode.content).to.be.equal(content);
}

function comment(node: BasicNode, content: string): void {
    contentNode(node, content, NodeType.Comment, 'Comment');
}

function literal(node: BasicNode, content: string): void {
    contentNode(node, content, NodeType.Literal, 'Literal');
}

function expression(node: BasicNode, content: string): void {
    contentNode(node, content, NodeType.Expression, 'Expression');
}

function injection(node: BasicNode, content: string): void {
    contentNode(node, content, NodeType.Injection, 'Injection');
}

function eol(node: BasicNode): void {
    expectNodeType(node, NodeType.Eol, 'Eol');
}

function forceEol(node: BasicNode): void {
    expectNodeType(node, NodeType.ForceEol, 'ForceEol');
}

function rootWithoutConfig(node: RootNode): void {
    const haveConfigNode = node.children.some(node => node.type === NodeType.Config);
    expect(haveConfigNode).to.be.equal(false, 'config node should not be present');
}

function forEach(node: BasicNode, condition: string, childCount?: number): ForEachNode {
    expectNodeType(node, NodeType.ForEach, 'ForEach');
    const forEachNode = node as ForEachNode;
    expect(forEachNode.condition).to.be.equal(condition);
    if (childCount) {
        expect(forEachNode.children.length).to.be.equal(childCount, 'child count in forEach node is not as expected');
    }
    return forEachNode;
}

function ifNode(node: BasicNode, condition: string): IfNode {
    expectNodeType(node, NodeType.If, 'If');
    const ifNode = node as IfNode;
    expect(ifNode.condition).to.be.equal(condition);
    return ifNode;
}

function ifChildren(node: IfNode, ifCount: number, elseCount: number = 0): void {
    expect(node.ifChildren.length).to.be.equal(ifCount, 'if node children count is not as expected');
    expect(node.elseChildren.length).to.be.equal(elseCount, 'if node children else count is not as expected');
}

const expectNode = {
    root,
    config,
    literal,
    expression,
    injection,
    eol,
    forceEol,
    rootWithoutConfig,
    forEach,
    ifNode,
    ifChildren,
    comment
};

export default expectNode;
