let botao = document.querySelector('#criar-carta');
let carta = document.querySelector('#carta-gerada');
let input = document.querySelector('#carta-texto');

botao.addEventListener('click', function() {
    
    for (let i = 0; i < input.innerHTML.length; i += 1){
        let span = document.createElement('span');
        span = input.innerHTML[i];
        carta.appendChild(span);
    }
    console.log('oi');


})