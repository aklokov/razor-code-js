import { RootNode, BasicNode, ContentNode, NodeType, ConfigNode } from '../import';
import { expect } from 'chai';

function root(node: RootNode, childrenCount?: number): void {
    expect(node.type).to.be.equal(NodeType.Root);
    if (childrenCount) {
        expect(node.children.length).to.be.equal(childrenCount);
    }
}

function simpleConfig(node: BasicNode, token: string, content: string): void {
    const configNode = node as ConfigNode;
    expect(configNode.type).to.be.equal(NodeType.SimpleConfig);
    expect(configNode.token).to.be.equal(token);
    expect(configNode.content).to.be.equal(content);
}

function literal(node: BasicNode, content: string) {
    const contentNode = node as ContentNode;
    expect(contentNode.type).to.be.equal(NodeType.Literal);
    expect(contentNode.content).to.be.equal(content);
}

function eol(node: BasicNode) {
    expect(node.type).to.be.equal(NodeType.Eol);
}

function forceEol(node: BasicNode) {
    expect(node.type).to.be.equal(NodeType.ForceEol);
}

function rootWithoutConfig(node: RootNode): void {
    const haveConfigNode = node.children.some(node => node.type === NodeType.SimpleConfig);
    expect(haveConfigNode).to.be.false;
}

const expectNode = {
    root,
    simpleConfig,
    literal,
    eol,
    forceEol,
    rootWithoutConfig
};

export default expectNode;
