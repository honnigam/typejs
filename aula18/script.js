// const array = [1,2,3]
// array.push(4)
// console.log(array)

// const pessoa01 = { //criando atributos
//   nome: 'Lucas',
//   sobrenome: 'Barcelos',
//   idade: 25
// }

// const pessoa02 = { //criando atributos
//   nome: 'Vanessa',
//   sobrenome: 'Raissa',
//   idade: 24
// }

// console.log(pessoa01.nome, pessoa02.nome) //consultando a função com os atributos

//outra forma de criar função de consulta
function criaPessoa (nome, sobrenome, idade){ //passando os parametros - recebendo os argumentos que vai receber os valores passados
  return { //retornando os objetos
   nome,sobrenome,idade
  } //cria objetos, sendo uma factory
}
//passando as caracteristicas da função criaPessoa
const pessoa01 = criaPessoa ('Lucas', 'Barcelos', '25')
const pessoa02 = criaPessoa ('Vanessa', 'Raissa', '24')
const pessoa03 = criaPessoa ('João', 'Vale', '24')
const pessoa04 = criaPessoa ('Junior', 'Silva', '21')
const pessoa05 = criaPessoa ('Jean', 'Barcelos', '52')
console.log (pessoa01.nome, pessoa02.nome, pessoa03.nome)


const pessoa1 = {
  nome: 'Lucas', 
  sobrenome: 'Barcelos', 
  idade: 25,
  
  fala() { //isso é um method referenciando .this 
    // console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    console.log(`a minha idade atual é: ${this.idade}`)
    console.log
  },
  incrementaIdade(){
    this.idade++; //soma a idade
  }
}
pessoa1.fala(); //chama a pessoa fala
pessoa1.incrementaIdade(); //executa a função incremento
pessoa1.fala();  //idade somada no final