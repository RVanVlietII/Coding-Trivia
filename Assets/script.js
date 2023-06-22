let timeEl = document.querySelector(".time");
let scoreEl = document.querySelector(".score");
let testDiv = document.querySelector(".test");
let startBtn = document.getElementById("start");

testDiv.setAttribute("style", "font-size: 12px");

let currentQuestionIndex = 0;
let score = 0;
let time = 50;

let testBank = [
    {
        question: "What are the primitive data types?",
        choices: ["boolean, string, undefined, number", "boolean, array, string, number", "string, function, boolean, number", "boolean, conditional, function, number"],
        answer: "boolean, string, undefined, number"
    },

    {
        question: "Which of these answers are boolean?",
        choices: ["True", "yes", "correct", "right"],
        answer: "True"
    },

    {
        question: "What is a block of code that runs when called upon?",
        choices: ["function", "conditional", "for-loop", "while-loop"],
        answer: "function"
    },

    {  
        question: "What block of code runs until the condition is met?",
        choices: ["function", "conditonal", "for-loop", "calculation"],
        answer: "for-loop"
    },

    {
        question: "What code snippet allows you to store data locally on JS?",
        choices: ["localStorage.setItem()", "localStorage.getItem", "localStorage.Value", "localStorage.clear"],
        answer: "localStorage.setItem()"
    }];

function startQuiz() {
    testDiv.innerHTML = "";
    displayQuestion();
    startTimer();
    }

function displayQuestion() {
    testDiv.innerHTML = "";

    let currentQuestion = testBank[currentQuestionIndex];
    let questionText = document.createElement("p");
    questionText.textContent = currentQuestion.question;
    testDiv.appendChild(questionText);

    let choicesList = document.createElement("ul");
    let choicesItems = currentQuestion.choices;

    for (let i = 0; i < choicesItems.length; i++) {
        let choiceItem = document.createElement("li");
        let choiceBtn = document.createElement("button");  
        choiceBtn.textContent = choicesItems[i];
        choiceItem.appendChild(choiceBtn);
        choicesList.appendChild(choiceItem);
        testDiv.appendChild(choiceItem);
    
    choiceBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let selectedAnswer = event.target.textContent;
        checkAnswer(selectedAnswer);
    
    })}


}

function checkAnswer(selectedAnswer) {
let currentQuestion = testBank[currentQuestionIndex];
if (selectedAnswer === currentQuestion.answer) {
    score += 10;
    time--;
} else { 
    time -= 10;  
}
scoreEl.textContent = "Score: " + score;
currentQuestionIndex++;
if (currentQuestionIndex < testBank.length) {
    displayQuestion();
}   else if (time === 0 || currentQuestionIndez>testBank.length) {
    console.log("Quiz finished! You're Score is ", score);
    submission();
}
}

function startTimer() {
    var timerInterval = setInterval(function() {
        timeEl.textContent = console.log("Good Luck! Answer to the best of your ability");
    
    if(time === 0 /*|| testBank.length + 1*/) {
        clearInterval(timerInterval);
        sendMessage();
        submission();
        return;
    }
        time--;
        timeEl.textContent = "Time: " + time;
    
      }, 1000);
}

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    startQuiz();
});

function sendMessage() {
    testDiv.textContent = "Thank you! Submit your score at this time!";
}
function submission() {
    testDiv.innerHTML = "";

    let submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit High Score";
    testDiv.appendChild(submitBtn);

    submitBtn.addEventListener("click", function() {
        let playerName = prompt("Type your name");
        let highScore = {name: playerName, score: score };
        
    //let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    
    //highScores.push(highScore);

    //highScores.sort((a, b) => b.score - a.score);

    localStorage.setItem("highScores", JSON.stringifiy(highScores));
    });
}