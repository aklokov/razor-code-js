import { generate } from '../src';

const template = `
@language ts
@linefeed unix
@import * as IType from './IType;
@parameters obj: IType

export class @obj.className {
    public @(obj.functionName)(): void {
@{let i = 5;}
@if(i > 5){
    @foreach(let world in obj.worlds){
        console.log('hello, world ' + @world.name);
    }
}

@if(i < 5){
    return;
} else {
    return @i;
}
    }
}
`;

describe('manualTest', function (): void {
    it('should not throw', function (): void {
        const result = generate(template);
        console.log('result: ');
        console.log(result);
    });
});
