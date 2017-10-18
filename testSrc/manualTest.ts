import { generate } from '../src';

const template = `
@import { ActionsFile } from '../../derive/model';
@import { actionGenerator, importsGenerator, disclaimer, isLast } from '.';
@parameters file: ActionsFile
@exportname actionsGenerator

@[disclaimer()]
@[importsGenerator(file.imports)]
@foreach(let action of file.actions) {
@[actionGenerator(action)]@if(!isLast(action, file.actions){@eol}
}
@eol
export allActions = [
 @foreach(let action of file.actions) {
  @action.constantName@if(!isLast(action, file.actions)){,}
 }
];
`;

describe('manualTest', function (): void {
    it('should not throw', function (): void {
        const result = generate(template);
        console.log('result: ');
        console.log(result);
    });
});
