const generateLetterBtn = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const input = document.querySelector('#carta-texto');

// Inspiração para Regex: https://stackoverflow.com/questions/10398931/how-to-remove-text-from-a-string

function createLetter() {
  paragraph.innerHTML = '';
  if (input.value.replace(/ /g, '') === '') {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const wordArray = Array.from(input.value.split(' '));
    for (let i = 0; i < wordArray.length; i += 1) {
      const word = document.createElement('span');
      word.innerText = wordArray[i];
      paragraph.appendChild(word);
    }
  }
}

generateLetterBtn.addEventListener('click', createLetter);

const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

function addClass() {
  const wordArray = Array.from(paragraph.children);
  for (let i = 0; i < wordArray.length; i += 1) {
    const groupList = [styleGroup, sizeGroup, rotationGroup, inclinationGroup];
    const currentWord = wordArray[i];
    const random4j = Math.floor(Math.random() * 3) + 2;
    for (let j = 0; j < random4j; j += 1) {
      const random4 = Math.floor(Math.random() * (4 - j));
      const currentGroup = groupList[random4];
      const random3 = Math.floor(Math.random() * 3);
      const random2 = Math.floor(Math.random() * 2);
      if ([styleGroup, sizeGroup].includes(currentGroup)) {
        currentWord.classList.add(currentGroup[random3]);
      } else {
        currentWord.classList.add(currentGroup[random2]);
      }
      groupList.splice(groupList.indexOf(currentGroup), 1);
    }
  }
}

generateLetterBtn.addEventListener('click', addClass);
