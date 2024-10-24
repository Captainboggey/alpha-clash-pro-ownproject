function addClassName(elementId){
    const enterId = document.getElementById(elementId);
    enterId.classList.add('hidden');

}
function removeClassName(elementId){
    const enterId= document.getElementById(elementId);
    enterId.classList.remove('hidden');
}

function randomNumber(){
    const randomAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets =randomAlphabet.split('');
    console.log(alphabets);
    const randomNumberGenerator = Math.random()*25;
    const roundNumber = Math.round(randomNumberGenerator);
    const alphabet =alphabets[roundNumber];
    const inputedAlpha =document.getElementById('inputed-alpha');
    inputedAlpha.innerText=alphabet;
    return alphabet;
    
    
}

function setBackgorundColor(elementId){
    const inputedText = document.getElementById(elementId);
    inputedText.classList.add('bg-amber-300');
    inputedText.classList.add('text-black')
}