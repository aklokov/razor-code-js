import wrappedParser from './wrappedParser';
import expectNode from './helpers/expectNode';

describe('parser/if', function (): void {
    it('should return if node with literal node', function (): void {
        // arrange
        const src = '@if(let a of b){a}';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 1);
        expectNode.literal(ifNode.ifChildren[0], 'a');
    });


    it('should return if node with else and literal nodes', function (): void {
        // arrange
        const src = '@if(let a of b){a}else{b}';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 1, 1);
        expectNode.literal(ifNode.ifChildren[0], 'a');
        expectNode.literal(ifNode.elseChildren[0], 'b');
    });

    it('should return if node with spaced else and second curly brace', function (): void {
        // arrange
        const src = '@if(let a of b){a}   else   {b}';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 1, 1);
        expectNode.literal(ifNode.ifChildren[0], 'a');
        expectNode.literal(ifNode.elseChildren[0], 'b');
    });

    it('should treat else as content if curly brace not found', function (): void {
        // arrange
        const src = '@if(let a of b){a}else a';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        const ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 1, 0);
        expectNode.literal(ifNode.ifChildren[0], 'a');
        expectNode.literal(res.children[1], 'else a');
    });


    it('should return if multiline node with else', function (): void {
        // arrange
        const src = `@if(let a of b){
            a
        } else {b}`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 2, 1);
        expectNode.literal(ifNode.ifChildren[0], '            a');
        expectNode.eol(ifNode.ifChildren[1]);
        expectNode.literal(ifNode.elseChildren[0], 'b');
    });


    it('should return if node with multiline else', function (): void {
        // arrange
        const src = `@if(let a of b){a} else {
            b
        }`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 1, 2);
        expectNode.literal(ifNode.ifChildren[0], 'a');
        expectNode.literal(ifNode.elseChildren[0], '            b');
        expectNode.eol(ifNode.elseChildren[1]);
    });
});
