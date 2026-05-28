const prompt = require('prompt-sync')();

let senha;
let tentativas = 0;

do {
    senha = prompt("Digite a senha:");
    tentativas++;

    if (senha !== "js2024" && tentativas < 3) {
        console.log("Senha incorreta. Tentativa "
                    + tentativas + " de 3.");
    }

} while (senha !== "js2024" && tentativas < 3);

if (senha === "js2024") {
    console.log("Acessó liberado!");
} else {
    console.log("Conta bloqueada após 3 tentativas.");
}
