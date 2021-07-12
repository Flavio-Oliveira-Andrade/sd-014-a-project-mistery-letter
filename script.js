const textoDigitado = document.getElementById('carta-texto');
const btnGerarCarta = document.getElementById('criar-carta');
const corpoDaCarta = document.getElementById('carta-gerada');


// GERANDO A CARTA A PARTIR DO INPUT:
btnGerarCarta.addEventListener('click', function () {
    while (corpoDaCarta.firstChild) {
        corpoDaCarta.removeChild(corpoDaCarta.firstChild)
    }
    if (textoDigitado.value.replace(/ /g, '') === '') {
        corpoDaCarta.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
        let texto = textoDigitado.value.split(' ');
        for (let index = 0; index < texto.length; index++) {
            let gerandoPalavras = document.createElement('span');
            gerandoPalavras.id = 'span';
            gerandoPalavras.innerText = texto[index];
            corpoDaCarta.appendChild(gerandoPalavras)
        }
    }
})