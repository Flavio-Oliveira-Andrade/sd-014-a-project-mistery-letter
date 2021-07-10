const input = document.getElementById('carta-texto')
const par = document.getElementById('carta-gerada')
const btn = document.getElementById('criar-carta')

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
                string = ''
                par.appendChild(span)
                // par.innerText += ' '
            }
    
        }
        let lastSpan = document.createElement('span')
        lastSpan.innerText = string;
        par.appendChild(lastSpan)

    }
}
btn.addEventListener('click', gerar)