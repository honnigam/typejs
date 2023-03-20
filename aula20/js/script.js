function meuEscopo (){
  const form = document.querySelector('form') //usado para chamar o elemento do HTMl 
  form.onsubmit = function (evento){
    alert(1);
    console.log('Foi enviado');
  }; //recebe um event  
};
meuEscopo ();