function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElement(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}
function addBackgorundColor (elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-500','text-white');
}
function removeBackgroundColor(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}
function setElementValueById(elementId,value){
    const element =document.getElementById(elementId);
    element.innerText =value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text =element.innerText;
    return text;
}

function randomAlphabet(){
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'
    const  alphabets = alphabetsString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    
    return alphabet;

}
