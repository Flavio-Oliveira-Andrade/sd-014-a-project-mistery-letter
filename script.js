let gerarCarta = document.getElementById('criar-carta');
let texto = document.getElementById("carta-texto");
let carta = document.getElementById('carta-gerada')

let estilo = ['newspaper', 'magazine1', 'magazine2'];
let tamanho = [`medium`, `big`, `reallybig`]
let rotacao = [`rotateleft`, `rotateright`]
let inclinacao = [`skewleft`, `skewright`]

let armazena;
let random = 0;
let n = 2;
function aleatorio() {
    random = (Math.round(Math.random() * n))
    n = 2;
}

gerarCarta.addEventListener("click", function () {
    if (carta.children.length !== 0) {
        let tamanho = carta.children.length
        for (let x = 0; x < tamanho; x += 1) {
            carta.removeChild(carta.firstChild)
        }
    }
    if (texto.value === '' || texto.value === ' ') {
        carta.innerText = 'por favor, digite o conteúdo da carta.'
    }
    armazena = texto.value.split(' ');
    for (let x = 0; x < armazena.length; x += 1) {
        let criaSpan = document.createElement('span');
        criaSpan.innerText = armazena[x];
        aleatorio()
        criaSpan.classList.add(estilo[random])
        aleatorio()
        criaSpan.classList.add(tamanho[random])
        n = 1;
        aleatorio()
        criaSpan.classList.add(rotacao[random])
        n = 1;
        aleatorio()
        criaSpan.classList.add(inclinacao[random])
        carta.appendChild(criaSpan)
    }
    number()
})

let nDePalavras = document.getElementById('carta-contador');
function number() {
    nDePalavras.innerText = armazena.length;
}


