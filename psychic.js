var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"]
var firstTime=true;
var letterIPicked= " ";
var letterGuessedRaw = " ";
var letterguessed = " ";
var letterEntered = " ";
var numberOfGuesses = 0;
var done = false;
function yes(){
  var tempnum = 0
  var gener = 0;
  if (firstTime) {
    tempnum = Math.round(Math.random()*100);
    gener = tempnum % 25;
    letterIPicked  = alphabet[gener];
    firstTime = false;
  }
  while (!done) {
    letterGuessedRaw=prompt("Guess a letter");
    letterGuessed = letterGuessedRaw.toLowerCase();
    numberOfGuesses++;
    var element = document.getElementById("numberofguesses");
    element.innerHTML = "Number of guesses " + numberOfGuesses;
    firstTime=false;
    console.log("letterIPicked is " + letterIPicked);
    console.log("letterGuessed = " + letterGuessed);
    var element1 = document.getElementById("mainimage");
    element1.src="assets/images/wrong.jpeg"
  }
  }
function assesit() {
}
