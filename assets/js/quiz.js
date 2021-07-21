const question = document.getElementById("question");
const selectedAnswer = Array.from(document.getElementsByClassName("answer-button"));


let qualifyingPoints = 0;
let countdownDisplay = document.getElementById("countdown-timer");
let startButton = document.getElementById("start-button");
let timer = 60;  //document.getElementsByClassName("countdown");
let startGame = document.getElementsByClassName("button");
let correctAnswers = 0;
let incorrectAnswers = 0; //document.getElementById("incorrect-score");
let answerButtons = document.getElementsByClassName("answer-button"); 
let questionCounter = 0;
let questionArea = document.getElementById("question");
let questionsArray = [];
let currentQuestion = {};
let totalQuestions = 0; //document.getElementById("question-counter");
let score = document.getElementById("correct-score");
let maxQuestions = 9;

/*
//  window.addEventListener("DOMContentLoaded", function() {
//      let buttons = document.getElementsByTagName("button");

//      for (let button of buttons) {
//          button.addEventListener("click", function(event) {
             
//             console.log(event.target.dataset.type)

//              if (this.getAttribute("data-type") === "1") {
//                  alert("This is working");
//              } else {
//                  alert("Not working");
//              }
//          });
//      }
//  });
*/
/*when "start new game - kick off" button clicked*/

function newgame() {
    questionCounter.innerText = 0;
    score.innerText = 0;
    questionsArray = [...quizQuestions];
    console.log(questionsArray);
    displayNewQuestion();
    countDown ();
    //totalQuestionsCounter ();

}

newgame();



function displayNewQuestion() {
    if (questionsArray.length === 0 || questionCounter >= maxQuestions) {
        
        return window.location.assign("index.html");
    }
    questionCounter++;
    totalQuestionsCounter ();
    const questionsAvailable = Math.floor(Math.random() * questionsArray.length);
    currentQuestion = questionsArray[questionsAvailable];
    question.innerText = currentQuestion.question;

    selectedAnswer.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });
    questionsArray.splice(questionsAvailable, 1);
    
};


selectedAnswer.forEach(choice => {
    choice.addEventListener("click", e => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = 'incorrect-answer';
        if (selectedAnswer == currentQuestion.answer) {
            qualifyingPointsScore ();
            correctScore ();
            classToApply = 'correct-answer';
        } else {
            incorrectScore();
            /*selectedChoice.parentElement.classList.add(classToApply);*/
        }

        console.log(selectedAnswer == currentQuestion.answer);

        // 1. if answer is incorrect - add the classToApply here
        selectedChoice.classList.add(classToApply);
        
        setTimeout(() => {
            // 2. remove the classToApply from the classList (.......classList.remove(classToApply))
            selectedChoice.classList.remove(classToApply);    
            displayNewQuestion();
        }, 1500);
    });
});


function countDown () {
    setInterval(function(){
        if (timer <= 0) {
            clearInterval(timer = 0)
        }
        countdownDisplay.innerHTML = timer
        timer -= 1
        
    }, 1000)
}



function gameOver() {

}

function correctScore () {
    correctAnswers++;
    document.getElementById("correct-score").innerText = correctAnswers;
}

function incorrectScore () {
    incorrectAnswers++;
    document.getElementById("incorrect-score").innerText = incorrectAnswers;
}

function qualifyingPointsScore () {
    qualifyingPoints += 3;
    document.getElementById("qualifying-points").innerText = qualifyingPoints;
}

function totalQuestionsCounter () {
    totalQuestions += 1;
    document.getElementById("question-counter").innerText = totalQuestions;
}


function progressToKnockout () {

}


    

