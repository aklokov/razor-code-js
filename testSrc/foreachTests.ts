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
        const forEach = expectNode.forEach(res.children[0], 'let a of b');
        expectNode.literal(forEach.children[0], 'a');
    });
});
