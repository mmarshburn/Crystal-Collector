$(document).ready(function(){
  console.log("here we go")

let randomNumber
let wins = 0;
let losses = 0; 
let totalScore = 0; 
var redCrystal;
var randomCrystalValueRed;
var randomCrystalValueBlue;
var randomCrystalValueYellow;
var randomCrystalValueGreen;
let blueCrystal;
let yellowCrystal;
let greenCrystal;
let setRandomNumber

// Generate Random Number to match
setRandomNumber = function(){
  randomNumber = Math.floor((Math.random()*(120-19+1))+19);
  console.log(randomNumber);
  $("#randomnumber").text(randomNumber)
}

setRandomNumber();

// Generate Random Crystal Value
setRandomCrystalValue1 = function(){
  randomCrystalValueRed = Math.floor((Math.random()*12)+1)
  console.log(randomCrystalValueRed);
  
}
setRandomCrystalValue1();

// Generate Random Crystal Value
setRandomCrystalValue2 = function(){
  randomCrystalValueBlue = Math.floor((Math.random()*12)+1)
  console.log(randomCrystalValueBlue);
}
setRandomCrystalValue2();

// Generate Random Crystal Value
setRandomCrystalValue3 = function(){
  randomCrystalValueYellow = Math.floor((Math.random()*12)+1)
  console.log(randomCrystalValueYellow);
}
setRandomCrystalValue3();

// Generate Random Crystal Value 
setRandomCrystalValue4 = function(){
  randomCrystalValueGreen = Math.floor((Math.random()*12)+1)
  console.log(randomCrystalValueGreen);
}
setRandomCrystalValue4();


$("#redbutton").click (function(){
  
  totalScore += randomCrystalValueRed;
  console.log("Score is: " + totalScore);
});





















function startGame() {
  redCrystal = randomCrystalValue1();
  blueCrystal = randomCrystalValue2();
  yellowCrystal = randomCrystalValue3();
  greenCrystal = randomCrystalValue4();
  $("#randomNumber").text(randomNumber);
  $("#totalScore").text(totalScore);
};

startGame();

function resetGame() {
  totalscore = 0;
  startGame()
}


function compareToRandom(){
  if (totalScore === randomNumber){
    wins++;
    $("#wins").text(wins);
    resetGame()
  }

  else if (totalScore > randomNumber){
    losses++;
    $("#losses").text(losses);
    resetGame();
    }
  };

  compareToRandom();

  $("#redbutton").click(function(){
    totalScore = redCrystal + totalScore;
    console.log(totalScore);
  })


});
