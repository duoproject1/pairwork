
// var namepseudo=$("#n").value;
var rightNumber = Math.floor(Math.random() * 20) + 1;
var score = 20;
var highscore = 0;
function Makeplayerscore(namepseudo,score){
  var player ={}
  player.namepseudo=namepseudo
    player.score=score
    player.display=display
  
  return player 
}
var display=function(){
  return this.namepseudo + "won with the score "+ this.score
}


var displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('#guess').value);
  console.log(guess, typeof guess,rightNumber);
  // var namepseudo=document.getElementById("#n").value;
  if (!guess) {
    alert(' please write a number!');
    
  }
  
   else if (guess === rightNumber) {
    var player1 =Makeplayerscore(namepseudo,score);
    localStorage.setItem('data',JSON.stringify(player1));display(player1)
  console.log(player1)
    displayMessage('Correct guess!');
   
  //  display(player1);
    document.querySelector('.number').textContent = rightNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== rightNumber) {
    if (score > 1) {

      if(guess > rightNumber ) {displayMessage('Too high!')} displayMessage( 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
     
      displayMessage(' soory!you lost ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.btn-again').addEventListener('click', function () {
  score = 20;
  rightNumber = Math.trunc(Math.random() * 20) + 1;
 displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('#guess').value = '';

 
 
});



// cheching local storage availability// 

// function storageAvailable(type) {
//   let storage;
//   try {
//       storage = window[type];
//       const x = '__storage_test__';
//       storage.setItem(x, x);
//       storage.removeItem(x);
//       return true;
//   }
//   catch (e) {
//       return e instanceof DOMException && (
          
//           e.code === 22 ||
          
//           e.code === 1014 ||
         
          
//           e.name === 'QuotaExceededError' ||
          
//           e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
         
//           (storage && storage.length !== 0);
//   }
// }
// undefined
// storageAvailable('sessionStorage')
// true