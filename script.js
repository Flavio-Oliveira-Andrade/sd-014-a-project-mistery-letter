const input = document.getElementById('carta-texto')
const par = document.getElementById('carta-gerada')
const btn = document.getElementById('criar-carta')
let estilo = [`newspaper`, `magazine1`, `magazine2`];
let sizegp = [`medium`, `big`, `reallybig`]
let rotgp = [`rotateleft`, `rotateright`]
let skewgp = [`skewleft`, `skewright`]

// let rdmA = estilo[Math.floor(Math.random()*3)]
// let rdmB = sizegp[Math.floor(Math.random()*3)]
// let rdmC = rotgp[Math.floor(Math.random()*2)]
// let rdmD = skewgp[Math.floor(Math.random()*2)]

function gerar(){
    if (input.value === ''){
        par.innerText = 'Por favor, digite o conteúdo da carta.'
    } else {
        let palavra = input.value;
        let string = ''
        for(let i in palavra){
            if(input.value[i] !== ' '){
                string += input.value[i]
            } else {
                string += ' '
                let span = document.createElement('span');
                span.innerText = string;
                span.className += estilo[Math.floor(Math.random()*3)] + " "
                span.className += sizegp[Math.floor(Math.random()*3)] + " "
                span.className += rotgp[Math.floor(Math.random()*2)] + " "
                span.className += skewgp[Math.floor(Math.random()*2)]
                string = ''
                par.appendChild(span)
                // par.innerText += ' '
            }
    
        }
        let lastSpan = document.createElement('span')
        lastSpan.className += estilo[Math.floor(Math.random()*3)] + " "
        lastSpan.className += sizegp[Math.floor(Math.random()*3)] + " "
        lastSpan.className += rotgp[Math.floor(Math.random()*2)] + " "
        lastSpan.className += skewgp[Math.floor(Math.random()*2)]
        lastSpan.innerText = string;
        par.appendChild(lastSpan)

    }
}
btn.addEventListener('click', gerar)