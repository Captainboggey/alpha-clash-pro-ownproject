function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
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

function randomAlphabet(){
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'
    const  alphabets = alphabetsString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    
    return alphabet;

}
