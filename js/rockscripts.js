//Business Logic

var humanChoice;

function turn(humanChoice) {
  var randomAI =  Math.floor((Math.random()* 3) +1);
  var aiChoice;
  if (randomAI === 1) {
      aiChoice = "rock";
      alert(aiChoice);
      $()
    } else if (randomAI === 2) {
      aiChoice = "paper";
      alert(aiChoice);
    } else {
      aiChoice = "scissors";
      alert(aiChoice);
    }

    console.log(aiChoice, humanChoice)
  if (humanChoice === aiChoice) {
    alert('draw')
  } else if (humanChoice === 'rock' && aiChoice === 'paper') {
    alert ('ai won');
  } else if (humanChoice === 'paper' && aiChoice === 'scissors') {
    alert ('ai won');
  }
  else if (humanChoice === 'scissors' && aiChoice === 'rock') {
  alert ('ai won');
 } else {
    alert('human won');
  }

}


//UI
$(document).ready(function(){
  $('.btn').click(function(){
  var humanChoice = $(this).attr('id');
  turn(humanChoice);
 });
});
