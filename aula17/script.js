function falaOi (nome) {
  return `Bom dia, ${nome}!`;
}

// const variavel = falaOi('Lucas');
// console.log(variavel) //sempre retorna undefined quando não return algo

//criando uma função de soma de forma fácil
function soma (x, y) { //pode atribuir valores iniciais (x=1, y=1)
  const resultado = x + y; 
  return resultado; //encerra a função aqui, quando encontra a palavra returna
  //tudo dentro de fuction soma não consegue ser acessado de fora
  //conseguindo declarar uma var com o mesmo nome
}
console.log (soma(4,5))
console.log (soma(4,6))
console.log (soma(4,7))

const resultado = soma(2,5) //fora da function
console.log(resultado)

const resultNome = soma('Lucas ', 'Barcelos') //a function também agrega string
console.log (resultNome)

