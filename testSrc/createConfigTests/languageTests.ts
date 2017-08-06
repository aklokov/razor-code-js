import { expect } from 'chai';
import { createConfig } from '../../src/generate/config';
import { lineFeedType, language } from '../../src/constants';
import { RootNode, ConfigNode } from '../../src/nodes';
import { keywords } from '../../src/tokens';

describe('createConfig/language', function (): void {
    it('should set language and windows linefeed for csharp', function (): void {
        // arrange
        const languageNode = new ConfigNode(keywords.language, language.csharp);
        const root = new RootNode([languageNode]);

        // act
        const result = createConfig(root);

        // assert
        expect(result.language).to.be.equal(language.csharp);
        expect(result.lineFeed).to.be.equal(lineFeedType.windows);
    });


    it('should language and unix linefeed for typescript', function (): void {
        // arrange
        const languageNode = new ConfigNode(keywords.language, language.typescript);
        const root = new RootNode([languageNode]);

        // act
        const result = createConfig(root);

        // assert
        expect(result.language).to.be.equal(language.typescript);
        expect(result.lineFeed).to.be.equal(lineFeedType.unix);
    });


    it('should default to typescript if language is not present', function (): void {
        // arrange
        const root = new RootNode([]);

        // act
        const result = createConfig(root);

        // assert
        expect(result.language).to.be.equal(language.typescript);
        expect(result.lineFeed).to.be.equal(lineFeedType.unix);
    });


    it('should default to typescript if language is not recognized', function (): void {
        // arrange
        const languageNode = new ConfigNode(keywords.language, 'fs');
        const root = new RootNode([languageNode]);

        // act
        const result = createConfig(root);

        // assert
        expect(result.language).to.be.equal(language.typescript);
        expect(result.lineFeed).to.be.equal(lineFeedType.unix);
    });
});
