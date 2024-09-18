const persona = {
    nombre: "Pancho",
    apellido: "Diaz",
    edad: 25,
    dni_cedula: "2329384293",
};

console.log(persona);


console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.dni_cedula);
console.log(persona["dni_cedula"]);

persona.correo = "mageirjgae@correo.com";
console.log(persona);

persona.correo = "sortumerivera@correo.com"
console.log(persona);
   