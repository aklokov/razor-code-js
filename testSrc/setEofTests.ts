import { expect } from 'chai';
import { keywords } from './import';
import setEof from '../src/parse/setEof';

describe('setEof', function () {
    it('should attach eof if there is none', function () {
        // arrange
        const input = ['a', 'b'];

        // act
        const result = setEof(input);

        // assert
        expect(result).to.be.deep.equal(['a', 'b', keywords.eof]);
    });

    it('should trim if eof is already present', function(){
 // arrange
        const input = ['a', keywords.eof, 'b'];

        // act
        const result = setEof(input);

        // assert
        expect(result).to.be.deep.equal(['a', keywords.eof]);
    });
});