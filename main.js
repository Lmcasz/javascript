////////*Monedas array y valores de cada uno*/////////

class Monedas {
  constructor (nombre, valor, pais) {
    this.nombre = nombre;
    this.valor = valor;
    this.pais = pais;
  }
}
const Dolar = new Monedas ("Dolar", 104.61,"Estados Unidos");
const Euro = new Monedas ("Euro", 118.19,"Estados Unidos");
const PesoCl = new Monedas ("Peso Chileno",0.13,"Chile");
const Libra = new Monedas ("libra", 141.33, "Reino Unido");
const DolarCN = new Monedas ("Dolar Canadiense",82.95, "Canada");

const arregloMonedas = [];

arregloMonedas.push(Dolar, Euro, PesoCl, Libra, DolarCN);

////////*Creando el selector con los valores y nombres dentro del array*/////////

function init() {
 
  let select = document.createElement("select");
  select.setAttribute("id", "selectMonedas");

  let option1 = document.createElement("option");
  option1.setAttribute("value", `${Dolar.valor}`);
  let option1Texto = document.createTextNode(`${Dolar.nombre}`);
  option1.appendChild(option1Texto);

  let option2 = document.createElement("option");
  option2.setAttribute("value", `${Euro.valor}`);
  let option2Texto = document.createTextNode(`${Euro.nombre}`);
  option2.appendChild(option2Texto);

  let option3 = document.createElement("option");
  option3.setAttribute("value", `${PesoCl.valor}`);
  let option3Texto = document.createTextNode(`${PesoCl.nombre}`);
  option3.appendChild(option3Texto);

  let option4 = document.createElement("option");
  option4.setAttribute("value", `${Libra.valor}`);
  let option4Texto = document.createTextNode(`${Libra.nombre}`);
  option4.appendChild(option4Texto);

  let option5 = document.createElement("option");
  option5.setAttribute("value", `${DolarCN.valor}`);
  let option5Texto = document.createTextNode(`${DolarCN.nombre}`);
  option5.appendChild(option5Texto);

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);
  select.appendChild(option5);

  let selectContenedor = document.getElementById("selectorMoneda");
  selectContenedor.appendChild(select);


}
window.onload = init;

function showValue () {
  var valores = document.getElementById("selectMonedas").value;
  document.getElementById("muestraCambio").innerHTML = "El valor de la moneda seleccionada es "+ valores;
console.log(valores)}


