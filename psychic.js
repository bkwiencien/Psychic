var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"]
var firstTime=true;
var letterIPicked= " ";
var letterGuessedRaw = " ";
var letterguessed = " ";
var letterEntered = " ";
var numberOfGuesses = 0;
function yes(){
  var tempnum = 0
  var gener = 0;
  if (firstTime) {
    tempnum = Math.round(Math.random()*100);
    gener = tempnum % 25;
    letterIPicked  = alphabet[gener];
    firstTime = false;
  }
  letterGuessedRaw=prompt("Guess a letter");
  numberOfGuesses++;
  var element = document.getElementById("numberofguesses");
  element.innerHTML = "Number of guesses " + numberOfGuesses;
  firstTime=false;
  }
function assesit() {
}
