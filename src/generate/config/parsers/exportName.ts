import { IConfig } from '../config';

export function exportName(config: IConfig, content: string): IConfig {
    const newExportName = content.trim();
    if (!newExportName.length) {
        return config;
    }

    return {
        ...config,
        exportName: newExportName
    };
}
