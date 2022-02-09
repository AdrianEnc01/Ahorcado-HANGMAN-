var palabraSecreta;
var palabraPantalla;
var letrasElegidas = "";

var arrayPalabraSecreta;
var arrayPalabraPantalla;

var cantdeLetras;
var letra;
var intentos = 6;

var indice;
var indiceDiccionario = 12;
var arrayDiccionario = [
  "FUNCION","METODO","VARIABLE","ALGORITMO","LOGICA",
  "BUCLE","BUG", "BANNER", "CACHE", "BYTE", "JAVA", "JAVASCRIPT", "ENCAPSULAR"

];

function elegirPalabra() {
  (indice = Math.round(Math.random() * indiceDiccionario)), 0;

  palabraSecreta = arrayDiccionario[indice];

  cantdeLetras = palabraSecreta.length;

  arrayPalabraSecreta = Array.from(palabraSecreta);
  palabraPantalla = "_".repeat(cantdeLetras);
  arrayPalabraPantalla = Array.from(palabraPantalla);

  document.getElementById("palabraSecreta").textContent = " _ ".repeat(
    cantdeLetras
  );

  document.getElementById("cantdeIntentos").textContent = intentos;

  document.getElementById("letrasElegidas").textContent = "Letras Elegidas:" + letrasElegidas;
  
}

function compararLetra() {
  letra = document.getElementById("input-texto").value;

  if (/[A-Z]/.test(letra)) {
    if (palabraSecreta.includes(letra)) {
      for (i = 0; i < cantdeLetras; i++) {
        if (arrayPalabraSecreta[i] == letra) {
          arrayPalabraPantalla[i] = letra;

          document.getElementById("palabraSecreta").textContent =
            arrayPalabraPantalla.join(" ");

          palabraPantalla = arrayPalabraPantalla.join("");

          document.getElementById("input-texto").value = "";
          document.getElementById("input-texto").placeholder =
            "Escriba otra letra";

          if (palabraPantalla == palabraSecreta) {
            document.getElementById("palabraSecreta").textContent = palabraSecreta;

            document.getElementById("cantdeIntentos").textContent = "Haz adivinado la palabra secreta!!";

            document.getElementById("cantdeIntentos").id = "cantdeIntentosVerde";
            document.getElementById("restantes").textContent = "";
            document.getElementById("input-texto").value = "";
            document.getElementById("input-texto").placeholder ="Fin del juego";
            document.getElementById("input-texto").disabled = true;
          }
        }
      }
    } else {
      if (!letrasElegidas.includes(letra)) {
        letrasElegidas = letrasElegidas + letra;
        document.getElementById("letrasElegidas").textContent = "Letras Elegidas:" + letrasElegidas;

        intentos = intentos - 1;
        console.log(intentos);

        document.getElementById("cantdeIntentos").textContent = intentos;

        document.getElementById("input-texto").value = "";

        dibujar();
      } else {
        document.getElementById("input-texto").value = "";
        document.getElementById("input-texto").placeholder = "Esa letra ya fue elegida";
      }
    }
  } else {
    document.getElementById("input-texto").value = "";
    document.getElementById("input-texto").placeholder = "Ingrese solo mayusculas";
  }
}
function jugardeNuevo() {

  location.reload() 

}

function evitarRecarga(event) {
  event.preventDefault();
  return false;
}