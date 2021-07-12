const button = document.querySelector('#criar-carta');
const paragrafo = document.querySelector('#carta-gerada');

function geraCarta () {
    const input = document.querySelector('#carta-texto').value;
    let arrayInput = input.split(' ');
    console.log(arrayInput)
    for (let i of arrayInput) {
        const span = document.createElement('span');
        span.innerText = i;
        paragrafo.appendChild(span);
    }
}

button.addEventListener('click', geraCarta)