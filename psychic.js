var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"]
var firstTime=true;
var letterIPicked= " ";
var letterGuessedRaw = " ";
var letterguessed = " ";
var letterEntered = " ";
function yes(){
  console.log("I am in yes");
  var tempnum = 0
  var gener = 0;
  if (firstTime) {
    tempnum = Math.round(Math.random()*100);
    gener = tempnum % 25;
    console.log("gener =" + gener);
    letterIPicked  = alphabet[gener];
    console.log(letterIPicked);
    firstTime = false;
  }
  letterGuessedRaw=prompt("Guess a letter");
  firstTime=false;
  }
function assesit() {
}
