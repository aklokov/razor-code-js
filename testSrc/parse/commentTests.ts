import wrappedParser from './helpers/wrappedParser';
import * as expectNode from './helpers/expectNode';

describe('parser/comment', function (): void {
    it('should return comment node without leading spaces and linefeed', function (): void {
        // arrange
        const src = `   @*this is a comment*@ 
`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.comment(res.children[0], 'this is a comment');
    });
});
