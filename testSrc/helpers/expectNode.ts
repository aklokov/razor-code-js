import { RootNode, BasicNode, NodeType, SimpleConfigNode } from '../import';
import { expect } from 'chai';

function root(node: RootNode, childrenCount?: number): void {
    expect(node.type).to.be.equal(NodeType.Root);
    if (childrenCount) {
        expect(node.children.length).to.be.equal(childrenCount);
    }
}

function simpleConfig(node: BasicNode, token: string, content: string): void {
    const configNode = node as SimpleConfigNode;
    expect(configNode.type).to.be.equal(NodeType.SimpleConfig);
    expect(configNode.token).to.be.equal(token);
    expect(configNode.content).to.be.equal(content);
}

function noConfigNode(node: RootNode): void {
    const haveConfigNode = node.children.some(node => node.type === NodeType.SimpleConfig);
    expect(haveConfigNode).to.be.false;
}

const expectNode = {
    root,
    simpleConfig,
    noConfigNode
};

export default expectNode;
