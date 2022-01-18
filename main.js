var dolarValor = prompt ("cuanto vale el dolar en tu pais?");
console.log (dolarValor)
var cambio = prompt ("cuanto queres cambiar?")
let resultado = 0;
  function convertir (dolarValor, cambio) {
    resultado = cambio/dolarValor ;
    alert("te van a dar : U$D " + resultado);
}
convertir (dolarValor, cambio);