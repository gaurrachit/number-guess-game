let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts=6;

//ab samay aagya hai dom element select karne ka boss

const guessInput=document.getElementById('guessInput');
const checkBtn=document.getElementById('checkBtn');
const message=document.getElementById('message');
const triesSpan=document.getElementById('tries');
const playAgainBtn=document.getElementById('playAgainBtn');

checkBtn.addEventListener('click',()=>{
    const guess=Number(guessInput.value);

    if(!guess||guess<1||guess>100){
        message.textContent="please enter a number between 1 and 100";
        return;
    }

    //correct guess

    if(guess===secretNumber){
        message.textContent="correct you guessed the right number";

    }

    //wrong guess

    else{
        attempts--;
        triesSpan.textContent=attempts;

        if (attempts === 0) {
      message.textContent = `💀 Game Over! The number was ${secretNumber}`;
      endGame();
    } else {
      message.textContent = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
    }
    }
    guessInput.value = ''; // Clear input


});

// Function to end game
function endGame() {
  guessInput.disabled = true;
  checkBtn.disabled = true;
  playAgainBtn.style.display = "inline-block";
}

// Event listener for "Play Again" button
playAgainBtn.addEventListener('click', () => {
  // Reset values
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 6;
  triesSpan.textContent = attempts;
  message.textContent = "Start guessing...";
  guessInput.value = '';
  guessInput.disabled = false;
  checkBtn.disabled = false;
  playAgainBtn.style.display = "none";
});


