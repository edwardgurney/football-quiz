const question = document.getElementById("question");
const selectedAnswer = Array.from(document.getElementsByClassName("answer-button"));


let qualifyingPoints = 0;
let timer = document.getElementsByClassName("countdown");
let startGame = document.getElementsByClassName("button");
let correctAnswers = document.getElementById("correct-score");
let incorrectAnswers = document.getElementById("incorrect-score");
let answerButtons = document.getElementsByClassName("answer-button"); 
let questionCounter = 0;
let questionArea = document.getElementById("question");
let questionsArray = [];
let currentQuestion = {};
let totalQuestions = document.getElementById("question-counter");
let score = document.getElementById("correct-score");
let maxQuestions = 9;

 window.addEventListener("DOMContentLoaded", function() {
     let buttons = document.getElementsByTagName("button");

     for (let button of buttons) {
         button.addEventListener("click", function(event) {
             
            console.log(event.target.dataset.type)

             if (this.getAttribute("data-type") === "1") {
                 alert("This is working");
             } else {
                 alert("Not working");
             }
         });
     }
 });

/*when "start new game - kick off" button clicked*/

function newgame() {
    questionCounter.innerText = 1;
    score.innerText = 1;
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

       /* const classToApply = 'incorrect';
            if (selectedAnswer == currentQuestion.answer) {
                classToApply = 'correct';
                
            }*/
        
       console.log(selectedAnswer == currentQuestion.answer);

        displayNewQuestion(); 
    });
});

function checkAnswer(params) {
    
}

function gameOver() {

}

function correctScore() {

}

function incorrectScore() {

}

function qualifyingPointsScore () {
    qualifyingPoints = parseInt(document.getElementById("qualifying-points").innerText);
    document.getElementById("qualifying-points").innerText = ++ qualifying-points;
}
