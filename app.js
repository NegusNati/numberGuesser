//Game Values
let min = 1,
  max = 10,
  winnningNum = 2,
  guessesLeft = 3;

//UI elements
const UIgame = document.getElementById("game"),
  UiMinNum = document.querySelector(".min-num"),
  UiMaxNum = document.querySelector(".max-num"),
  UiGuessBtn = document.querySelector("#guess-btn"),
  UiGuessInput = document.querySelector("#guess-input"),
  Uimessage = document.querySelector(".message");

//Assgin Ui min and Max

UiMinNum.textContent = min;
UiMaxNum.textContent = max;

//event listener to the submit
UiGuessBtn.addEventListener("click", function () {
  let guess = parseInt(UiGuessInput.value);
  console.log(guess);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please eneter a value between ${min} and ${max}`, "red");
  }

  if (guess === winnningNum) {
    // // disable the input
    // UiGuessInput.disabled = true;
    // //change the border
    // UiGuessInput.style.borderColor = "green";
    // //let them know they won
    // setMessage(`Your Guess Won the Game`, "green");

    gameOver(true, `Your ${winnningNum} Guess Won the Game`);
  } else {
    //wnat to subtract from guesses left
    guessesLeft -= 1;

    // if any guesses left
    if (guessesLeft === 0) {
      // game over - lost
      // UiGuessInput.disabled = true;
      // UiGuessInput.style.borderColor = "red";
      // setMessage(
      //   `You run out of trials, the correct number was ${winnningNum}. Game Over!`,
      //   "red"
      // );
      gameOver(
        false,
        `You run out of trials, the correct number was ${winnningNum}. Game Over!`
      );
    } else {
      // game resume - answer wrong
      setMessage(
        `${guess} is Incorrect, you have ${guessesLeft} guesses left`,
        "red"
      );
      //clear the input
      UiGuessInput.value = "";
      UiGuessInput.style.borderColor = "Red";
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // disable the input
  UiGuessInput.disabled = true;
  //change the border
  UiGuessInput.style.borderColor = color;
  //let them know they won
  setMessage(msg, color);
}

//set message

function setMessage(msg, color = "black") {
  Uimessage.style.color = color;
  Uimessage.innerHTML = msg;
}
