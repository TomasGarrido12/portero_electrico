function init() {
  var piso = document.getElementById("piso");
  var cero = document.getElementById("cero");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var borrar = document.getElementById("borrar");

  uno.onclick = function (e) {
    piso.textContent = piso.textContent + "1";
  };
  dos.onclick = function (e) {
    piso.textContent = piso.textContent + "2";
  };
  tres.onclick = function (e) {
    piso.textContent = piso.textContent + "3";
  };
  cuatro.onclick = function (e) {
    piso.textContent = piso.textContent + "4";
  };
  cinco.onclick = function (e) {
    piso.textContent = piso.textContent + "5";
  };
  seis.onclick = function (e) {
    piso.textContent = piso.textContent + "6";
  };
  siete.onclick = function (e) {
    piso.textContent = piso.textContent + "7";
  };
  ocho.onclick = function (e) {
    piso.textContent = piso.textContent + "8";
  };
  nueve.onclick = function (e) {
    piso.textContent = piso.textContent + "9";
  };
  cero.onclick = function (e) {
    piso.textContent = piso.textContent + "0";
  };
  borrar.onclick = function (e) {
    resetear();
  };
}

function resetear() {
  piso.textContent = "";
}
