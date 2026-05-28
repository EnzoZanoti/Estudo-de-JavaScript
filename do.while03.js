const prompt = require('prompt-sync')();

let continuar;

do {
    let a = Number(prompt("Primeiro número:"));
    let b = Number(prompt("Segundo número:"));

    console.log("Soma:      " + (a + b));
    console.log("Subtracao: " + (a - b));
    console.log("Produto:   " + (a * b));

    if (b !== 0) {
        console.log("Divisao:   " + (a / b));
    } else {
        console.log("Divisao:   impossível (divisão por zero)");
    }

    continuar = prompt("Calcular de novo? (s/n)");

} while (continuar === "s" || continuar === "S");

console.log("Calculadora encerrada.");
