import wrappedParser from './helpers/wrappedParser';
import * as expectNode from './helpers/expectNode';

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
        const src = '@a(c[d<b>()(new a{b=1})]) d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(c[d<b>()(new a{b=1})])');
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


    it('should return quotes as part of expression node', function (): void {
        // arrange
        const src = '@a("b") d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a("b")');
        expectNode.literal(res.children[1], ' d');
    });


    it('should respect escapes inside quotes', function (): void {
        // arrange
        const src = '@a(a["b\\"a"]) d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(a["b\\"a"])');
        expectNode.literal(res.children[1], ' d');
    });


    it('should return apostrophes as part of expression node', function (): void {
        // arrange
        const src = '@a(\'b\') d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(\'b\')');
        expectNode.literal(res.children[1], ' d');
    });


    it('should respect escapes inside apostrophes', function (): void {
        // arrange
        const src = '@a(a[\'b\\\'a\']) d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(a[\'b\\\'a\'])');
        expectNode.literal(res.children[1], ' d');
    });


    it('should return curly braces as part of expression node', function (): void {
        // arrange
        const src = '@a(new b{x = 1}) d';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(new b{x = 1})');
        expectNode.literal(res.children[1], ' d');
    });

});
