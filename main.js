//esquema de cuantas veces comer tu comida favorita al mes//
let comida = prompt ("cual es tu comida favorita?");
console.log (comida);
let mes = 30;
for (i=1; i <= mes; i++) {
    console.log (comida)
    console.log (i)
    if(( i % 7 ) == 0){
    console.log (`hoy es el dia ${i} y no se come ${comida}`)
    }
else{
	console.log (`hoy es el dia ${i} y se come ${comida}`)

}
}