//let umaString = " Um \"texto\"" // o \texto\ é usado para vazar o caractere de outra forma
let umaString = "Um texto"

// console.log(umaString[4]) achar um elemento numa posição
// console.log(umaString.charAt(2)) //achar um elemento numa posição de outra forma
// console.log(umaString.concat(' ', 'em', 'um',  ' ', 'lindo', ' ', 'dia'))
// console.log(umaString + ' em um lindo dia.')
// console.log(`${umaString} em um lindo dia.`)

// console.log (umaString.indexOf('texto')) // saber qual o indíce da palavra solicitada
// console.log (umaString.indexOf('Texto')) // quando a letra não existe da forma escrita retorna -1
// console.log (umaString.indexOf('o', 3)) // com o parametro é estabelecido é 'a partir de [i]
// console.log (umaString.lastIndexOf('o')) //lastIndexOf - começa de traz para frente aplica-se também a regra da posição do parametro

console.log(umaString.match(/[a-z]/g)) //com a flag G, busca todos os minusculos citado no parametro, sem a flag G ele retorna a especificações do parametro 
let outraStr = "o rato roeu a roupa do rei de roma."
console.log(outraStr.replace('roeu', 'Outra')) //diante do segundo parametro ele replica em cima do primeiro  
console.log(outraStr.replace(/r/g, '#')) //aqui ele substitui com uma ER, para trocar todas as letras usa a flag G
console.log(outraStr.length) //conta a quantidade de caracteres
console.log(outraStr.slice(2, 6)) //exibe a atribuição do parametro em índices
console.log(outraStr.slice(-3)) //pega a string inteira e subtrai o valor atribuido no parametro 
console.log(outraStr.slice(-5, -1)) //exibe no console de trás pra frente diante dos parametros passado no limite 
console.log(outraStr.substring(outraStr.length - 5, outraStr.length -1)) //faz a mesma coisa que o .slice dentro de uma substring

console.log(outraStr.split(' ', 3)) //faz a divisão no caractere passado no parametro, sendo o segundo parametro o limite até onde vai
console.log(outraStr.toUpperCase()) //deixa em tudo maisculo
console.log(outraStr.toLowerCase()) //deixa em tudo minusculo