import { expect } from 'chai';
import { createConfig, Language } from '../../src/generate/config';
import { RootNode, ConfigNode } from '../../src/nodes';
import { keywords } from '../../src/tokens';

describe('createConfig/language', function (): void {
    it('should recognize language', function (): void {
        // arrange
        const languageNode = new ConfigNode(keywords.language, 'cs');
        const root = new RootNode([languageNode]);

        // act
        const result = createConfig(root);

        // assert
        expect(result.language).to.be.equal(Language.CSharp);
    });


    it('should default to typescript for unknown language', function (): void {
        // arrange
        const languageNode = new ConfigNode(keywords.language, 'hh');
        const root = new RootNode([languageNode]);

        // act
        const result = createConfig(root);

        // assert
        expect(result.language).to.be.equal(Language.TypeScript);
    });


    it('should default to typescript if language is not present', function (): void {
        // arrange
        const root = new RootNode([]);

        // act
        const result = createConfig(root);

        // assert
        expect(result.language).to.be.equal(Language.TypeScript);
    });
});
