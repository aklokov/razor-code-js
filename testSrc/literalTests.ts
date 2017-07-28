import wrappedParser from './helpers/wrappedParser';
import expectNode from './helpers/expectNode';

describe('parser/literal', function (): void {
    it('should return literal node', function (): void {
        // arrange
        const src = 'using asdf fre arfs';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], src);
    });


    it('should return 2 literal nodes and eol in between', function (): void {
        // arrange
        const src = 'aaa\nbbb';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'aaa');
        expectNode.eol(res.children[1]);
        expectNode.literal(res.children[2], 'bbb');
    });


    it('should treat windows linebreaks the same way', function (): void {
        // arrange
        const src = 'aaa\r\nbbb';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'aaa');
        expectNode.eol(res.children[1]);
        expectNode.literal(res.children[2], 'bbb');
    });

    it('should treat mac linebreaks the same way', function (): void {
        // arrange
        const src = 'aaa\rbbb';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'aaa');
        expectNode.eol(res.children[1]);
        expectNode.literal(res.children[2], 'bbb');
    });


    it('should return 7 nodes', function (): void {
        // arrange
        const src = `aaa
        bbb
        ccc
        ddd`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 7);
    });


    it('should skip empty lines before literal', function (): void {
        // arrange
        const src = `    
        
   aaa`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], '   aaa');
    });


    it('should not skip empty lines with force eol', function (): void {
        // arrange
        const src = `    
   @eol
   aaa`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 3);

        expectNode.literal(res.children[0], '   ');
        expectNode.forceEol(res.children[1]);
        expectNode.literal(res.children[2], '   aaa');
    });


    it('should skip empty literal and eol after force eol', function (): void {
        // arrange
        const src = `    
   @eol  
`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 2);

        expectNode.literal(res.children[0], '   ');
        expectNode.forceEol(res.children[1]);
    });


    it('should not skip non-empty literal after force eol', function (): void {
        // arrange
        const src = `    
@eol   aaa
`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 3);

        expectNode.forceEol(res.children[0]);
        expectNode.literal(res.children[1], '   aaa');
        expectNode.eol(res.children[2]);
    });
});
