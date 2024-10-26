function play() {
  hideElement("home-section");
  showElement("playground-section");
  continueGame();
}

function continueGame() {
  const alphabet = randomAlphabet();
  const currentAlphabet = document.getElementById("current-alpha");

  currentAlphabet.innerText = alphabet;
  addBackgorundColor(alphabet);
}
function keyboard(event){
  const playerPressed = event.key;
  const currentAlphabet = document.getElementById("current-alpha");
  const alphabet = currentAlphabet.innerText;
  console.log(alphabet,playerPressed);

  if(playerPressed === alphabet){
    console.log('you pressed right');
    removeBackgroundColor(alphabet);
    continueGame();

  }else{
    console.log('you are wrong')
  }

}

document.addEventListener('keyup',keyboard)
