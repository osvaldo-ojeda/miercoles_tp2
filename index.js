// tipos de datos

// datos primitivos

// String
let nombre = "Canela";
// console.log(`🚀 ~ nombre:`, nombre, typeof nombre);

// Number
let edad = 12;
edad = 13;
// console.log(`🚀 ~ edad:`, edad, typeof edad);

// Boolean
let estaVivo = true; // false
// console.log(`🚀 ~ estaVivo:`, estaVivo, typeof estaVivo);

// undefined
let und;
// console.log(`🚀 ~ und:`, und, typeof und);

// null
let nl = null;
// console.log(`🚀 ~ nl:`, nl, typeof nl);

// BigInt
let bg = 2n;
// console.log(`🚀 ~ bg:`, bg, typeof bg);

//symbol
let sym1 = Symbol(2);
// console.log(`🚀 ~ sym1:`, typeof sym1);

// datos complejos

// Array
const arreglo = [1, "hola", 3n, [1, 2, 3]];
// console.log(`🚀 ~ arreglo:`, arreglo);
arreglo[0] = 0;
arreglo[4] = 3;
arreglo.push("string");
// console.log(`🚀 ~ arreglo:`, arreglo);
// console.log(`🚀 ~ arreglo:`, typeof arreglo);

// objetos literales

const obj = {
  nombre: "Camilo",
  edad: 13,
  jueguetes: {},
};

let isAlive = "vivo";
obj["nombre"] = "jaco";
obj[isAlive] = false;

obj.edad = 17;
obj.muerde = "si";

// console.log(`🚀 ~ obj:`, obj);
// console.log(`🚀 ~ obj:`, typeof obj);

// Date

const date = Date();
// console.log(`🚀 ~ date:`, date);
// console.log(`🚀 ~ date:`, typeof date);

// new Date
const nDate = new Date();
// console.log(`🚀 ~ nDate:`, nDate);
// console.log(`🚀 ~ nDate:`, typeof nDate);

// function
saludar();
function decirHola() {
  console.log("hola");
}
// decirHola();

function saludar(nombre) {
  //   console.log(`hola ${nombre}`);
}
saludar("ricky martin");
// console.log(`🚀 ~ saludar ~ saludar:`, saludar("Pedro"));

// let clg=console.log("que onda?")
// console.log(clg)

function sumar(n1, n2) {
  //   console.log(this);
  return n1 + n2;
}

const suma1 = sumar(3, 4);
// console.log(`🚀 ~ suma1:`, suma1);
const sumar2 = function (n1, n2) {
  return n1 + n2;
};

// console.log(sumar2(4, 5));

// arrow functions

const multiplicar = (n1, n2) => {
  return n1 * n2;
};

// const multiplicar = (n1, n2) =>n1 * n2;
// console.log(`🚀 ~ multiplicar ~ multiplicar:`, multiplicar(4, 5));

let calle1 = "calle 123";
let calle2 = calle1;

// console.log(`🚀 ~ calle1:`, calle1)
// console.log(`🚀 ~ calle2:`, calle2)

calle2 = "calle 456";
// console.log(`🚀 ~ calle2:`, calle2)
// console.log(`🚀 ~ calle1:`, calle1)

const data = {
  nombre: "osval",
  apellido: "ojeda",
  deportes: [],
  date: new Date(),
};
console.log(`🚀 ~ data:`, data);
// esto nunca
// const info=data

// // copia manual
// const info={
//      nombre:data.nombre,
//      apellido:data.apellido
// }

// copia spread
const info = { ...data, deportes: [...data.deportes] };
info.deportes.push("tenis");

// deep copy
// const info=JSON.parse(JSON.stringify(data))
// info.deportes.push("tenis")

// structuredClone
// const info =structuredClone(data)
// info.deportes.push("tenis")

info.nombre = "Pedro";
console.log(`🚀 ~ info:`, info);
console.log(`🚀 ~ data:`, data);
