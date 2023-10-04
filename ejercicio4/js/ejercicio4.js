var operador1 = parseInt(prompt("Introduce el primer número: "));
var operador2 = parseInt(prompt("Introduce el segundo número: "));
var operación = parseInt(prompt("¿Qué quieres hacer? -> SUMAR= + |  RESTAR= - | MULTIPLICAR= * | DIVIDIR= /"));
var resultado = 0;

switch (operación) {
    case "+":
        resultado = operador1 + operador2;
        break;
    case "-":
        resultado = operador1 - operador2;
        break;
    case "*":
        resultado = operador1 * operador2;
        break;
    case "/":
        resultado = operador1 / operador2;
        break;
    default:
        resultado = "Operación no váida";
        break;
}
console.log(resultado);

