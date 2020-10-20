/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregarIntegrante = document.querySelector("#agregar-integrante");
const $botonQuitarIntegrante = document.querySelector("#quitar-integrante");
const $botonCalcular = document.querySelector("#calculos");

const $integrantesTrabajadores = document.querySelector(
  "#integrantes-trabajadores"
);

function mostrarResultados(id, valor) {
  document.querySelector(id).textContent += valor;
}

$botonAgregarIntegrante.onclick = function () {
  agregarIntegrante($integrantesTrabajadores);
  return false;
};

$botonQuitarIntegrante.onclick = function () {
  quitarIntegrante($integrantesTrabajadores);
  return false;
};

$botonCalcular.onclick = function () {
  const salariosAnuales = document.querySelectorAll(".salarios-anuales");
  const resultados = [];

  calcularSalarios(salariosAnuales, resultados);

  document.querySelector("#salarios").className = "";

  mostrarResultados("#mayor-salario-anual", resultados[0]);
  mostrarResultados("#menor-salario-anual", resultados[1]);
  mostrarResultados("#salario-anual-promedio", resultados[2]);
  mostrarResultados("#salario-mensual-promedio", resultados[3]);
};
