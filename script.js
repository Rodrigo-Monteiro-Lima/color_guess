const guessColor = document.querySelector('#rgb-color');
const options = document.querySelectorAll('.ball');
const text = document.querySelector('#answer');
let count = 0;
const container = document.querySelector('#container');

function generateOptionsColor() {
  for (let index = 0; index < options.length; index += 1) {
    options[index].style.backgroundColor = `rgb(${Math.random()
      * 255},${Math.random() * 255},${Math.random() * 255})`;
  }
  options[parseInt(Math.random() * 5, 10)].style.backgroundColor = `rgb${guessColor.innerHTML}`;
}

let red = parseInt(Math.random() * 255, 10);
let green = parseInt(Math.random() * 255, 10);
let blue = parseInt(Math.random() * 255, 10);
guessColor.innerHTML = `(${red}, ${green}, ${blue})`;

const ball1 = document.querySelector('#first');
const ball2 = document.querySelector('#second');
const ball3 = document.querySelector('#third');
const ball4 = document.querySelector('#fourth');
const ball5 = document.querySelector('#fifth');
const ball6 = document.querySelector('#sixth');
function addClass(event) {
  ball1.classList.remove('chosen');
  ball2.classList.remove('chosen');
  ball3.classList.remove('chosen');
  ball4.classList.remove('chosen');
  ball5.classList.remove('chosen');
  ball6.classList.remove('chosen');
  if (count < 1) {
    event.target.classList.add('chosen');
  }
}
ball1.addEventListener('click', addClass);
ball2.addEventListener('click', addClass);
ball3.addEventListener('click', addClass);
ball4.addEventListener('click', addClass);
ball5.addEventListener('click', addClass);
ball6.addEventListener('click', addClass);

window.onload = function initial() {
  generateOptionsColor();
  text.innerHTML = 'Escolha uma cor';
};

const score = document.querySelector('#score');
score.innerHTML = 0;
function addScore() {
  if (text.innerHTML === 'Acertou!' && count < 1) {
    score.innerHTML = parseInt(score.innerHTML, 10) + 3;
  } else if (parseInt(score.innerHTML, 10) > 0 && count < 1) {
    score.innerHTML = parseInt(score.innerHTML, 10) - 1;
  }
  count += 1;
}

function reWrite(event) {
  const guessedValue = `rgb${document.querySelector('#rgb-color').innerHTML}`;
  if (guessedValue === event.target.style.backgroundColor && count < 1) {
    text.innerHTML = 'Acertou!';
    text.style.color = 'green';
  } else if (guessedValue !== event.target.style.backgroundColor && count < 1) {
    text.innerHTML = 'Errou! Tente novamente!';
    text.style.color = 'red';
  }
}
const colorsOptions = document.querySelector('#colors');
colorsOptions.addEventListener('click', (event) => {
  if (event.target.className.includes('ball chosen')) {
    reWrite(event);
  }
  addScore();
});

const btnReset = document.createElement('button');
btnReset.id = 'reset-game';
btnReset.innerHTML = 'Resetar o jogo';
container.appendChild(btnReset);
btnReset.addEventListener('click', () => {
  text.innerHTML = 'Escolha uma cor';
  text.style.color = 'black';
  red = parseInt(Math.random() * 255, 10);
  green = parseInt(Math.random() * 255, 10);
  blue = parseInt(Math.random() * 255, 10);
  guessColor.innerHTML = `(${red}, ${green}, ${blue})`;
  generateOptionsColor();
  ball1.classList.remove('chosen');
  ball2.classList.remove('chosen');
  ball3.classList.remove('chosen');
  ball4.classList.remove('chosen');
  ball5.classList.remove('chosen');
  ball6.classList.remove('chosen');
  count = 0;
});
