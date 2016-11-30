export enum OutputType {
    js,
    ts,
    cs
}

export interface IOutputOptions {

}

export interface IOptions {
    outputType?: OutputType;
}
