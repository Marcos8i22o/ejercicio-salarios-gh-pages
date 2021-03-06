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


$botonAgregarIntegrante.onclick = function () {
  const $integranteNuevo = agregarIntegrante($integrantesTrabajadores);
  $integrantesTrabajadores.appendChild($integranteNuevo);

  return false;
};

$botonQuitarIntegrante.onclick = function () {
  quitarIntegrante($integrantesTrabajadores);
  return false;
};

$botonCalcular.onclick = function () {
  const salariosAnuales = document.querySelectorAll(".salarios-anuales");
  
  const salariosCalculados = calcularSalarios(salariosAnuales);

  document.querySelector("#salarios").className = "";

  document.querySelector("#mayor-salario-anual").textContent = salariosCalculados.mayorSalario;
  document.querySelector("#menor-salario-anual").textContent = salariosCalculados.menorSalario;
  document.querySelector("#salario-anual-promedio").textContent = salariosCalculados.anualPromedio;
  document.querySelector("#salario-mensual-promedio").textContent = salariosCalculados.mensualPromedio;
};
