import wrappedParser from './wrappedParser';
import expectNode from './helpers/expectNode';

describe('parser/forEach', function (): void {
    it('should return foreach node with literal node', function (): void {
        // arrange
        const src = '@foreach(let a of b){a}';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const forEach = expectNode.forEach(res.children[0], 'let a of b', 1);
        expectNode.literal(forEach.children[0], 'a');
    });


    it('should return foreach node with spaced curly brace', function (): void {
        // arrange
        const src = '@foreach(let a of b)   {a}';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const forEach = expectNode.forEach(res.children[0], 'let a of b', 1);
        expectNode.literal(forEach.children[0], 'a');
    });


    it('should fallback from foreach if no brace found', function (): void {
        // arrange
        const src = '@foreach(let a of b)   abc';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], '   abc');
    });


    it('should fallback from foreach if eof', function (): void {
        // arrange
        const src = 'a@foreach(let a of b)';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], 'a');
    });



    it('should return foreach node with deep brackets inside condition', function (): void {
        // arrange
        const src = '@foreach(let a of b(x["z" < \'d\'])){a}';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const forEach = expectNode.forEach(res.children[0], 'let a of b(x["z" < \'d\'])', 1);
        expectNode.literal(forEach.children[0], 'a');
    });


    it('should treat closing curly brace as text if prepended by literal on the same line', function (): void {
        // arrange
        const src =
            `@foreach(let a of b){
    aasd{f}
}`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const forEach = expectNode.forEach(res.children[0], 'let a of b', 2);
        expectNode.literal(forEach.children[0], '    aasd{f}');
        expectNode.eol(forEach.children[1]);
    });


    it('should treat escaped curly brace as text', function (): void {
        // arrange
        const src =
            `@foreach(let a of b){
    aasd{f}
    @}
}`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const forEach = expectNode.forEach(res.children[0], 'let a of b', 4);
        expectNode.literal(forEach.children[0], '    aasd{f}');
        expectNode.eol(forEach.children[1]);
        expectNode.literal(forEach.children[2], '    }');
        expectNode.eol(forEach.children[3]);
    });


    it('should return foreach node with 2 lines of literals', function (): void {
        // arrange
        const src =
            `@foreach(let a of b){
    aasdf
    sdfsg
}`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        const forEach = expectNode.forEach(res.children[0], 'let a of b', 4);
        expectNode.literal(forEach.children[0], '    aasdf');
        expectNode.eol(forEach.children[1]);
        expectNode.literal(forEach.children[2], '    sdfsg');
        expectNode.eol(forEach.children[3]);
    });
});
