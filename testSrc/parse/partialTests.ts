import wrappedParser from './helpers/wrappedParser';
import * as expectNode from './helpers/expectNode';

describe('parser/partial', function (): void {

  it('should return partial node with no indent', function (): void {
    // arrange
    const src = '@[aaa(bbb)]';

    // act
    const res = wrappedParser(src);

    // assert
    expectNode.root(res, 1);
    expectNode.partial(res.children[0], 'aaa', 'bbb', '');
  });

  it('should return partial node with indent', function (): void {
    // arrange
    const src = '   @[aaa(bbb)]';

    // act
    const res = wrappedParser(src);

    // assert
    expectNode.root(res, 1);
    expectNode.partial(res.children[0], 'aaa', 'bbb', '   ');
  });


  it('should return partial node with indent after eod', function (): void {
    // arrange
    const src = `hi
    @[aaa(bbb)]`;

    // act
    const res = wrappedParser(src);

    // assert
    expectNode.root(res, 3);
    expectNode.literal(res.children[0], 'hi');
    expectNode.eol(res.children[1]);
    expectNode.partial(res.children[2], 'aaa', 'bbb', '    ');
  });
});
