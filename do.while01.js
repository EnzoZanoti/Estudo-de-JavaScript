// 1. Criamos uma variável geral para guardar a nossa função de prompt
let lerEntrada;

// 2. O JavaScript verifica: "O objeto 'window' (a janela do navegador) existe aqui?"
if (typeof window !== "undefined") {
    // Se existir, estamos no navegador! Usamos o prompt nativo.
    lerEntrada = prompt; 
} else {
    // Se não existir, estamos no terminal escuro do Node.js. Puxamos o pacote.
    lerEntrada = require('prompt-sync')();
}

function dowhile() {
    let opcao;

    do {
        // 3. Agora usamos a nossa variável 'lerEntrada' no lugar de 'prompt'
        opcao = lerEntrada(
            "=== MENU ===\n" +
            "1 - Jogar\n" +
            "2 - Configurações\n" +
            "3 - Sair\n" +
            "Escolha: "
        );
        console.log("Você escolheu: " + opcao);

    } while (opcao !== '3');

    console.log("Até logo!");
}

// 4. Ativa a função
dowhile();

