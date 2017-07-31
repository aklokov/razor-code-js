import { IConfig } from '../config';

export function imports(config: IConfig, content: string): IConfig {
    const newImport = content.trim();
    if (!newImport.length) {
        return config;
    }

    return {
        ...config,
        imports: [...config.imports, newImport]
    };
}
