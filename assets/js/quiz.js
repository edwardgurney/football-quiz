const question = document.getElementById("question");
const selectedAnswer = Array.from(document.getElementsByClassName("answer-button"));

let score = document.getElementById("correct-score");
let countdownDisplay = document.getElementById("countdown-timer");
let questionsArray = [];
let currentQuestion = {};
let qualifyingPoints = 0;
let timer = 60;
let correctAnswers = 0;
let incorrectAnswers = 0;
let questionCounter = 0;
let totalQuestions = 0;
let maxQuestions = 9;

// new game
function newgame() {
    questionCounter.innerText = 0;
    if (score != null) {
        score.innertext = 0;
    }
    score.innerText = 0;
    questionsArray = [...quizQuestions];
    displayNewQuestion();
    countDown();
    setEventListeners();
}
newgame();

// check answer event listener
function setEventListeners() {
    selectedAnswer.forEach(choice => {
        choice.addEventListener("click", (e) => checkAnswer(e));
    });
}

// displays a new question
function displayNewQuestion() {
    if (questionsArray.length === 0 || questionCounter >= maxQuestions) {
        return window.location.assign("index.html");
    }

    const questionsAvailable = Math.floor(Math.random() * questionsArray.length);
    
    currentQuestion = questionsArray[questionsAvailable];
    question.innerText = currentQuestion.question;

    selectedAnswer.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });

    questionsArray.splice(questionsAvailable, 1);
}

// check the current answer
function checkAnswer(e) {
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset.number;

    let classToApply = 'incorrect-answer';

    if (selectedAnswer == currentQuestion.answer) {
        totalQuestionsCounter();
        qualifyingPointsScore();
        correctScore();
        classToApply = 'correct-answer';
    } 
    else {incorrectScore();
         totalQuestionsCounter();}

    if (totalQuestions == 6 && qualifyingPoints >= 12) {
        alert("Congratulations, you have qualified for the knockout stage. One question wrong and you're out - Good Luck");
        }

    else if (totalQuestions == 6 && qualifyingPoints < 12) {
        return window.location.assign("youlost.html");
    }

    if (totalQuestions > 6 && parseInt(selectedAnswer) !== currentQuestion.answer) { 
        return window.location.assign("kolost.html");
    }

    else if (totalQuestions == 9 && parseInt(selectedAnswer) === currentQuestion.answer) {
        return window.location.assign("youwon.html");
    }

    selectedChoice.classList.add(classToApply);

    setTimeout(() => {
        selectedChoice.classList.remove(classToApply);
        displayNewQuestion();
    }, 1500);
}

// countdown timer
function countDown() {
    setInterval(function () {
        if (timer <= 0) {
            clearInterval(timer = 0);
            return window.location.assign("time.html");}
        countdownDisplay.innerHTML = timer;
        timer -= 1;

    }, 1000);
}

// increments the correct score
function correctScore() {
    correctAnswers++;
    document.getElementById("correct-score").innerText = correctAnswers;
}

// increments the incorrect score
function incorrectScore() {
    incorrectAnswers++;
    document.getElementById("incorrect-score").innerText = incorrectAnswers;
}

// sets the total qualifying points
function qualifyingPointsScore() {
    qualifyingPoints += 3;
    document.getElementById("qualifying-points").innerText = qualifyingPoints;
}

// counts total number of questions asked
function totalQuestionsCounter() {
    totalQuestions += 1;
    document.getElementById("question-counter").innerText = totalQuestions;
}