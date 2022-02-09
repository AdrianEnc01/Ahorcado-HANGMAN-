eventTarget.addEventListener("keydown", compararLetra(logKey));

function agregarPalabras() {
  nuevaPalabra = document.getElementById("input-nueva-palabra").value;

  if (/[A-Z]/.test(nuevaPalabra)) {
    arrayDiccionario.push(nuevaPalabra);
    indiceDiccionario = indiceDiccionario + 1;

    document.getElementById("input-nueva-palabra").value = "";
    document.getElementById("input-nueva-palabra").placeholder =
      "La palabra fue agregada correctamente";
  } else {
    document.getElementById("input-nueva-palabra").value = "";
    document.getElementById("input-nueva-palabra").placeholder =
      "Solo se permiten letras mayusculas";
  }
}
