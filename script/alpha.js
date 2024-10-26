function play(){
    hideElement('home-section');
    showElement('playground-section');
    continueGame();
  
}

function continueGame(){
   const alphabet= randomAlphabet();
    const currentAlphabet = document.getElementById('current-alpha');
    
    currentAlphabet.innerText = alphabet;
    addBackgorundColor(alphabet);
   
}

