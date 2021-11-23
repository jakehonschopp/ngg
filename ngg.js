        




let doubleRandom = Math.random();
let guessesLeft = parseInt("3");
let intRandom = Math.round((doubleRandom*100));
const spanObj = document.getElementById("msgId");
const guessObj = document.getElementById("guessId");
guessObj.innerHTML = guessesLeft;
  
  function guess(){
  
  let guessedNumber = document.getElementById("inputId").value;

  if(guessedNumber == null || guessedNumber.trim() == ''){
  spanObj.innerHTML = "Type something, ANYTHING";
  return;

  } 

  if(isNaN(guessedNumber)){
  spanObj.innerHTML = "That better be a number.";
  return;

  } 
  else{
  if(guessedNumber > 100){
  spanObj.innerHTML = "That better be a number between 0 and 100.";
  return;

  }else{
  spanObj.innerHTML = "";
  }
  }
            
const accurateAnswer = Math.round(guessedNumber);
const difference = guessedNumber-intRandom;
            
  if(difference > 0){
  spanObj.innerHTML = "TOO HIGH";
  }else if(difference < 0 ){
  spanObj.innerHTML = "TOO LOW";
  }else{
  spanObj.innerHTML = "YOU'VE DONE IT! Refreshing game...";
  setTimeout("location.reload(true)", 5000);
  }
  if(guessesLeft <= 0){
  spanObj.innerHTML = "You're OUT OF GUESSES. Correct answer was "  + (intRandom) + " Refreshing game....";
  setTimeout("location.reload(true)", 5000);
  }
  guessesLeft = guessesLeft-1;
  guessObj.innerHTML = guessesLeft;
  } 
