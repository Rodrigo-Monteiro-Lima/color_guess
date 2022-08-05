let guessColor = document.querySelector('#rgb-color');
let options = document.querySelectorAll('.ball');

function generateOptionsColor () {
  for (let index = 0; index < options.length; index += 1) {
    options[index].style.backgroundColor = `rgb(${Math.random()
      * 255},${Math.random() * 255},${Math.random() * 255})`;
    
  }
}

window,onload = function initial() {
  guessColor.innerHTML = `(${parseInt(Math.random()
    * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;
    generateOptionsColor();
}
