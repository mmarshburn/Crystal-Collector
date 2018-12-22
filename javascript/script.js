$(document).ready(function(){
  console.log("here we go")

let randomNumber;
let wins = 0;
let losses = 0; 
let totalScore = 0; 
var redCrystal;
var randomCrystalValueRed;
var randomCrystalValueBlue;
var randomCrystalValueYellow;
var randomCrystalValueGreen;
let setRandomNumber

// Generate Random Number to match
setRandomNumber = function(){
  randomNumber = Math.floor((Math.random()*(120-19+1))+19);
  console.log(randomNumber);
  $("#randomnumber").text(randomNumber)
}

setRandomNumber();

setRandomCrystalValueRed = function(){
  randomCrystalValueRed = Math.floor((Math.random()*12));
  console.log(randomCrystalValueRed);
  $("redbutton").attr(randomCrystalValueRed);

}
setRandomCrystalValueRed();

setRandomCrystalValueBlue = function(){
  randomCrystalValueBlue = Math.floor((Math.random()*12));
  console.log(randomCrystalValueBlue);
  $("bluebutton").attr(randomCrystalValueBlue);

}
setRandomCrystalValueBlue();

setRandomCrystalValueYellow = function(){
  randomCrystalValueYellow = Math.floor((Math.random()*12));
  console.log(randomCrystalValueYellow);
  $("yellowbutton").attr(randomCrystalValueYellow);

}
setRandomCrystalValueYellow();

setRandomCrystalValueGreen = function(){
  randomCrystalValueGreen = Math.floor((Math.random()*12));
  console.log(randomCrystalValueGreen);
  $("greenbutton").attr(randomCrystalValueGreen);

}

setRandomCrystalValueGreen();

// Reset Game

resetGame = function(){
  setRandomCrystalValueBlue();
  setRandomCrystalValueGreen();
  setRandomCrystalValueRed();
  setRandomCrystalValueYellow();
  setRandomNumber();
  totalScore = 0;
}

// Compare Scores

function compareToRandom(){
  if (totalScore == randomNumber){
    wins = wins++;
    $("#wins").text("Wins: " , wins);
    alert("You win!")
    resetGame()
  }

  else if (totalScore > randomNumber){
   losses = losses++;
    $("#losses").text("Losses: " , losses);
    alert("You lose!")
    resetGame();
    }
  };
  compareToRandom();

// Assign Values and add scores

$("#redbutton").on('click', function(){
  totalScore = totalScore + randomCrystalValueRed;
  $('#totalscore').text(totalScore)
  compareToRandom();
});

$("#bluebutton").on('click', function(){
  totalScore = totalScore + randomCrystalValueBlue;
  $('#totalscore').text(totalScore)
  compareToRandom();
});

$("#yellowbutton").on('click', function(){
  totalScore = totalScore + randomCrystalValueYellow;
  $('#totalscore').text(totalScore)
  compareToRandom();
});

$("#greenbutton").on('click', function(){
  totalScore = totalScore + randomCrystalValueGreen;
  $('#totalscore').text(totalScore)
  compareToRandom();
});

});
