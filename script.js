const letterContainer = document.getElementById('carta-gerada');

function createLetter() {
  const button = document.getElementById('criar-carta');
  button.addEventListener('click', () => {
    const text = document.getElementById('carta-texto').value;
    const words = text.split(' ');
    if (!text || /^\s+$/.test(text)) words[0] = 'Por favor, digite o conteúdo da carta.'
    letterContainer.innerHTML = '';
    letterCount(words.length);
    for (let word of words) {
      const newSpan = document.createElement('span');
      randomClasses(newSpan);
      newSpan.innerText = word;
      letterContainer.appendChild(newSpan);
    }
  });
}
createLetter();

const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const slopeGroup = ['skewleft', 'skewright'];
const groups = [styleGroup, sizeGroup, rotationGroup, slopeGroup];

function randomClassGroup() {
  const groups = [styleGroup, sizeGroup, rotationGroup, slopeGroup];
  let randomNum = Math.round(Math.random() * groups.length);
  if (randomNum === groups.length) return groups;
  if (randomNum < 2) randomNum = 2;
  const groupsReturn = [];
  for (let i = 0; i < randomNum; i += 1) {
    const randomNumber = Math.round(Math.random() * (groups.length - 1));
    groupsReturn.push(groups[randomNumber]);
    groups.splice(randomNumber, 1);
  }
  return groupsReturn;
}

function randomClass(group) {
  const randomNum = Math.round(Math.random() * (group.length - 1));
  return group[randomNum];
}

function randomClasses(element) {
  const groups = randomClassGroup();
  for (let i = 0; i < groups.length; i += 1) {
    element.classList.add(randomClass(groups[i]));
  }
}

function changeClasses() {
  letterContainer.addEventListener('click', (event) => {
    const { target } = event;
    target.className = '';
    randomClasses(target);
  });
}
changeClasses();

function letterCount(n) {
  const element = document.getElementById('carta-contador');
  element.innerText = n;
}