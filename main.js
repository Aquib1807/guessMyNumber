let ans = Math.floor(Math.random() * 20) + 1;

let Gn,
  score = 20,
  highscore = 0;

$(".check").on("click", function () {
  guessFunction();
});
function guessFunction() {
  Gn = $(".guess").val();
  let val = Gn - ans;
  if (val === 0) {
    voiceAlert("victory");
    classEffect("body", "victory");

    $("#title").text("You are a Winner Mate");
    $("message").text("Correct Number");
    $("number").text(ans);
    if (highscore < score) {
      highscore = score;
    }
  } else if (val <= 2 && score != 0) {
    voiceAlert("very-close");
    $("#title").text("Too close Keep Trying!!");
    $("message").text("Very Close");
    score--;
  } else if (val <= 4 && score != 0) {
    voiceAlert("close");
    $("#title").text("Quite Nice!!");
    $(".message").text("Close");
    score--;
  } else if (val <= 6 && score != 0) {
    voiceAlert("far");
    $("#title").text("A bit Far!!");
    $(".message").text("Far");
    score--;
  } else {
    voiceAlert("very-far");
    $("#title").text("Tooooooo Far!!");
    $(".message").text("Very Far");
    if (score != 0) score--;
  }
  if (score == 0) {
    voiceAlert("wrong");
    classEffect("body", "game-over");

    $("#title").text("You Lost");
    $(".message").text("You lost the game!");
  }

  $(".score").text(score);
  $(".highscore").text(highscore);
}

//Function to reset Game
function refreshFunction() {
  ans = Math.floor(Math.random() * 20) + 1;
  score = 20;
  voiceAlert("game-start");

  $(".message").text("Start guessing...");
  $(".number").text("?");
  document.body.style.background = "#222";
  $(".score").text(score);
}

$(".again").on("click", function () {
  $("#title").text("Guess My Number!");
  refreshFunction();
});

function voiceAlert(x) {
  var audio = new Audio("sounds/" + x + ".mp3");
  audio.play();
}

function classEffect(element, className) {
  $(element).addClass(className);
  setTimeout(function () {
    $(element).removeClass(className);
  }, 200);
}
