////////*Monedas array y valores de cada uno*/////////

class Monedas {
  constructor(nombre, valor, pais, simbolo) {
    this.nombre = nombre;
    this.valor = valor;
    this.pais = pais;
    this.simbolo = simbolo;
  }
}
const Dolar = new Monedas("Dolar Estadounidense", 104.61, "Estados Unidos", "U$D");
const Euro = new Monedas("Euro", 118.19, "Europa", "€");
const PesoCl = new Monedas("Peso Chileno", 0.13, "Chile", "$");
const Libra = new Monedas("Libra Esterlina", 141.33, "Reino Unido", "£");
const DolarCN = new Monedas("Dolar Canadiense", 82.95, "Canada", "C$");

const arregloMonedas = [];

arregloMonedas.push(Dolar, Euro, PesoCl, Libra, DolarCN);

////////*Creando el selector con los valores y nombres dentro del array*/////////
let select = document.getElementById("selectorMoneda")
for (let moneda of arregloMonedas) {
  select.innerHTML += `
  <option value="${moneda.valor}" data-simbolo="${moneda.simbolo}">${moneda.nombre}</option>
  `
}
////////// Mostrar el valor de la diviza seleccionada //////
function showValue() {
  var select = document.getElementById("selectorMoneda");
  var selectedOption = select.options[select.selectedIndex];
  console.log(selectedOption)
  document.getElementById("muestraCambio").innerHTML = "El valor del " + selectedOption.text + " es " +selectedOption.dataset.simbolo + selectedOption.value;
}
////////// Evento cotizacion //////
function cotizar() {
  var monto = document.getElementById("valorPeso").value;
  var divisa = document.getElementById("selectorMoneda").value;
  var result = monto / divisa;
  var selectedOption = select.options[select.selectedIndex];
  document.getElementById("resultadoTexto").innerHTML = selectedOption.dataset.simbolo  + result.toFixed(2);
  localStorage.setItem("cambio usuario", result)
}
/////////// Evento valores table////////////

//////////efecto titulo//////////////
$(document).ready(documentReady);
function documentReady() {
  var characterCollection = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z"];
  var currentText = $(".effect-text-container h1").text();
  var currentTextCollection = new Array();
  var characterCount = 0;
  var characterSpeed = 80;
  pushCurrentTextChrachters();
  function pushCurrentTextChrachters() {
    for (var i = 0; i < currentText.length; i++) {
      var currentCharacter = currentText.slice(i, i + 1);
      currentTextCollection.push(currentCharacter);
    }
  }
  var characterCountIncreaseInterval = setInterval(characterCountIncrease, characterSpeed);
  function characterCountIncrease() {
    if (characterCount == currentTextCollection.length) {
      clearInterval(characterCountIncreaseInterval);
      clearInterval(setRandomTextInterval);
    }
    characterCount++;
  }
  function getRandomText() {
    var result = "";
    if (characterCount == 0) {
      for (var i = 0; i < currentTextCollection.length; i++) {
        var randomCharacter = characterCollection[Math.floor(Math.random() * characterCollection.length)];
        result += randomCharacter;
      }
    }
    else {
      result = currentText.slice(0, characterCount);
      for (var i = 0; i < currentTextCollection.length - characterCount; i++) {
        var randomCharacter = characterCollection[Math.floor(Math.random() * characterCollection.length)];
        result += randomCharacter;
      }
    }
    return result;
  }
  var setRandomTextInterval = setInterval(setRandomText, 50);
  function setRandomText() {
    $(".effect-text-container h1").text(getRandomText());
  }
}
/////////////////// agregar al array los inputs ////////////////

var button = document.querySelector(".btnAgregar");
button.addEventListener("click", function () {
  var inputNuevaMoneda = document.getElementById("inputNuevaMoneda").value;
  var inputNuevoValor = document.getElementById("inputNuevoValor").value;
  var inputNuevoPais = document.getElementById("inputNuevoPais").value;
  var inputNuevoSimbolo = document.getElementById("inputNuevoSimbolo").value;
  const nuevasMonedas = new Monedas(inputNuevaMoneda, inputNuevoValor, inputNuevoPais, inputNuevoSimbolo)
  arregloMonedas.push(nuevasMonedas)
  console.log(arregloMonedas)
  console.log(nuevasMonedas);
  /////////////////agregar al select los inputs //////////////////////////
  for (let Monedas of arregloMonedas) {
    select.innerHTML += `
  <option value="${nuevasMonedas.valor}" data-simbolo="${nuevasMonedas.simbolo}">${nuevasMonedas.nombre}</option>
  `
    break
  }
});
// constructor cryptomoneda

class cryptomoneda {
  constructor(id, nombre, precio, compraUsd, compraCrypto) {
    this.id = id;
    this.nombre = nombre; 
    this.precio = parseFloat(precio);
    this.compraUsd = compraUsd;
    this.compraCrypto = compraCrypto;
  }
}

/////////////////// api de criptomonedas//////////////////////

const Cryptos = [];

fetch("https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2CMonero%2CCardano%2CSolana%2CPolkadot%2CDogecoin&vs_currencies=USD&include_24hr_change=true")

  .then((response) => response.json())

  .then((data) => {

    var cryptosId = Object.keys(data);

    var values = Object.values(data);


    for (let i = 0; i < cryptosId.length; i++) {

      Cryptos.push(new cryptomoneda(undefined, cryptosId[i], values[i].usd));

    }
    for (let i = 0; i < Cryptos.length; i++) {
      let selectCrypto = document.querySelector('#selectCrypto');
      let option = document.createElement('option');
      option.value = i;

      option.innerHTML += `${Cryptos[i].nombre}`;
      selectCrypto.appendChild(option);

    }
  });

const nombreCrypto = document.querySelector('#selectCrypto').nombre;

const cryptoSelected = document.querySelector('#selectCrypto');

cryptoSelected.addEventListener('change', (seleccionCrypto) => {

  let precioCrypto = Cryptos[seleccionCrypto.target.value].precio;

  document.querySelector("#valorCrypto").value = precioCrypto;
})


//////////////calcular compra///////////////////////
function cotizarCrypto() {
  var valorCrypto = document.getElementById("valorCrypto").value;
  var monto = document.getElementById("valorPeso").value;
  var divisa = document.getElementById("selectorMoneda").value;
  var result = monto / divisa;
  var result = result / valorCrypto;
  document.getElementById("resultadoTextoCrypto").innerHTML = "C$" + result.toFixed(6);
}


//////////////calculadora///////////////////

var input = document.getElementById('inputCalculator'), 
  number = document.querySelectorAll('.numbers div'), 
  operator = document.querySelectorAll('.operators div'), 
  result = document.getElementById('result'), 
  clear = document.getElementById('clear'), 
  resultDisplayed = false; 

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      console.log("enter a number first");
    } else {
      input.innerHTML += e.target.innerHTML;
    }

  });
}

result.addEventListener("click", function() {

  var inputString = input.innerHTML;

  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0].toFixed(2);

  resultDisplayed = true; 
});

clear.addEventListener("click", function() {
  input.innerHTML = "";
})


////////////////graph chart//////////////////
const actions = [
  {
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
      });
      chart.update();
    }
  },
  {
    name: 'Add Dataset',
    handler(chart) {
      const data = chart.data;
      const dsColor = Utils.namedColor(chart.data.datasets.length);
      const newDataset = {
        label: 'Dataset ' + (data.datasets.length + 1),
        backgroundColor: Utils.transparentize(dsColor, 0.5),
        borderColor: dsColor,
        data: Utils.numbers({count: data.labels.length, min: -100, max: 100}),
      };
      chart.data.datasets.push(newDataset);
      chart.update();
    }
  },
  {
    name: 'Add Data',
    handler(chart) {
      const data = chart.data;
      if (data.datasets.length > 0) {
        data.labels = Utils.months({count: data.labels.length + 1});

        for (let index = 0; index < data.datasets.length; ++index) {
          data.datasets[index].data.push(Utils.rand(-100, 100));
        }

        chart.update();
      }
    }
  },
  {
    name: 'Remove Dataset',
    handler(chart) {
      chart.data.datasets.pop();
      chart.update();
    }
  },
  {
    name: 'Remove Data',
    handler(chart) {
      chart.data.labels.splice(-1, 1); // remove the label first

      chart.data.datasets.forEach(dataset => {
        dataset.data.pop();
      });

      chart.update();
    }
  }
];
// </block:actions>

// <block:setup:1>
const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: 'Dataset 2',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    }
  ]
};
// </block:setup>

// <block:config:0>
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  },
};
// </block:config>

module.exports = {
  actions: actions,
  config: config,
};