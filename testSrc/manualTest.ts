import { generate } from '../src';

const template = `
@language ts
@linefeed unix
export class {
    public print():void{
        console.log('this is helloworld');
    }
}
`;

describe('manualTest', function (): void {
    it('should attach eof if there is none', function (): void {
        const result = generate(template);
        console.log('result: ');
        console.log(result);
    });
});
