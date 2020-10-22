function calcularSalarios(salariosAnuales) {
  const resultados = {};

  resultados.mayorSalario = obtenerMayorSalarioAnual(salariosAnuales);
  resultados.menorSalario = obtenerMenorSalarioAnual(salariosAnuales);
  resultados.anualPromedio = obtenerSalarioAnualPromedio(salariosAnuales);
  resultados.mensualPromedio = obtenerSalarioMensualPromedio(salariosAnuales);

  return resultados;
}

function obtenerMayorSalarioAnual(salariosAnuales) {
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

function obtenerMenorSalarioAnual(salariosAnuales) {
  let minimoSalario = Number(salariosAnuales[0].value);

  for (let i = 1; i < salariosAnuales.length; i++) {
      if (
        Number(salariosAnuales[i].value) != 0 &&
        Number(salariosAnuales[i].value) < minimoSalario
      ) {
        minimoSalario = Number(salariosAnuales[i].value);
      }
    
  }
  return minimoSalario;
}

function obtenerSalarioAnualPromedio(salariosAnuales) {
  let sumatoriaSalarios = Number(salariosAnuales[0].value);

  for (let i = 1; i < salariosAnuales.length; i++) {
    sumatoriaSalarios += Number(salariosAnuales[i].value);
  }

  return sumatoriaSalarios / salariosAnuales.length;
}

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
