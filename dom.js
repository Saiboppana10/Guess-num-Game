'use strict';

let secNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
// check
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  
  //no input from user
  if(!guess){
    document.querySelector('.message').textContent = 
    '🙊 Add a Number!';
    
  } 
  // when they are win
  else if(guess === secNumber) {
     document.querySelector('.number').textContent = secNumber;
     document.querySelector('.message').textContent = 
     '🍾Correct Number!';
     if(score > highScore) {
       highScore = score;
       document.querySelector('.highscore').textContent = highScore;
    
     }
   }

   // did not match
   else if (guess > secNumber){

       if (score > 1){
        document.querySelector('.message').textContent =
       '❌ Too high';
       score--;
      document.querySelector('.score').textContent = 
     score;

      }
      else {
        document.querySelector('.message').textContent =
       '😒 You Lost The Game';
      }

    }
    else if (guess < secNumber){
        
        if (score > 1){
            document.querySelector('.message').textContent = 
          '❌ Too low';
          score--;
          document.querySelector('.score').textContent = score;

        } else{
            document.querySelector('.message').textContent =
            '😒 You Lost The Game';
        }
        
}
});

//restor
document.querySelector('.again').addEventListener('click', function(){
  secNumber = Math.trunc(Math.random()*20)+1;
score = 20;
document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = score;
document.querySelector('.message').textContent = 'Start guessing..';
guess = document.querySelector('.guess').value = '';
});