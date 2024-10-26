function play() {
  hideElement("home-section");
  hideElement('score-section');
  showElement("playground-section");
  continueGame();
}

function continueGame() {
  const alphabet = randomAlphabet();
  const currentAlphabet = document.getElementById("current-alpha");

  currentAlphabet.innerText = alphabet;
  addBackgorundColor(alphabet);
}
function keyboard(event) {
  const playerPressed = event.key;
  const currentAlphabet = document.getElementById("current-alpha");
  const alphabet = currentAlphabet.innerText;
  console.log(alphabet, playerPressed);

  if (playerPressed === alphabet) {
    const currentScore = getElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setElementValueById("current-score", updatedScore);

    // const currentScore =document.getElementById('current-score');
    // const currentScoreText = currentScore.innerText;
    // const currentScoreNum = parseInt(currentScoreText);
    // const rightScore = currentScoreNum+1;
    // currentScore.innerText =rightScore;
    // console.log(rightScore);
    removeBackgroundColor(alphabet);
    continueGame();
  } else {
    // const currentLife = document.getElementById('life-score');
    // const currentLifeElement = currentLife.innerText;
    // const currentLifeNum = parseInt(currentLifeElement);
    // const life = currentLifeNum-1;
    // currentLife.innerText =life;
    const currentLife = getElementValueById('life-score');
    const updatedLife = currentLife-1;
    const finalResult = setElementValueById('life-score',updatedLife);
    if(updatedLife===0){
        playAgain();
    }
  }
}

document.addEventListener("keyup", keyboard);

function playAgain(){
    hideElement('playground-section');
    showElement('score-section');
    
   const currentScore = getElementValueById('current-score');
   const lastScore = getElementTextById('last-score');
   const finalScore = setElementValueById('last-score',currentScore)
    console.log(currentScore);
    const currentAlpha =getElementTextById('current-alpha');
    removeBackgroundColor(currentAlpha);
    setElementValueById('life-score',5);
    setElementValueById('current-score',0);

}
