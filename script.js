
var question1 = {
    questions: "Commonly used data types do not include:",
    answers: [
        "String",
        "Boolean",
        "Numbers"
    ],
    correct: ["alert"]
    };

var question2 =
    {
    questions: "Inside which HTML element do we put the JavaScript?",
    answers: [
        "Style",
        "Body",
        "H1"
    ],
    correct: ["script"]
    };

var question3 =
    {
    questions: "What is the third language of the internet?",
    answers: [
        "Strings",
        "JQuery",
        "CSS"
    ],
    correct: ["Javascript"]
    };

var question4 =
    {
    questions: "What are square brackets used for?",
    answers: [
        "Strings",
        "Boolean",
        "Numbers"
    ],
    correct: ["Arrays"]
    };



var counter = 0;
var questionGroup = [question1, question2, question3, question4];
var timeLeft = 100;
var $startButton = document.querySelector("#start-button");
var $timeRemaining = document.querySelector("#time-remaining");
var $groupSet = document.querySelector("#group-set");
var $comment = document.querySelector("#comment");

function feedFunction1 (inputQuestionGroup){


  // Generates Question and List of Answers onto Page
        $groupSet.textContent = "";
        var dlength = inputQuestionGroup.answers.length;
        var newli = document.createElement("li");
                newli.setAttribute("class", "question");
                newli.textContent = inputQuestionGroup.questions;
                $groupSet.appendChild(newli);

        for (var c = 0; c < dlength; c++){
            var make = document.createElement("li");
            make.setAttribute("class", "answer");
            make.textContent = inputQuestionGroup.answers[c];
            $groupSet.appendChild(make);

            // Incorrect Answers Event Listener
            make.addEventListener("click", function(event){
                event.preventDefault();
                if (event.target.matches("li")){
                    timeLeft = timeLeft-100;
                    $comment.textContent = "That was incorrect."
                };
            });
        }

        for (var c = 0; c < 1; c++){
            var makeCorrect = document.createElement("li");
            makeCorrect.textContent = inputQuestionGroup.correct[c];
            makeCorrect.setAttribute("class", "answer");
            $groupSet.appendChild(makeCorrect);

            // Correct Answers Event Listener
            makeCorrect.addEventListener("click", function(event){
                event.preventDefault();
                if (event.target.matches("li")){
                    $comment.textContent = "Great job! That's correct."
                };
            });
        }
};

// Start Button
$startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startCountdown();
    // Display First Question
    feedFunction1(questionGroup[counter]);
    $startButton.setAttribute("style", "display: none");
});

// Count Down
function startCountdown(minus) {
    var timeInterval = setInterval(function(){
    timeLeft--;
    $timeRemaining.textContent = "Time Remaining: " + timeLeft;
    if (timeLeft === 0) {
        $timeRemaining.textContent = "";
        clearInterval(timeInterval);
    }
    }, 1000);
}

// Show Next Question & Answer Set
$groupSet.addEventListener("click", function(event){
    event.preventDefault();
    if (event.target.matches(".answer")){
        counter++;
        feedFunction1(questionGroup[counter]);
        timeLeft +1000;
        console.log(counter);

    };
});
