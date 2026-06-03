const prompt = require('prompt-sync')();

let alvo = Number(prompt("Entrada:"));
let i = 0
let lancamento = 0

    while (lancamento < alvo*10){
        i = i + 1 
        lancamento = alvo * i
        console.log(alvo , "X" , i , "=" , lancamento);

    }



