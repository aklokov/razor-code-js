import wrappedParser from './wrappedParser';
import expectNode from './helpers/expectNode';

describe('parser/expression', function (): void {

    it('should treat @@ as escaped @', function (): void {
        // arrange
        const src = 'aaa@@bbb ccc';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], 'aaa@bbb ccc');
    });


    it('should return expression node', function (): void {
        // arrange
        const src = 'aaa@bbb ccc';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'aaa');
        expectNode.expression(res.children[1], 'bbb');
        expectNode.literal(res.children[2], ' ccc');
    });


    it('should return 2 expression nodes in a row', function (): void {
        // arrange
        const src = '@bbb@ccc';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'bbb');
        expectNode.expression(res.children[1], 'ccc');
    });


    it('should return expression node and eol node', function (): void {
        // arrange
        const src = '@bbb\nccc';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 3);
        expectNode.expression(res.children[0], 'bbb');
        expectNode.eol(res.children[1]);
        expectNode.literal(res.children[2], 'ccc');
    });


    it('should return (at) as part of literal if expressions has no meaningful characters', function (): void {
        // arrange
        const src = '@)';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], src);
    });
});
