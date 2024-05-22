const persona = {
    //clave y valor
    name: 'Adrián',
    lastName: 'Gamarra',
    isWorking: false,
    age: 17,
    dogs: ['Lola'],
    walk: () => {
        return "Hola, estoy caminando"
    },
};

console.log(persona.age); // Accedemos a la propiedad
console.log(persona["name"]); // Accedemos a la propiedad
persona.pepito = 'pepito'; // Agregamos una nueva propiedad
delete persona.age; //Borra la propiedad deseada

console.log(persona);