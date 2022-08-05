let guessColor = document.querySelector('#rgb-color');

window,onload = function initial() {
  guessColor.innerHTML = `(${parseInt(Math.random()
    * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;
}
