////////*Monedas array y valores de cada uno*/////////

class Monedas {
  constructor (nombre, valor, pais, simbolo) {
    this.nombre = nombre;
    this.valor = valor;
    this.pais = pais;
    this.simbolo = simbolo;
  }
}
const Dolar = new Monedas ("Dolar Estadounidense", 104.61,"Estados Unidos", "U$D");
const Euro = new Monedas ("Euro", 118.19,"Europa", "€");
const PesoCl = new Monedas ("Peso Chileno",0.13,"Chile", "$");
const Libra = new Monedas ("Libra Esterlina", 141.33, "Reino Unido", "£");
const DolarCN = new Monedas ("Dolar Canadiense",82.95, "Canada", "C$");

const arregloMonedas = [];

arregloMonedas.push(Dolar, Euro, PesoCl, Libra, DolarCN);

////////*Creando el selector con los valores y nombres dentro del array*/////////

function init() {
 
  let select = document.createElement("select");
  select.setAttribute("id", "selectMonedas");

  let option1 = document.createElement("option");
  option1.setAttribute("value", `${Dolar.valor}`);
  option1.setAttribute("class", "selectOpcion1");
  let option1Texto = document.createTextNode(`${Dolar.nombre}`);
  option1.appendChild(option1Texto);

  let option2 = document.createElement("option");
  option2.setAttribute("value", `${Euro.valor}`);
  option2.setAttribute("class", "selectOpcion2");
  let option2Texto = document.createTextNode(`${Euro.nombre}`);
  option2.appendChild(option2Texto);

  let option3 = document.createElement("option");
  option3.setAttribute("value", `${PesoCl.valor}`);
  option3.setAttribute("class", "selectOpcion3");
  let option3Texto = document.createTextNode(`${PesoCl.nombre}`);
  option3.appendChild(option3Texto);

  let option4 = document.createElement("option");
  option4.setAttribute("value", `${Libra.valor}`);
  option4.setAttribute("class", "selectOpcion4");
  let option4Texto = document.createTextNode(`${Libra.nombre}`);
  option4.appendChild(option4Texto);

  let option5 = document.createElement("option");
  option5.setAttribute("value", `${DolarCN.valor}`);
  option5.setAttribute("class", "selectOpcion5");
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

////////// Mostrar el valor de la diviza seleccionada //////
function showValue () {
  var valores = document.getElementById("selectMonedas").value;
  document.getElementById("muestraCambio").innerHTML = "El valor del "+ selectMonedas[selectMonedas.selectedIndex].text +" es $" + valores;
}
////////// Evento cotizacion //////
function cotizar () {
var monto = document.getElementById("valorPeso").value;
var divisa = document.getElementById("selectMonedas").value;
var result = monto/divisa;
document.getElementById("resultadoTexto").innerHTML = "$"+result.toFixed(2) ;
localStorage.setItem("cambio usuario", result)
}
/////////// Evento valores table////////////

