export function callParms(parameters: string[]): string {
    let parms = parameters.map(getParameterName).join(', ');
    return appendCallParms(parms);
}

export function appendCallParms(parms: string): string {
    return parms.length ? 'gen, ' + parms : 'gen';
}

function getParameterName(parameter: string): string {
    const index = parameter.indexOf(':');
    if (index === -1) {
        return parameter;
    }

    return parameter.substr(0, index).trim();
}
