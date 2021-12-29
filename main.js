let question = prompt ("hola! puedo hacerles un truco?");
console.log (question);
alert ("bueno empecemos");

let question1 = prompt ("elegi un numero del 1 al 10");
console.log (question1);
alert ("uno dificil...");
let question2 = prompt ("ahora sumale 5");
console.log (question2 );
alert ("excelente!");
let question3  = prompt ("ahora... multiplicalo por 2");
console.log (question3);
alert ("se te complicaron las cuentas?");
let question4 = prompt ("a lo que quedo, restale 4");
console.log (question4);
alert ("no me hagas trampa eh");
let question5 = prompt ("ahora dividilo por 2");
console.log (question5);
alert ("ya casi estamos");
let question6 = prompt ("y a lo que te quedo restale el numero que pensaste");
console.log (question6);
alert ("listo?");
let question7= prompt ("el resultado es 3");
console.log (question7);
alert ("aprobe?");
let nota = prompt ("mi nota es..");
if (nota == "") {
    alert ("pongame una nota!!!")
}
console.log (nota);
if (nota <= 5 ) {
    alert ("tan mal me fue?")
}
if (nota <= 7 ) {
    alert ("no le costaba nada el 10...")
}
if (nota >= 1000) {
    alert ("bueno tampoco me fue tan bien...")
}
else {
    alert ("gracias por el " + nota)
}