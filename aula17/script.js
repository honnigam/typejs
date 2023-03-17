function falaOi (nome) {
  return `Bom dia, ${nome}!`;
}

// const variavel = falaOi('Lucas');
// console.log(variavel) //sempre retorna undefined quando não return algo

//criando uma função de soma de forma fácil
// function soma (x, y) { //pode atribuir valores iniciais (x=1, y=1)
//   const resultado = x + y; 
//   return resultado; //encerra a função aqui, quando encontra a palavra returna
//   //tudo dentro de fuction soma não consegue ser acessado de fora
//   //conseguindo declarar uma var com o mesmo nome
// }
// console.log (soma(4,5))
// console.log (soma(4,6))
// console.log (soma(4,7))

// const resultado = soma(2,5) //fora da function
// console.log(resultado)

// const resultNome = soma('Lucas ', 'Barcelos') //a function também agrega string
// console.log (resultNome)

//outra maneira de criação de função
// const raiz = function(n){
//   return n**0.5;
// };

// console.log(raiz(9))
// console.log(raiz(16))
// console.log(raiz(25))

//outra forma de criar função arrowFunction (mais fácil)
const raiz = (n) => { return n**0.5;}  // também é uma função //outra função sem {} e sem 'return' - para boa prática não criar MUITAS coisas dentro de uma função, criar mais funções com menos atributos 

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))