const botao = document.getElementById('criar-carta');

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

a = propriedade();
//console.log(a);


let propri1 = propriedade();
let propri2 = propriedade();
while (propri1 === propri2) {
    propri1 = propriedade();
    propri2 = propriedade();
}
let classe1 = classeF(propri1);
let classe2 = classeF(propri2);


console.log(propri2);
console.log(classe2);
console.log(propri1);

console.log(classe1);




//console.log(classe(a));

function criarCarta() {

    frase = input.value;
    palavras = frase.split(" ");
    classe = criarClasse();


}