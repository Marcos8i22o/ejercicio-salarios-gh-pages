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

  let salario;
  for (let i = 0; i < salariosAnuales.length; i++) {
    salario = Number(salariosAnuales[i].value);
    if (salario != 0 && salario > maximoSalario) {
      maximoSalario = salario;
    }
  }
  return maximoSalario;
}

function obtenerMenorSalarioAnual(salariosAnuales) {
  let minimoSalario = Number(salariosAnuales[0].value); 

  let salario;
  for (let i = 1; i < salariosAnuales.length; i++) {
    salario = Number(salariosAnuales[i].value);
    if (salario != 0 && salario < minimoSalario) {
      minimoSalario = salario;
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
  let sumaSalariosMensuales = 0;

  for (let i = 0; i < salariosAnuales.length; i++) {
    salarioMensual[i] = Number(salariosAnuales[i].value) / MESES_DEL_ANIO;
    sumaSalariosMensuales += salarioMensual[i];
  }

  return sumaSalariosMensuales / salarioMensual.length;
}
