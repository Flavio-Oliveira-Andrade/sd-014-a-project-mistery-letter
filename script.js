const letterContainer = document.getElementById('carta-gerada');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const slopeGroup = ['skewleft', 'skewright'];

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

function letterCount(n) {
  const element = document.getElementById('carta-contador');
  element.innerText = n;
}
letterCount(0);

function createLetter() {
  const button = document.getElementById('criar-carta');
  button.addEventListener('click', () => {
    const text = document.getElementById('carta-texto').value;
    if (!text || /^\s+$/.test(text)) {
      letterContainer.innerText = 'Por favor, digite o conteúdo da carta.';
      return;
    }
    const words = text.split(' ');
    letterContainer.innerHTML = '';
    letterCount(words.length);
    for (let i = 0; i < words.length; i += 1) {
      const newSpan = document.createElement('span');
      randomClasses(newSpan);
      newSpan.innerText = words[i];
      letterContainer.appendChild(newSpan);
    }
  });
}
createLetter();

function changeClasses() {
  letterContainer.addEventListener('click', (event) => {
    const { target } = event;
    if (target.tagName !== 'SPAN') return;
    target.className = '';
    randomClasses(target);
  });
}
changeClasses();
