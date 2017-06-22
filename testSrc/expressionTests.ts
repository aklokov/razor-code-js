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
        expectNode.literal(res.children[2], 'ccc');
    });

});
