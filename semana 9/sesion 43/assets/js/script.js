const nums = [1, 2, 3, 4, 5]
console.log(nums);

let suma = nums.reduce((a, b) => a + b, 0);

console.log(suma);

let multiplicacion = nums.reduce((a, b) => a * b, 1);
console.log(multiplicacion);

let puntos = [11, 2, 1, 21, 23, 10];
console.log(puntos);

puntos.sort();
console.log(puntos);

puntos.sort((a, b) => a - b);
console.log(puntos);

const arr = [true, 1, "hola", 54.76, "a"];
console.log(arr);

arr.reverse();
console.log(arr);

console.log("split");
const frase = "Hola buenos dias a todas";
console.log(frase);

let palabras = frase.split(" ");
console.log(palabras);

const csv = "Perú, Argentina, Chile, Colombia";
console.log(csv);

let paises = csv.split(",");
console.log(paises);

console.log("join");

let strPalabras = palabras.join(" ");
console.log(strPalabras);

let strPaises = paises.join();
console.log(strPaises);