var dolarValor = prompt("cuanto vale el dolar en tu pais?");

var cambiar = prompt("cuanto queres cambiar?");

let resultado = 0;
function moneda (nombre, valor, pais) {
  this.nombre=nombre;
  this.valor=valor;
  this.pais=pais;
}
var dolar = new moneda ("dolar", dolarValor, "USA");

function convertir(dolarValor, cambio) {
  resultado = cambiar / dolarValor;
  alert("te van a dar : U$D " + resultado.toFixed(2));
  if (resultado >= 0) {
    console.log(dolar)
  }
}
convertir(dolarValor, cambiar);