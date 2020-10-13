var piso;
var pisoIngresado;
var departamento;
var departamentoIngresado;

function init() {
  piso = document.getElementById("piso");
  departamento = document.getElementById("dpto");
  pisoIngresado = new Array();
}

function tomarDigito(digito) {
  if (pisoIngresado.length == 0) {
    pisoIngresado.push(digito);
    piso.textContent = digito;
  } else {
    if (pisoIngresado.length == 1) {
      pisoIngresado.push(digito);
      piso.textContent = getPisoIngresado();
      verificarQueElPisoIngresadoSeaValido();
    } else {
      departamentoIngresado = digito;
      departamento.textContent = digito;
    }
  }
}

function verificarQueElPisoIngresadoSeaValido() {
  if (!esValidoElPisoIngresado()) {
    document.getElementById(
      "quePisoEs"
    ).textContent = "El piso ingresado ".concat(
      getPisoIngresado(),
      " no es valido"
    );
  }
}

function esValidoElPisoIngresado() {
  return getPisoIngresado() <= 48;
}

function getPisoIngresado() {
  return pisoIngresado[0] * 10 + pisoIngresado[1];
}

function borrar() {
  piso.textContent = "";
  departamento.textContent = "";
  pisoIngresado = [];
  document.getElementById("quePisoEs").textContent = "";
  departamentoIngresado = null;
}

function llamar() {
  document.getElementById("quePisoEs").textContent =
    "Llamando al piso " +
    getPisoIngresado() +
    ", dpto " +
    departamentoIngresado;
}
