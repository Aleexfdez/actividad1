const MAXIMO = 100;
const MINIMO = 1;
var numero = parseInt(prompt("Introduce un número entero entre 1 y 100: "));

if (numero >= MINIMO && numero <= MAXIMO) {

    var mensaje = `El número ${numero} `;

    if (numero % 2 === 0) {
        mensaje += "es divisible entre 2. ";
    }

    if (numero % 3 === 0) {
        mensaje += "es divisible entre 3. ";
    }

    if (numero % 5 === 0) {
        mensaje += "es divisible entre 5. ";
    }

    if (numero % 10 === 0) {
        mensaje += "es divisible entre 10. ";
    } else {
        mensaje += "no es divisible entre 2, 3, 5, 10.";
    }

    alert(mensaje);
} else {
    alert("El número tiene que estar entre 1 y 100.");
}
