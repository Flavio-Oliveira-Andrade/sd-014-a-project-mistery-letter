const botao = document.getElementById('criar-carta');
const para = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto')

let classes = {
    estilo: ['newspaper', 'magazine1', 'magazine2'],
    tamanho: ['medium', 'big', 'reallybig'],
    rotacao: ['rotateleft', 'rotateright'],
    inclinação: ['skewleft', 'skewright'],
};


function propriedade() {
    propRand = Math.floor(Math.random() * 4);
    chave = Object.keys(classes)[propRand];
    return chave;
}

function classeF(chave) {
    tamanhoClasse = classes[chave].length;
    valorRand = Math.floor(Math.random() * tamanhoClasse);
    classe = classes[chave][valorRand];
    return classe;
}

function criarCarta(event){
    //para.replaceChildren();
    frase = input.value;
    separaFrase = frase.split(" ");
    tamanho = separaFrase.length;

    for (let i = 0; i < tamanho; i += 1) {
        let propri1 = propriedade();
        let propri2 = propriedade();
        while (propri1 === propri2) {
            propri1 = propriedade();
            propri2 = propriedade();
        }
        let classe1 = classeF(propri1);
        let classe2 = classeF(propri2);
        const span = document.createElement('span');
        span.innerText = separaFrase[i];
        span.classList.add(classe1);
        span.classList.add(classe2);
        para.appendChild(span);
        propril1 = ''; propri2 = ''; classe2 = ''; classe1 = '';

    }
}

botao.addEventListener('click',criarCarta);