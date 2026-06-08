// Ativando o prompt para o terminal do VS Code
const prompt = require('prompt-sync')();

// Variáveis simples (sem vetores)
let numero;
let contador = 0;

do {
    // 1. Lê a entrada e converte o texto digitado para um número inteiro
    numero = parseInt(prompt("Digite um número (0 para sair): "));

    // 2. Garante que o 0 (nosso valor sentinela) não seja contado nem exibido
    if (numero !== 0) {
        console.log("Você digitou: " + numero);
        contador++; // Acumula a contagem
    }

// 3. A verificação ocorre no final. Se for 0, o laço é encerrado.
} while (numero !== 0);

// 4. Exibe o resultado final após o encerramento do laço
console.log("Total de números digitados: " + contador);



