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
    console.log("at the top of the while loop");
    letterGuessedRaw=prompt("Guess a letter");
    letterGuessed = letterGuessedRaw.toLowerCase();
    console.log("letterGuessed = " + letterGuessed);
    numberOfGuesses++;
    var element = document.getElementById("numberofguesses");
    element.innerHTML = "Number of guesses " + numberOfGuesses;
    console.log("letterIPicked is " + letterIPicked);
    console.log("letterGuessed = " + letterGuessed);
    if (letterGuessed != letterIPicked) {
       console.log("wrong should change image");
       var element2 = document.getElementById("mainimage");
       element2.src= "assets/images/wrong.jpeg";
       console.log("image should have been changed");
       console.log("element2 = " + element2);
       console.log("element2.src = " + element2.src);
       alert("Wrong");
    } else {
       console.log("correct should change image");
       var element1 = document.getElementById("mainimage");
       element1.src="assets/images/correct.jpeg"
       done = true;
  }
  }
}
function assesit() {
}
