import { expect } from 'chai';
import wrappedParser from './wrappedParser';
import { keywords, RootNode, NodeType, SimpleConfigNode } from './import';

describe('parser', function () {
    it('should return simple config node', function () {
        // arrange
        const src = '@using asdf fre arfs\n';

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(res.nodes.length).to.be.equal(1);
        const configNode = res.nodes[0] as SimpleConfigNode;
        expect(configNode.type).to.be.equal(NodeType.SimpleConfig);
        expect(configNode.token).to.be.equal(keywords.using);
        expect(configNode.content).to.be.equal('asdf fre arfs');
    });
});