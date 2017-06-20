import { expect } from 'chai';
import wrappedParser from './wrappedParser';
import { RootNode, NodeType, ContentNode } from './import';

describe('parser', function () {
    it('should return content node', function () {
        // arrange
        const src = 'using asdf fre arfs';

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(res.nodes.length).to.be.equal(1);
        const contentNode = res.nodes[0] as ContentNode;
        expect(contentNode.type).to.be.equal(NodeType.Content);
        expect(contentNode.content).to.be.equal(src);
    });
});