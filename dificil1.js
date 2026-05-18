function acumulada() 
{

   let numero = -1;
    let soma = 0;
    let quantidade = 0;

    while (numero !==0) {
        numero = Number(prompt('Numero (0=encerrar):'));
        if (numero !== 0) {
            soma += numero;
            quantidade++;
        }
    }
    let media = soma / quantidade;
    console.log('Soma: ' + soma);
    console.log('Quantidade: ' + quantidade);
    console.log('Media: ' + media);



}


