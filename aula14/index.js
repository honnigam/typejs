// let num1 = 10.1351515125;
// let num2 = 2.5;

// console.log(num1.toString() + num2.toString()) //convertendo o valor temporariamente para string na função
// num1 = num1.toString()
// console.log(num1.toString(2))
// console.log(num1.toFixed(2)) //arendando com o toFixed - numeros
// console.log(Number.isInteger(num1)) //retorna um valor booleano - validando a solicitação Inteira
// let temp = num1 * '5'
// console.log(Number.isNaN(temp)) //se a conta passa ele retorna false porque o parametro é para validação do Number

// let num3 = 0.7
// let num4 = 0.1
// num3 += num4; // 0.8 //num3 = num 3 + num4 
// num3 += num4; // 0.9 
// num3 += num4; // 1.0 
// num3 += num4; // 1.1 

// // console.log(num3.toFixed(2)) //não resolve o problema de arrendondamento
// num3 = Number(num3.toFixed(2)) //estabelece a função como numero
// console.log(Number.isInteger(num3)) //checando se é um numero inteiro 
// console.log(num3)

//metodo usado para receber numeros grandes
let num5 = 0.7
let num6 = 0.1
//recebendo valores flutuantes e transformando em inteiros

num5 = (num5 * 100) + (num6 * 100); //0.8
console.log(num5.toFixed(5)) //mostrando o valor final com casas decimais diretas
console.log(Number.isInteger(num5)) //validando a função se é um valor inteiro