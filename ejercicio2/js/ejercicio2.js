function esEnteroPositivo(numero) {
    return Number.isInteger(numero) && numero >= 0;
}

while (true) {

    var n1 = parseInt(prompt("Introduce el primer número entero positivo:"));
    var n2 = parseInt(prompt("Introduce el segundo número entero positivo:"));
    var n3 = parseInt(prompt("Introduce el tercer número entero positivo:"));
    var n4 = parseInt(prompt("Introduce el cuarto número entero positivo:"));

    if (esEnteroPositivo(n1) && esEnteroPositivo(n2) && esEnteroPositivo(n3) && esEnteroPositivo(n4)) {
        if (n1 < n2 && n2 < n3 && n3 < n4) {
            alert("Los números están en orden creciente.");
        } else {
            alert("Los números no están en orden creciente.");
        }
    } else {
        console.error("Error: Debes ingresar cuatro números enteros positivos.");
    }
}
