import { generate } from '../src';

const template = `
@import { ActionsFile } from '../../derive/model';
@import { actionGenerator } from './action';
@parameters file: ActionsFile

@foreach(let imp of file.imports) {
import { @imp.types } from '@imp.path';
}
@eol
@foreach(let action of file.actions) {
@[actionGenerator(action)]@if(action !== file.actions[file.actions.length - 1]){@eol}
}
@eol
`;

describe('manualTest', function (): void {
    it('should not throw', function (): void {
        const result = generate(template);
        console.log('result: ');
        console.log(result);
    });
});
