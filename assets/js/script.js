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
        q: 'How many times a year does the sun set and rise in the Arctic?',
        a: 'One time',
        choices: [{choice: '1. two times'}, {choice: '2. one time'}, {choice: '3. four times'}, {
         choice: '4. three times'}]
    },
    {
        q: 'How many times a year does the sun set and rise in the Arctic?',
        a: 'One time',
        choices: [{choice: '1. two times'}, {choice: '2. one time'}, {choice: '3. four times'}, {
         choice: '4. three times'}]
    },
]