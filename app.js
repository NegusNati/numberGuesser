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
    // dispable the input
    UiGuessInput.disabled = true;
    //change the border
    UiGuessInput.style.borderColor = "green";
    //let them know they won
    setMessage(`Your Guess Won the Game`, "green");
  } else {
  }
});

//set message

function setMessage(msg, color = "black") {
  Uimessage.style.color = color;
  Uimessage.innerHTML = msg;
}
