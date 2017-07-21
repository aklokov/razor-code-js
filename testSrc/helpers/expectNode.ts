import { RootNode, BasicNode, ContentNode, NodeType, ConfigNode, ForEachNode } from '../../src/nodes';
import { expect } from 'chai';

function root(node: RootNode, childrenCount?: number): void {
    expect(node.type).to.be.equal(NodeType.Root);
    if (childrenCount) {
        expect(node.children.length).to.be.equal(childrenCount);
    }
}

function config(node: BasicNode, token: string, content: string): void {
    const configNode = node as ConfigNode;
    expect(configNode.type).to.be.equal(NodeType.Config);
    expect(configNode.token).to.be.equal(token);
    expect(configNode.content).to.be.equal(content);
}

function contentNode(node: BasicNode, content: string, type: NodeType): void {
    const contentNode = node as ContentNode;
    expect(contentNode.type).to.be.equal(type);
    expect(contentNode.content).to.be.equal(content);
}

function literal(node: BasicNode, content: string): void {
    contentNode(node, content, NodeType.Literal);
}

function expression(node: BasicNode, content: string): void {
    contentNode(node, content, NodeType.Expression);
}

function injection(node: BasicNode, content: string): void {
    contentNode(node, content, NodeType.Injection);
}

function eol(node: BasicNode): void {
    expect(node.type).to.be.equal(NodeType.Eol);
}

function forceEol(node: BasicNode): void {
    expect(node.type).to.be.equal(NodeType.ForceEol);
}

function rootWithoutConfig(node: RootNode): void {
    const haveConfigNode = node.children.some(node => node.type === NodeType.Config);
    expect(haveConfigNode).to.be.false;
}

function forEach(node: BasicNode, condition: string): ForEachNode {
    expect(node.type).to.be.equal(NodeType.ForEach);
    const forEachNode = node as ForEachNode;
    expect(forEachNode.condition).to.be.equal(condition);
    return forEachNode;
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
    forEach
};

export default expectNode;
