import { RootNode } from '../../nodes';
import { IConfig } from '../config';
import { StringGen } from '../common/StringGen';
import { generateMainFunction } from './mainFunction';
import { generateEntryFunction } from './entryFunction';
import { generateIGenInterface, generateGenClass } from './iGen';

export function generateFileContent(sgen: StringGen, root: RootNode, config: IConfig): void {
    config.imports.forEach(imp => sgen.appendLine('import ' + imp));
    sgen.appendLine();
    generateIGenInterface(sgen);
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
    sgen.append(`export const ${config.exportName}`);
    sgen.bracesSemicolon(() => {
        sgen.appendLine('generate,');
        sgen.appendLine('generateContent');
    });
}


