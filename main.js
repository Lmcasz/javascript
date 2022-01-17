var dolarValor = prompt ("cuanto vale el dolar en tu pais?");
console.log (dolarValor)
var cambio = prompt ("cuanto queres cambiar?")
let resultado = 0;
  function convertir () {
    resultado = cambio/dolarValor ;
}
convertir (dolarValor, cambio);
alert("te van a dar : U$D " + resultado);