
let testDiv = document.querySelector(".test");
let startTest = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let scoreEl = document.querySelector("#score");

question.appendChild(testDiv);
choices.appendChild(testDiv);

startTest.addEventListener("click", function(event) {
    event.preventDefault();

    startQuiz();
});

function startQuiz() {
    
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
            choices: ["function", "conditonal", "for-loop", "while-loop"],
            answer: "for-loop"
        },
    
        {
            question: "What code snippet allows you to store data locally on JS?",
            choices: ["localStorage.setItem()", "localStorage.getItem", "localStorage.Value", "localStorage.clear"],
            answer: "localStorage.setItem()"
        }
    ];

    let time = 100

    let testBankIndex = 0;
    for (let i = 0; i < testBank.length; i++) {
        displayQuestion(testBank[i]);
        if (choicesSelected !== answer) {

            time -5
        } else (choicesSelected === answer); {
            testBank++

        }

            
    }
}

function displayQuestion(question) {
    testDiv.textContent = question.question;
}
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Good Luck! Answer to the best of your ability";

    if(secondsLeft === 0) {
        sendMessage();
    }
    })
}

function sendMessage() {
    testDiv.textContent = "Thank you! Submit your score at this time!";
}
function submission() {
    name
    scoreEl
}
/*var mainEl = document.getElementById("main");

var secondsLeft = 100;

function setTime() { //scope of function within yellow brackets
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000); //10 seconds set as an argument or a Parameter for each countdown
}
// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl); //append makes something an element ****visible****

}

setTime();

/*function startQuiz () {
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
            choices: ["function", "conditonal", "for-loop", "while-loop"],
            answer: "for-loop"
        },
    
        {
            question: "What code snippet allows you to store data locally on JS?",
            choices: ["localStorage.setItem()", "localStorage.getItem", "localStorage.Value", "localStorage.clear"],
            answer: "localStorage.setItem()"
        }
    ]
    let currenttestBankIndex = 0;
    for (let i = 0; i < bank.length; i++) {
        let currentQuestion = testBank[currenttestBankIndex];
    }
}*/