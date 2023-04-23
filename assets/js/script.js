var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("started-container");
var containerEndEl = document.getElementById("end-container");
var containerScoreE1 = document.getElementById("score-banner");
var formInitials = document.getElementById("initials-form");
var containerHighScoresE1 = document.getElementById("high-score-container");
var viewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back");
var btnClearScores = document.querySelector("#clear-high-scores");

var questionEl = document.getElementById("question");
var answerbuttonsEl = document.getElementById("answer-buttons");
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover
timerEl.innerText = 0;

varHighScores = [];

var arrayShuffledQuestions
var QueationIndex = 0;

var questions = [
    {
        q: 'How many times a year does the sun set and rise in the Arctic?',
        a: 'One time',
        choices: [{choice: '1. two times'}, {choice: '2. one time'}, {choice: '3. four times'}, {
         choice: '4. three times'}]
    },
    {
        q: 'What day of the week is the least  amount of babies are born?',
        a: 'Sunday',
        choices: [{choice: '1. Monday'}, {choice: '2. Saturday'}, {choice: '3. Sunday'}, {
         choice: '4. Tuesday'}]
    },
    {
        q: 'What is a Golden Birthday?',
        a: 'Turning the same age as the date of birth',
        choices: [{choice: '1. turning the same age as the date of birth'}, {choice: '2. 25th Birthday'}, {choice: '3. 30th Birthday'}, {
         choice: '4. 15 Birthday'}]
    },
    {
        q: 'How many different varieties of watermelon are there?',
        a: 'More than 300',
        choices: [{choice: '1. More than 30'}, {choice: '2. More than 300'}, {choice: '3. More than 100'}, {
         choice: '4. More than 50'}]
    },
];

var renderStartPage = function () {
    containerHighScoresEl.classList.add("hide")
    containerHighScoresEl.classList.remove("show")
    containerStartEl.classList.remove("hide")
    containerStartEl.classList.add("show")
    containerScoresEl.removeChild(containerScoreEl.lastChild)
    QuestionIndex = 0
    gameover = ""
    timerEl.textContent = 0
    score = 0

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
}

var setTime = function () {
    timeleft = 30;

    var timercheck = setInterval(function() {
        timerEl.innerText = timeleft;
        timeleft--

        if (gameover) {
            clearInterval(timercheck)
        }

        if (timeLeft < 0) {
            showScore()
            timerEl.innerText = 0
            clearInterval(timercheck)
        }
    }, 1000)
}

var startGame = function() {
    containerStartEl.classList.add('hide');
    containerStartEl.classList.remove('show');
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');

    arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
    setTime()
    setQuestion()
}

var setQuestion = function() {
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[QuestionIndex])
}

var resetAnswers = function() {
    while (answerbuttonsEl.firstChild) {
        answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
    };
};

var displayQuestions = function(index) {
    questionEl.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement('button')
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add('btn')
        answerbutton.classList.add('answerbtn')
        answerbutton.addEventListener("click", answerCheck)
        answerbuttonsEl.appendChild(answerbutton)
    }
};

