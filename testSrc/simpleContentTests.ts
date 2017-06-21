import { expect } from 'chai';
import wrappedParser from './wrappedParser';
import { BasicNode, RootNode, NodeType, ContentNode } from './import';

describe('parser', function () {
    it('should return content node', function () {
        // arrange
        const src = 'using asdf fre arfs';

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(res.children.length).to.be.equal(1);
        const contentNode = res.children[0] as ContentNode;
        expect(contentNode.type).to.be.equal(NodeType.Content);
        expect(contentNode.content).to.be.equal(src);
    });

    it('should return 2 content nodes and eol in between', function () {
        // arrange
        const src = 'aaa\nbbb';

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(res.children.length).to.be.equal(3);

        const contentNode = res.children[0] as ContentNode;
        expect(contentNode.type).to.be.equal(NodeType.Content);
        expect(contentNode.content).to.be.equal('aaa');

        const eolNode = res.children[1] as BasicNode;
        expect(eolNode.type).to.be.equal(NodeType.Eol);

        const contentNode2 = res.children[2] as ContentNode;
        expect(contentNode2.type).to.be.equal(NodeType.Content);
        expect(contentNode2.content).to.be.equal('bbb');
    });

    it('should return 7 nodes', function () {
        // arrange
        const src = `aaa
        bbb
        ccc
        ddd`;

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(res.children.length).to.be.equal(7);
    });

    it('should skip empty lines before content', function () {
        // arrange
        const src = `    
        
   aaa`;

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(res.children.length).to.be.equal(1);
        const contentNode = res.children[0] as ContentNode;
        expect(contentNode.type).to.be.equal(NodeType.Content);
        expect(contentNode.content).to.be.equal('   aaa');
    });
    it('should not skip empty lines with force eol', function () {
        // arrange
        const src = `    
   @eol
   aaa`;

        // act
        const res: RootNode = wrappedParser(src);

        // assert
        expect(res.type).to.be.equal(NodeType.Root);
        expect(res.children.length).to.be.equal(3);

        const emptyContentNode = res.children[0] as ContentNode;
        expect(emptyContentNode.type).to.be.equal(NodeType.Content);
        expect(emptyContentNode.content).to.be.equal('   ');

        const eolNode = res.children[1] as BasicNode;
        expect(eolNode.type).to.be.equal(NodeType.ForceEol);

        const contentNode = res.children[2] as ContentNode;
        expect(contentNode.type).to.be.equal(NodeType.Content);
        expect(contentNode.content).to.be.equal('   aaa');
    });
});