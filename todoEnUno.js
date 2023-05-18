// Crea un programa que solicite al usuario un número y luego muestre en la consola todos los números pares menores o iguales a ese número.

const numero = 20;

for(let i = numero; i >= 0; i -= 2) {
    if(i < 0) {
        break
    } else {
    console.log(i);
    }
}

// Escribe un programa que simule un juego de adivinanzas. Genera un número aleatorio entre 1 y 10 y pide al usuario que lo adivine. Muestra un mensaje indicando si el usuario acertó o no.

const numeropensado = Math.round(Math.random()*10);
const numerolanzado = 1;

if (numeropensado == numerolanzado) {
    console.log("Usted ha acertado, el número pensado era " + numeropensado);
} else {
    console.log("Usted ha errado");
}