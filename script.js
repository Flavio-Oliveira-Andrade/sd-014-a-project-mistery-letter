const button = document.querySelector('#criar-carta');
const paragrafo = document.querySelector('#carta-gerada');

function geraCarta () {
    const input = document.querySelector('#carta-texto');
    const regex = /\w/g
    if (!regex.test(input.value)) {
        paragrafo.innerText = "Por favor, digite o conteúdo da carta.";
        input.value = "";
        return 
    }
    let arrayInput = input.value.split(' ');
    console.log(arrayInput)
    for (let i of arrayInput) {
        const span = document.createElement('span');
        span.innerText = i;
        paragrafo.appendChild(span);
    }
}

button.addEventListener('click', geraCarta)