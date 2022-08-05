let guessColor = document.querySelector('#rgb-color');
let options = document.querySelectorAll('.ball');
let text = document.querySelector('#answer');

function generateOptionsColor() {
  for (let index = 0; index < options.length; index += 1) {
    options[index].style.backgroundColor = `rgb(${Math.random()
      * 255},${Math.random() * 255},${Math.random() * 255})`;    
  }
  options[parseInt(Math.random() * 5)].style.backgroundColor = 'rgb' + guessColor.innerHTML;
}

//function colorToBeGuessed() {
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);

  guessColor.innerHTML = `(${red}, ${green}, ${blue})`;
//}

let ball1 = document.querySelector('#first');
let ball2 = document.querySelector('#second');
let ball3 = document.querySelector('#third');
let ball4 = document.querySelector('#fourth');
let ball5 = document.querySelector('#fifth');
let ball6 = document.querySelector('#sixth');
function addClass(event) {
  ball1.classList.remove('chosen');
  ball2.classList.remove('chosen');
  ball3.classList.remove('chosen');
  ball4.classList.remove('chosen');
  ball5.classList.remove('chosen');
  ball6.classList.remove('chosen');
  event.target.classList.add('chosen');
}
ball1.addEventListener('click', addClass);
ball2.addEventListener('click', addClass);
ball3.addEventListener('click', addClass);
ball4.addEventListener('click', addClass);
ball5.addEventListener('click', addClass);
ball6.addEventListener('click', addClass)


window,onload = function initial() {
  //colorToBeGuessed();
  generateOptionsColor();
  text.innerHTML = 'Escolha uma cor';
}

let colorsOptions = document.querySelector('#colors');
colorsOptions.addEventListener('click', (event) => {
  let guessedValue = 'rgb' + document.querySelector('#rgb-color').innerHTML;
  if (event.target.className.includes('ball')) {
    if (event.target.className.includes('chosen')) {
      if (guessedValue === event.target.style.backgroundColor) {
        text.innerHTML = 'Acertou!'
      } else if (guessedValue !== event.target.style.backgroundColor) {
        text.innerHTML = 'Errou! Tente novamente!'
      }       
    }
  }
  addScore();
  console.log(event.target.style.backgroundColor);
})

let btnReset = document.createElement('button');
btnReset.id = 'reset-game'
btnReset.innerHTML = 'Resetar o jogo'
document.body.appendChild(btnReset);
btnReset.addEventListener('click', () => {
  text.innerHTML = 'Escolha uma cor';
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
  guessColor.innerHTML = `(${red}, ${green}, ${blue})`;
  generateOptionsColor();
  ball1.classList.remove('chosen');
  ball2.classList.remove('chosen');
  ball3.classList.remove('chosen');
  ball4.classList.remove('chosen');
  ball5.classList.remove('chosen');
  ball6.classList.remove('chosen');
})

let score = document.querySelector('#score');
score.innerHTML = 0;
function addScore() {
  if (text.innerHTML === 'Acertou!') {
    score.innerHTML = parseInt(score.innerHTML) + 3;
  } else if (parseInt(score.innerHTML) > 0){
    score.innerHTML = parseInt(score.innerHTML) - 1;
  }
}

console.log();
