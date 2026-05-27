const prompt = require('prompt-sync')();

function dowhile() 
{
    let opcao;

    do {
        opcao = prompt(
            "=== MENU ===\n" +
            "1 - Jogar\n" +
            "2 - Configurações\n" +
            "3 - Sair\n" +
            "Escolha:"
        );
        console.log("Você escolheu: " + opcao);

    } while (opcao !== '3');

    console.log("Até logo!");
}