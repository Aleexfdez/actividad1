while (true) {
    var numero = parseInt(prompt("Introduce un número entero positivo:"));

    if (!isNaN(numero) && numero >= 0) {
        var sumatorio = 0;
        for (var i = 1; i <= numero; i++) {
            sumatorio += i;
        }
        console.log("El sumatorio de " +numero + " es " + sumatorio);
        break;
    } else {
        console.error("Error: El número tiene que ser positivo");
    }
}