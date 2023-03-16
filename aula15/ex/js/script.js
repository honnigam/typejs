const numero = Number(prompt('Digite um numero: '));
// //manipulando o DOM
const numeroTitulo = document.getElementById('numero-titulo'); //pega o elemento por ID e salva ele na variavel 
const texto = document.getElementById('texto'); //pega o elemento da DIV relacionando com o ID e salva na variavel atribuida 

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Seu numero + 2 é: ${numero + 2}.</p>`;

