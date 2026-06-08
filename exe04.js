//Escreva um programa que solicite ao usuário uma nota de 0 a 10 (com casas decimais permitidas). Enquanto o valor digitado for inválido (menor que 0 ou maior que 10), o programa deve exibir uma mensagem de erro e solicitar o valor novamente. Após receber uma nota válida, exiba a situação do aluno: Aprovado (nota >= 7), Recuperação (nota >= 5) ou Reprovado (nota < 5).//

const prompt = require('prompt-sync')();

let numero = 0

do{
    numero = Number(prompt("Digite um número entre 0 a 10: "))

    if ( numero < 0 || numero > 10){
       console.log("Nota inválida. Digite um valor entre 0 e 10.") 
    }

}while(numero < 0 || numero > 10)

    if ( numero >=7){
       console.log("Aprovado") 
    }else{ if ( numero >= 5){

       console.log("Recuperação") 
    }else{
            if ( numero < 5){
       console.log("Reprovado") 

        }
      }
    }

    