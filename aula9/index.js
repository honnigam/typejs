//dados primitivos -> string, number, indefined, null, boolean, symbol

const nome = 'Lucas'
const nome1 = "Lucas Barcelos"
const nome2 = `Lucas`
const num1 = 10
const num2 = 10.52
let nomeAluno // undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null // nulo -> não aponta pr anenhum local na memória quando NULO
const aprovado = true //boolean -> false / true

//ambos possuem o mesmo valor -> b copiou o valor de a
//valores em constante, quando forem necessitados alterar executar 'let'
const a = [1,2]
const b = a
console.log (a,b)

b.push(3)
console.log (a,b)

