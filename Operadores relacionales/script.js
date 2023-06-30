let a = 5;
let b = 5;
let c = 7;
let d = 8;


let res = a == b;
let res1 = a == c;
let res2 = a == c+1==d;

console.log(res);
console.log(res1);
console.log("este es el resultado: "+res2);

Math.round();//redondea al nomero mayor
Math.floor();//redondea al numero menor
Math.ceil();//redondea al numero mas cercano

//se usa para validar o verificar que el valor sea identico 
let identicos = 3 === 3;
console.log(identicos);

let noIdenticos = "Hola" !== "Hola";
console.log(noIdenticos);

var mayorMenor = b>c;
var mayorMenor = a<d;
console.log("Mayor que "+mayorMenor);
console.log("Menor que "+mayorMenor);