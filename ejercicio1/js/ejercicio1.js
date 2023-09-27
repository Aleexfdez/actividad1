var numero = parseInt(prompt("Introduce un número positivo:"));
var sumatorio = 1;

function esPositivo() {
    if (numero > 0) {
        hacerSumatorio();
    } else {
        console.error("ERROR: Numero no positivo");
    }
}

function hacerSumatorio(numero) {
    for (var i = 1; i <= numero; i++) {
        sumatorio = sumatorio + i;
    }
}
hacerSumatorio();
alert(sumatorio);

// if(numero>0){
//     hacerSumatorio();
// }else{
//     console.error("ERROR: Numero no positivo");
//     }

