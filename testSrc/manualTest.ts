import { generate } from '../src';

const template = `
  constructor(@action.parameters) { }
`;

describe('manualTest', function (): void {
    it('should not throw', function (): void {
        const result = generate(template);
        console.log('result: ');
        console.log(result);
    });
});
