import wrappedParser from './wrappedParser';
import { keywords } from './import';
import expectNode from './helpers/expectNode';

describe('parser/config', function () {
    it('should return simple config node', function () {
        // arrange
        const src = '@namespace asdf fre arfs\n';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.simpleConfig(res.children[0], keywords.namespace, 'asdf fre arfs');
    });

    it('should not return config node after content node', function () {
        // arrange
        const src = 'some @using asdf fre arfs\n';

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res);
        expectNode.rootWithoutConfig(res);
    });

    it('should not return config node after force eol node', function () {
        // arrange
        const src = `   @eol
        @using asdf fre arfs\n`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res);
        expectNode.rootWithoutConfig(res);
    });

    it('should ignore empty line before config node', function () {
        // arrange
        const src = `
        @using aaa\n`;

        // act
        const res = wrappedParser(src);

        // assert
        expectNode.root(res, 1);
        expectNode.simpleConfig(res.children[0], keywords.using, 'aaa');
    });
});