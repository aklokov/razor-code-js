import { RootNode } from '../../nodes';
import { IConfig } from '../config';
import { StringGen } from '../common/StringGen';
import { generateEntryFunction, generateGenClass, generateMainFunction } from './genFunctions';

export function generateFileContent(sgen: StringGen, root: RootNode, config: IConfig): void {
  config.imports.forEach(imp => sgen.appendLine('import ' + imp));
  sgen.appendLine();
  generateGenClass(sgen, config);
  sgen.appendLine();
  generateEntryFunction(sgen, config);
  sgen.appendLine();
  generateMainFunction(sgen, root, config);
  sgen.appendLine();
  generateExport(sgen, config);

}

function generateExport(sgen: StringGen, config: IConfig): void {
  sgen.append(`export const ${config.exportName} = `);
  sgen.bracesSemicolon(() => {
    sgen.appendLine('generate,');
    sgen.appendLine('generateContent');
  });
}