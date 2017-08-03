import { expect } from 'chai';
import { createConfig } from '@src/generate/config';
import { RootNode, ConfigNode } from '@nodes';
import { keywords } from '@src/tokens';

describe('createConfig/parameters', function (): void {
    it('should return single parameter', function (): void {
        // arrange
        const paramNode = new ConfigNode(keywords.parameters, 'name');
        const root = new RootNode([paramNode]);

        // act
        const result = createConfig(root);

        // assert
        expect(result.parameters).to.be.deep.equal(['name']);
    });


    it('should return two parameters with generic types', function (): void {
        // arrange
        const paramNode = new ConfigNode(keywords.parameters, 'employee: Container<IEmployee>, map: SomeMap<string, number>');
        const root = new RootNode([paramNode]);

        // act
        const result = createConfig(root);

        // assert
        expect(result.parameters).to.be.deep.equal(['employee: Container<IEmployee>', 'map: SomeMap<string, number>']);
    });
});
