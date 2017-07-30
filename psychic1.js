var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"]
var firstTime=true;
var letterIPicked= " ";
var letterGuessedRaw = " ";
var letterGuessed = " ";
var letterEntered = " ";
var numberOfGuesses = 0;
var userText ="";
var done = false;
var guessNumber;
var alreadyGuessed = "";
function getData() {
   if (firstTime) {
    tempnum = Math.round(Math.random()*100);
    gener = tempnum % 25;
    letterIPicked  = alphabet[gener];
    console.log("letterIPicked = " + letterIPicked);
    firstTime = false;
  }
   var input=document.getElementById("userinput")
   letterGuessedRaw = input.value;
   letterGuessed = letterGuessedRaw.toLowerCase();
   alreadyGuessed = alreadyGuessed + letterGuessed;
   var element3 = document.getElementById("guessedsofar");
   //element3.innerHTML ("You have already guessed " + alreadyGuessed);
   console.log("that worked i got an " + letterGuessedRaw);
   numberOfGuesses++;
   var element = document.getElementById("numberofguesses");
   element.innerHTML = "Number of guesses " + numberOfGuesses;
   if (letterGuessed != letterIPicked) {
     var element2 = document.getElementById("mainimage");
       element2.src= "assets/images/wrong.jpeg";
   }
   if (letterGuessed == letterIPicked) {
     var element1 = document.getElementById("mainimage");
     element1.src="assets/images/correct.jpeg"
   }
}
