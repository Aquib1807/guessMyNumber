let ans = Math.floor(Math.random() * 20) + 1;

let guessNumber,
  score = 20,
  highscore = 0;
const checkBtnElement = document.getElementsByClassName("check")[0];
checkBtnElement.addEventListener("click", guessFunction);
function guessFunction() {
  guessNumber = document.querySelector(".guess").value;
  if (Math.abs(guessNumber - ans) == 0) {
    var audio = new Audio("sounds/victory.mp3");
    audio.play();
    $("body").addClass("victory");
    setTimeout(function () {
      $("body").removeClass("victory");
    }, 500);
    $("#title").text("You are a Winner Mate");
    document.getElementsByClassName("message")[0].innerHTML = "Correct Number";
    document.getElementsByClassName("number")[0].innerHTML = ans;

    if (highscore < score) {
      highscore = score;
    }
  } else if (Math.abs(guessNumber - ans) <= 2 && score != 0) {
    var audio = new Audio("sounds/very-close.mp3");
    audio.play();
    $("#title").text("Too close Keep Trying!!");
    document.getElementsByClassName("message")[0].innerHTML = "Very Close";
    score--;
  } else if (Math.abs(guessNumber - ans) <= 4 && score != 0) {
    var audio = new Audio("sounds/close.mp3");
    audio.play();
    $("#title").text("Quite Nice!!");
    document.getElementsByClassName("message")[0].innerHTML = "Close";
    score--;
  } else if (Math.abs(guessNumber - ans) <= 6 && score != 0) {
    var audio = new Audio("sounds/far.mp3");
    audio.play();
    $("#title").text("A bit Far!!");
    document.getElementsByClassName("message")[0].innerHTML = "Far";
    score--;
  } else {
    var audio = new Audio("sounds/very-far.mp3");
    audio.play();
    $("#title").text("Tooooooo Far!!");
    document.getElementsByClassName("message")[0].innerHTML = "Very Far";
    if (score != 0) score--;
  }
  if (score == 0) {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#title").text("You Lost");
    document.getElementsByClassName("message")[0].innerHTML =
      "You lost the game!";
  }

  document.getElementsByClassName("score")[0].innerHTML = score;
  document.getElementsByClassName("highscore")[0].innerHTML = highscore;
}

// const againBtnElement = document.getElementsByClassName("again")[0];
// againBtnElement.addEventListener("click", refreshFunction);
function refreshFunction() {
  ans = Math.floor(Math.random() * 20) + 1;
  score = 20;
  var audio = new Audio("sounds/game-start.mp3");
  audio.play();
  document.getElementsByClassName("message")[0].innerHTML = "Start guessing...";
  document.getElementsByClassName("number")[0].innerHTML = "?";
  document.body.style.background = "#222";
  document.getElementsByClassName("score")[0].innerHTML = score;
}
$(".again").on("click", function () {
  $("#title").text("Guess My Number!");
  refreshFunction();
});
