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
    const currentScore =document.getElementById('current-score');
    const currentScoreText = currentScore.innerText;
    const currentScoreNum = parseInt(currentScoreText);
    const rightScore = currentScoreNum+1;
    currentScore.innerText =rightScore;
    console.log(rightScore);









    removeBackgroundColor(alphabet);
    continueGame();

  }else{
    console.log('you are wrong')
  }

}

document.addEventListener('keyup',keyboard)
