const input = document.createElement('input');
input.id = "carta-texto";
document.body.appendChild(input);

const paragraph = document.createElement('p');
paragraph.id = "carta-gerada";
document.body.appendChild(paragraph);

const btn = document.createElement('button');
btn.id = "criar-carta";
document.body.appendChild(btn);
btn.innerHTML = "criar carta"

btn.addEventListener("click", function () {
    const getParagraph = document.getElementsByTagName('p');
  if (input.value.trim() === '') {
    
    getParagraph[0].innerHTML = 'Por favor, digite o conteúdo da carta.'

  } else {
    getParagraph[0].innerHTML = '';
    const array = input.value.split(' ');
    
    
    const spanAntigo = document.getElementsByTagName('span');
    for (let index = 0; index < spanAntigo.length ; index +=1){
        console.log(spanAntigo[index]);
      getParagraph[0].removeChild(spanAntigo[index]);  
    }

    for (let inx = 0; inx < array.length; inx += 1) {
      
      const span = document.createElement('span');
      span.innerText = array[inx];
      getParagraph[0].appendChild(span);
    }
  }
  
})
