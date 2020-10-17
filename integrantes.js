function agregarIntegrante($integrantesTrabajadores) {
  

  const $integrante = document.createElement("li");
  const $salarioAnual = document.createElement("input");

  $salarioAnual.type = "number";
  $salarioAnual.placeholder = "Ingrese su salario anual";

  $integrante.appendChild($salarioAnual);
  $integrantesTrabajadores.appendChild($integrante);
}

function quitarIntegrante($integrantesTrabajadores) {
  $integrantesTrabajadores.removeChild($integrantesTrabajadores.firstChild);
}

