const botao = document.getElementById('criar-carta');
const para = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');
const contador = document.getElementById('carta-contador');

const classes = {
    estilo: ['newspaper', 'magazine1', 'magazine2'],
    tamanho: ['medium', 'big', 'reallybig'],
    rotacao: ['rotateleft', 'rotateright'],
    inclinação: ['skewleft', 'skewright'],
};

function propriedade() {
    let propRand = Math.floor(Math.random() * 4);
    const chave = Object.keys(classes)[propRand];
    return chave;
}

function classeF(chave) {
    const tamanhoClasse = classes[chave].length;
    const valorRand = Math.floor(Math.random() * tamanhoClasse);
    const classe = classes[chave][valorRand];
    return classe;
}

function criarCarta() {
    para.replaceChildren();
    let cont = 0; const frase = input.value;
    if (frase.length === 0 || !frase.trim()) {
        para.innerText = 'Por favor, digite o conteúdo da carta.';
    }
    const separaFrase = frase.split(" "); const tamanho = separaFrase.length;
    for (let i = 0; i < tamanho; i += 1) {
        let propri1 = propriedade(); let propri2 = propriedade();
        while (propri1 === propri2) {
            propri1 = propriedade(); propri2 = propriedade();
        }
        let classe1 = classeF(propri1); let classe2 = classeF(propri2);
        const span = document.createElement('span');
        span.innerText = separaFrase[i]; span.classList.add(classe1); span.classList.add(classe2);
        para.appendChild(span);
        propri1 = ''; propri2 = ''; classe2 = ''; classe1 = '';
    }
    cont += tamanho; contador.innerText = cont;
}

botao.addEventListener('click', criarCarta);