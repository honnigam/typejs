const numero = Number(prompt('Digite um numero: '));
// //manipulando o DOM
const numeroTitulo = document.getElementById('numero-titulo'); //pega o elemento por ID e salva ele na variavel 
const texto = document.getElementById('texto'); //pega o elemento da DIV relacionando com o ID e salva na variavel atribuida 

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Seu numero + 2 é: ${numero + 2}.</p>`;
texto.innerHTML += `<p> Raiz quadrada de ${numero} é: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p> ${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p> ${numero}	é NaN? ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p> ${numero} arredondado para baixo é: ${Math.floor(numero)} </p>`
texto.innerHTML += `<p> ${numero} arredondado para cima é: ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p> este numero com duas casas decimais é: ${numero.toFixed(2)}</p>`

