// Crea un array de objetos, donde cada objeto represente a una persona con propiedades como nombre, edad y profesión. Muestra en la consola la profesión de cada persona en el array.

const persona = [{
    nombre: 'Luciana',
    edad: 10,
    profesion: 'Estudiante',
},{
    nombre: 'Luis',
    edad: 19,
    profesion: 'Chef',
},{
    nombre: 'Maricela',
    edad: 48,
    profesion: 'Doctora',
},{
    nombre: 'Alberto',
    edad: 28,
    profesion: 'Programador',
},{
    nombre: 'Karol',
    edad: 35,
    profesion: 'Odontóloga',
}]

persona.forEach(persona => console.log(persona.profesion));