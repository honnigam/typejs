/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) 
VALORES COPIADOS
*/

// let nome = 'Lucas'
// nome = 'Barcelos' // muda porque só referencia como um adesivo
// nome[0] = 'R' //não é mudado, porque é imutável
// console.log (nome)

// let a = 'A'
// let b = a //a e b recebem A pois está copiando - independentes 
// console.log (a,b)

// a = 'Outra coisa'
// console.log (a, b) //a é outro valor | b tem o mesmo valor de a ainda

/* 
Referencia (mutável) - arrays, object e functions 
VALORES PASSADOS POR REFERENCIA  
*/

let a = [1,2,3] //dado passado por referencia - quando alterado, altera em tudo
let b = a 
console.log(a,b)

a.push(4)
console.log(a) //se ler B, também foi afetado pois altera diretamente o valor na memória
console.log (a,b)

b.pop();
console.log(a,b) //quando retirado, retira em tudo, pois está apontando diretamente na memória

let c = b //C apontando pra B que aponta pra A 
console.log(c)
a.push('Luiz') //adicionando uma string em A
console.log(c) //array sendo afetado em A e exibindo em C