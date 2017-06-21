import { expect } from 'chai';
import wrappedParser from './wrappedParser';
import { keywords, RootNode, NodeType, SimpleConfigNode } from './import';

function haveConfigNode(node: RootNode): boolean {
    return node.children.some(node => node.type === NodeType.SimpleConfig);
}

describe('parser', function () {
    it('should return simple config node', function () {
        // arrange
        const src = '@using asdf fre arfs\n';

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(res.children.length).to.be.equal(1);
        const configNode = res.children[0] as SimpleConfigNode;
        expect(configNode.type).to.be.equal(NodeType.SimpleConfig);
        expect(configNode.token).to.be.equal(keywords.using);
        expect(configNode.content).to.be.equal('asdf fre arfs');
    });

    it('should not return config node after content node', function () {
        // arrange
        const src = 'some @using asdf fre arfs\n';

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(haveConfigNode(res)).to.be.false;
    });

    it('should not return config node after force eol node', function () {
        // arrange
        const src = `   @eol
        @using asdf fre arfs\n`;

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(haveConfigNode(res)).to.be.false;
    });

    it('should ignore empty line before config node', function () {
        // arrange
        const src = `
        @using aaa\n`;

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(res.children.length).to.be.equal(1);
        const configNode = res.children[0] as SimpleConfigNode;
        expect(configNode.type).to.be.equal(NodeType.SimpleConfig);
        expect(configNode.token).to.be.equal(keywords.using);
        expect(configNode.content).to.be.equal('aaa');
    });
});