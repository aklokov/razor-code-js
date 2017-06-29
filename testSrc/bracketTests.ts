import wrappedParser from './wrappedParser';
import expectNode from './helpers/expectNode';

describe('parser/brackets', function (): void {
    it('should return parentheses as part of expression node', function (): void {
        // arrange
        const src = '@a(b).c d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(b).c');
        expectNode.literal(res.children[1], ' d');
    });


    it('should return square brackets as part of expression node', function (): void {
        // arrange
        const src = '@a[b].c d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a[b].c');
        expectNode.literal(res.children[1], ' d');
    });


    it('should return angle brackets as part of expression node', function (): void {
        // arrange
        const src = '@a<b>(c) d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a<b>(c)');
        expectNode.literal(res.children[1], ' d');
    });


    it('should treat other brackets inside angle bracket as text', function (): void {
        // arrange
        const src = '@a<[({> d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a<[({>');
        expectNode.literal(res.children[1], ' d');
    });

    it('should return deep brackets as part of expression node', function (): void {
        // arrange
        const src = '@a(c[d<b>()()]) d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(c[d<b>()()])');
        expectNode.literal(res.children[1], ' d');
    });


    it('should treat angle bracket as text if followed by space', function (): void {
        // arrange
        const src = '@a(b < c) d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(b < c)');
        expectNode.literal(res.children[1], ' d');
    });
});
