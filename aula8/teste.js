const nome = 'Lucas'
const sobrenome = 'Barcelos'
const idade = 25
const peso = 68
const alturaEmM = 1.64
let imc 
let anoNascimento

imc = (peso/(alturaEmM*alturaEmM))
anoNascimento = 2023 - idade

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kgs')
console.log(`tem ${alturaEmM} de altura`)
console.log(`e seu ${imc} é imc e nasceu em ${anoNascimento}.`)