// Crea un objeto llamado "persona" con propiedades como nombre, edad y profesión. Luego, muestra cada una de las propiedades en la consola

const persona = {
    nombre: 'Antonio',
    edad: 43,
    profesion: 'chef',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

// Escribe un programa que simule un carrito de compras. Crea un objeto "carrito" que tenga propiedades como productos y total. Agrega varios productos al carrito y muestra el total.

const carrito = [{
    producto: 'Leche',
    total: 5,
},{
    producto: 'Harina',
    total: 7,
},{
    producto: 'Azucar',
    total: 2,
},{
    producto: 'Café',
    total: 4
},{
    producto: 'Jabón',
    total: 1,
}];

carrito.forEach(totalTodo => console.log(totalTodo.total));