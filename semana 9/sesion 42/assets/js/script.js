 /*
 let letras = ["a", "b", "c", "a", "d", "e", "f", "a", "g", "h"];
 console.log(letras);

 console.log("indexOf");
 let indice = letras.indexOf("a");
 console.log(indice);
 console.log(letras.indexOf("d"));

 console.log(letras.indexOf("a", 4));

 console.log(letras.indexOf("X"));

 console.log("lastIndexOf");

 console.log(letras.lastIndexOf("a"));

 console.log(letras.lastIndexOf("a", 1));

 console.log("includes");
 console.log(letras.includes("c"));
 console.log(letras.includes("c",3));
 */

 let nums = [34, 65, 23, 45, 96, 143, 4, 56];
 console.log(nums);

 let coincidencia = nums.find((num) => num > 60);

 let coincidenciaIndex = nums.findIndex((num) => num > 60);

 let filtrado = nums.filter((num) => num > 60);

 console.log(coincidencia);
 console.log(coincidenciaIndex);
 console.log(filtrado);