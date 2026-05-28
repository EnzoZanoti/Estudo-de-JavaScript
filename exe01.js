const prompt = require('prompt-sync')();

let lancamento = Number(prompt("Entrada:"));

do {
    lancamento--;

    if (lancamento !==0){
    console.log("Saída:" + lancamento);}
    

} while (lancamento !== 0);

    if (lancamento == 0){
        console.log("Saída: Lançamento!");
    }else{console.log("Saída:" + lancamento);};


