/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $form = document.querySelector('#formulario-salarios-familiar');

const $botonAgregarIntegrante = $form['#agregar-integrante'];
const $botonQuitarIntegrante = $form['#quitar-integrante'];
const $botonCalcular = $form['#calculos'];

$botonAgregarIntegrante.onclick = function(){
    return false;
}

$botonQuitarIntegrante.onclick = function(){
    return false;
}

$botonCalcular.onclick = function(){
    
}