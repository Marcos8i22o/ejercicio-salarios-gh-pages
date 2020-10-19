function calcularSalarios (salariosAnuales) {
    mayorSalarioAnual (salariosAnuales);
    menorSalarioAnual (salariosAnuales);
    salarioAnualPromedio(salariosAnuales);
    salarioMensualPromedio(salariosAnuales);
}

function mayorSalarioAnual (salariosAnuales) {
    let maximoSalario = 0;

    for (let i = 0; i < salariosAnuales.length; i++) {
        if (Number(salariosAnuales[i].value) > maximoSalario) {
            maximoSalario = Number(salariosAnuales[i].value);
        }
    }
    return maximoSalario;
}

function menorSalarioAnual (salariosAnuales) {
    let minimoSalario;

    for (let i = 0; i < salariosAnuales.length; i++) {
        if (!minimoSalario || Number(salariosAnuales[i].value) < minimoSalario) {
            minimoSalario = Number(salariosAnuales[i].value);
        }
    }
    return minimoSalario;
}

function salarioAnualPromedio (salariosAnuales) {
    let sumatoriaSalarios = Number(salariosAnuales[0].value);

    for (let i = 1; i < salariosAnuales.length; i++) {
        sumatoriaSalarios += Number(salariosAnuales[i].value);
    }

    return sumatoriaSalarios / salariosAnuales.length;
}

function salarioMensualPromedio (salariosAnuales) {

}
