//arrays - indexão por elemento, não caracteres
// const nome = 'Lucas Barcelos'
// console.log(nome[2]) //consultando uma indexação

// const alunos = ['Luiz', 'Maria', 'João'];
// alunos[alunos.length] = 'Lucas'
// alunos[alunos.length] = 'Fábio' //formas de adicionar mais um array 
// console.log(alunos.length) //contando a quantidade de elementos
// console.log(alunos)

// console.log(alunos)
// console.log(alunos[0]) //exibe o elemento
// console.log(alunos[2]) //exibe o elemento

// alunos [0] = 'Eduardo' //editando o índice 0
// alunos [3] = 'Lucas' //adicionando um novo indice - forma complicada 
// console.log(alunos)

const alunos = ['Luiz', 'Maria', 'João'];
// alunos.push('Lucas')
// alunos.push('Mario') //com a função push ele insere diretamente no array
// alunos.unshift('Lucas') //adiciona no começo do array
// alunos.unshift('Fábio') //adiciona no começo do array
// alunos.unshift('William') //adiciona no começo do array sendo o mais embaixo o primeiro da lista. Para mudar a sequencia só adicionar numa ordem inversa 
alunos.pop(); //tira o ultimo elemento do array podendo também salvar em uma var
const removido = alunos.pop()
console.log(removido);
console.log(alunos);