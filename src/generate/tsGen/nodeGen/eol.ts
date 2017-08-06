import { StringGen } from '../../common/StringGen';
export function eol(sgen: StringGen): void {
    sgen.appendLine('gen.eol();');
}

export function forceEol(sgen: StringGen): void {
    sgen.appendLine('gen.forceEol();');
}
