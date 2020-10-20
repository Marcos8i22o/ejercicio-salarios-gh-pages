function calcularSalarios(salariosAnuales) {
  mayorSalarioAnual(salariosAnuales);
  menorSalarioAnual(salariosAnuales);
  salarioAnualPromedio(salariosAnuales);
  salarioMensualPromedio(salariosAnuales);
}

function mayorSalarioAnual(salariosAnuales) {
  let maximoSalario = 0;

  for (let i = 0; i < salariosAnuales.length; i++) {
    if (
      Number(salariosAnuales[i].value) != 0 &&
      Number(salariosAnuales[i].value) > maximoSalario
    ) {
      maximoSalario = Number(salariosAnuales[i].value);
    }
  }
  return maximoSalario;
}

function menorSalarioAnual(salariosAnuales) {
  let minimoSalario;

  for (let i = 0; i < salariosAnuales.length; i++) {
    //if (!minimoSalario) {
      if (
        Number(salariosAnuales[i].value) != 0 &&
        Number(salariosAnuales[i].value) < minimoSalario
      ) {
        minimoSalario = Number(salariosAnuales[i].value);
      }
    
  }
  return minimoSalario;
}

function salarioAnualPromedio(salariosAnuales) {
  let sumatoriaSalarios = Number(salariosAnuales[0].value);

  for (let i = 1; i < salariosAnuales.length; i++) {
    sumatoriaSalarios += Number(salariosAnuales[i].value);
  }

  return sumatoriaSalarios / salariosAnuales.length;
}

function salarioMensualPromedio(salariosAnuales) {}
function obtenerSalarioMensualPromedio(salariosAnuales) {
  const MESES_DEL_ANIO = 12;
  const salarioMensual = [];
  
  for (let i = 0; i < salariosAnuales.length; i++) {
    salarioMensual[i] = Number(salariosAnuales[i].value) / MESES_DEL_ANIO;
  }
  
  let sumaSalariosMensuales = 0;
  for (let i = 0; i < salarioMensual.length; i++) {
    sumaSalariosMensuales += salarioMensual[i];
  }

  return sumaSalariosMensuales / salarioMensual.length;
}
