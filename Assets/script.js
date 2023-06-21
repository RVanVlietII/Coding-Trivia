let timeEl = document.querySelector(".time");
let scoreEl = document.querySelector(".score");
let testDiv = document.querySelector(".test");
let startBtn = document.getElementById("start");

testDiv.setAttribute("style", "font-size: 12px");

//testBank.question into li
//testBank.choices into li and button
//answer needs to be a conditional statement where no time is lost if correct and time is lost for incorrect 
//answer
let currentQuestionIndex = 0;
let score = 0;
let time = 1000;

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
    //let choiceButtons = document.querySelectorAll(".choice-button");
    //choiceButtons.forEach((button) => {
      /*choiceBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let selectedAnswer = event.target.textContent;
        checkAnswer(selectedAnswer);
      });*/
      currentQuestionIndex++;
    }

function displayQuestion() {
    // Clear the testDiv before displaying the new question
    testDiv.innerHTML = "";

    let currentQuestion = testBank[currentQuestionIndex];
    // Create buttons for each choice
    let questionText = document.createElement("p");
    questionText.textContent = currentQuestion.question;
    testDiv.appendChild(questionText);
        //for (let i = 0; i < question.length; i++);

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
    time -= 5;  
}
currentQuestionIndex++;
if (currentQuestionIndex < testBank.length) {
    displayQuestion();
}   else {
    console.log("Quiz finished! You're Score is ", score);
}
}


startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    startQuiz();
});
