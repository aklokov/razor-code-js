import wrappedParser from './helpers/wrappedParser';
import * as expectNode from './helpers/expectNode';

describe('parser/injection', function (): void {

    it('should return injection node', function (): void {
        // arrange
        const src = 'aaa@{let a = b} ccc';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'aaa');
        expectNode.injection(res.children[1], 'let a = b');
        expectNode.literal(res.children[2], ' ccc');
    });


    it('should return deep brackets in injection', function (): void {
        // arrange
        const src = '@{let x = bbb<as>(sadf[new a{\'b\' = "x"}]);}';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.injection(res.children[0], 'let x = bbb<as>(sadf[new a{\'b\' = "x"}]);');
    });
});
