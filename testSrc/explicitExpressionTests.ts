import wrappedParser from './wrappedParser';
import expectNode from './helpers/expectNode';

describe('parser/explicitExpression', function (): void {

    it('should return expression node', function (): void {
        // arrange
        const src = 'aaa@(bbb) ccc';

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
        const src = '@(bbb)@(ccc)';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'bbb');
        expectNode.expression(res.children[1], 'ccc');
    });


    it('should return deep brackets in explicit expression', function (): void {
        // arrange
        const src = '@(bbb<as>(sadf[new a{\'b\' = "x"}]))';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.expression(res.children[0], 'bbb<as>(sadf[new a{\'b\' = "x"}])');
    });
});
