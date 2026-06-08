const prompt = require('prompt-sync')();

let soma = 0 
let qtde = 0 
let n = Number(prompt("Informe o valor de n: ")) 

console.log("Múltiplos de 3 de 1 até " + n)

for(let i=1;i<=n;i++){
if (i % 3 == 0){
console.log(i)
soma = soma + i
qtde++

}

}
if(qtde == 0){
    console.log("Não tem múltiplo de 3")
}
else{
    console.log("Soma: " + soma)
    console.log("Qtde: " + qtde)
}