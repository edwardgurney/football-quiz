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

/*let quizQuestions = [
    {
        question: "Who was the goalkeeper when David Beckham scored from the halfway line for Manchester United against Wimbledon?",
        choice1: "Shaka Hislop",
        choice2: "Neil Sullivan",
        choice3: "David James",
        choice4: "David Seaman",
        answer: 2,
    },
]


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
    questionCounter.innerText = 1;
    score.innerText = 1;
    questionsArray = [...quizQuestions];
    console.log(questionsArray);
    displayNewQuestion();
}

newgame();

function displayNewQuestion(params) {
    questionCounter++;
    const questionsAvailable = Math.floor(Math.random() * questionsArray.length);
    currentQuestion = questionsArray[questionsAvailable];
    question.innerText = currentQuestion.question;

    selectedAnswer.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });
    
};

function checkAnswer(params) {
    
}

function gameOver() {

}

function correctScore() {

}

function incorrectScore() {

}
