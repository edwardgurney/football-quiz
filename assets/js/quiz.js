const question = document.getElementById("question");
const selectedAnswer = Array.from(document.getElementsByClassName("answer-button"));


let qualifyingPoints = 0;
let timer = document.getElementsByClassName("countdown");
let startGame = document.getElementsByClassName("button");
let correctAnswers = 0;
let incorrectAnswers = document.getElementById("incorrect-score");
let answerButtons = document.getElementsByClassName("answer-button"); 
let questionCounter = 0;
let questionArea = document.getElementById("question");
let questionsArray = [];
let currentQuestion = {};
let totalQuestions = document.getElementById("question-counter");
let score = document.getElementById("correct-score");
let maxQuestions = 9;


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

/*when "start new game - kick off" button clicked*/

function newgame() {
    questionCounter.innerText = 0;
    score.innerText = 0;
    questionsArray = [...quizQuestions];
    console.log(questionsArray);
    displayNewQuestion();
}

newgame();

function displayNewQuestion() {
    if (questionsArray.length === 0 || questionCounter >= maxQuestions) {
        
        return window.location.assign("index.html");
    }
    questionCounter++;
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



function gameOver() {

}

function correctScore () {
    correctAnswers += 1;
    document.getElementById("correct-score").innerText = correctAnswers;
}

function incorrectScore () {
    incorrectAnswers += 1;
    document.getElementById("incorrect-score").innerText = incorrectAnswers;
}

function qualifyingPointsScore () {
    qualifyingPoints += 3;
    document.getElementById("qualifying-points").innerText = qualifyingPoints;
}


function progressToKnockout () {

}