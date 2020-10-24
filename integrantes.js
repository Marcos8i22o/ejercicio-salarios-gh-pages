function agregarIntegrante() {
  const $integrante = document.createElement("li");
  const $salarioAnual = document.createElement("input");

  $salarioAnual.type = "number";
  $salarioAnual.placeholder = "Ingrese su salario anual";
  $salarioAnual.className = "salarios-anuales";

  $integrante.appendChild($salarioAnual);

  return $integrante;
}

function quitarIntegrante($integrantesTrabajadores) {
  $integrantesTrabajadores.removeChild($integrantesTrabajadores.firstChild);
}
