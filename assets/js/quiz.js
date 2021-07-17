let question = document.getElementById("question");
let selectedAnswer = Array.from(document.getElementsByClassName("answer-button"));


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


/*window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "1") {
                alert("This is working");
            } else {
                alert("Not working");
            }
        });
    }
})
*/

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
    questionCounter = 1;
    score = 1;
}

function displayNewQuestion(params) {
    const questionsAvailable = Math.floor(Math.random() * questionsArray.length);
    currentQuestion = questionArray[questionsAvailable];
    question.innerText = currentQuestion.question;
    
}

function checkAnswer(params) {
    
}

function gameOver() {

}

function correctScore() {

}

function incorrectScore() {

}
