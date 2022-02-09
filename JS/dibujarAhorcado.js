
function dibujar() {
    var pantalla = document.querySelector("canvas");
    var dibujo = pantalla.getContext("2d");
  
    if (intentos == 6) {
      dibujo.beginPath();
      dibujo.moveTo(150, 100);
      dibujo.lineTo(150, 50);
      dibujo.lineTo(300, 50);
      dibujo.lineTo(300, 300);
      dibujo.lineTo(250, 300);
      dibujo.lineTo(350, 300);
      dibujo.lineWidth = 5;
      dibujo.strokeStyle = "white";
      dibujo.stroke();
      dibujo.closePath();
    }
  
    if (intentos == 5) {
      dibujo.beginPath();
      dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
      dibujo.strokeStyle = "white";
      dibujo.lineWidth = 5;
      dibujo.stroke();
      dibujo.closePath();
    }
    if (intentos == 4) {
      dibujo.beginPath();
      dibujo.moveTo(150, 180);
      dibujo.lineTo(150, 250);
      dibujo.strokeStyle = "white";
      dibujo.lineWidth = 5;
      dibujo.stroke();
      dibujo.closePath();
    }
    if (intentos == 3) {
      dibujo.beginPath();
      dibujo.moveTo(120, 220);
      dibujo.lineTo(150, 180);
      dibujo.strokeStyle = "white";
      dibujo.lineWidth = 5;
      dibujo.stroke();
      dibujo.closePath();
    }
    if (intentos == 2) {
      dibujo.beginPath();
      dibujo.moveTo(120, 220);
      dibujo.lineTo(150, 180);
      dibujo.lineTo(180, 220);
      dibujo.strokeStyle = "white";
      dibujo.lineWidth = 5;
      dibujo.stroke();
      dibujo.closePath();
    }
    if (intentos == 1) {
      dibujo.beginPath();
      dibujo.moveTo(120, 290);
      dibujo.lineTo(150, 250);
      dibujo.strokeStyle = "white";
      dibujo.lineWidth = 5;
      dibujo.stroke();
      dibujo.closePath();
    }
    if (intentos == 0) {
      dibujo.beginPath();
      dibujo.moveTo(120, 290);
      dibujo.lineTo(150, 250);
      dibujo.lineTo(180, 290);
      dibujo.strokeStyle = "white";
      dibujo.lineWidth = 5;
      dibujo.stroke();
      dibujo.closePath();
  
      document.getElementById("palabraSecreta").textContent =palabraSecreta;
      document.getElementById("cantdeIntentos").textContent = "Fin del Juego";
      document.getElementById("cantdeIntentos").id = "cantdeIntentosRojo";
  
      document.getElementById("restantes").textContent = "";
  
      document.getElementById("input-texto").value = "";
      document.getElementById("input-texto").placeholder = "Fin del juego";
  
      document.getElementById("input-texto").disabled = true;
    }
  }