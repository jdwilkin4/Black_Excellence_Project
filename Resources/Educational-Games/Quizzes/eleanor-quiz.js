const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const results = document.getElementById("results");
const answerKey = document.getElementById("answer-key");
const resultsMessage = document.getElementById("results-message");

let numOfCorrectAnswers = 0;

const questions = [
    {
        question: "1. What age did Eleanor Alberga start learning the piano? ",
        answers: {
            a:	4,
            b:	5,
            c:	6,
            d:	7,
            
        },
        correctAnswer: "b"
    },
    {
        question: "2. What was the name of the piece that premiered in June 2000 with Leonard Slatkin conducting?",
        answers: {
            a:	"Mythologies",
            b:	"Space",
            c:	"Intrigue",
            d:	"Hope"
            
        },
        correctAnswer: "a"
    },
    {
        question: "3. What is the name of Eleanor Alberga’s husband?",
        answers: {
            a:	"David Hughes",
            b:	"Christopher Jackson",
            c:	"Jake Kane",
            d:	"Thomas Bowes"
             
        },
        correctAnswer: "d"
    },
    {
        question: "4. What was the name of Eleanor’s duo with her husband? ",
        answers: {
            a:	"Cosmic duo",
            b:	"Transcendent duo",
            c:	"Double Trouble",
            d:	"Double Exposure"
           
        },
        correctAnswer: "d"
    },
    {
        question: "5. What was the name of the scholarship Eleanor was awarded in 2001?",
        answers: {
            a:	"National Endowment for the Arts",
            b:	"National Endowment for Science, Technology and the Arts",
            c:	"National Endowment for Science",
            d:	"National Endowment for Technology",
                                   
        },
        correctAnswer: "b"
    },
    {
        question: "6. What year did Eleanor receive the Paul Hamlyn Foundation Award?",
        answers: {
            a:	2019,
            b:	2018,
            c:	2011,
            d:	2000,
                                     
        },
        correctAnswer: "a"
    }
]

let createQuiz = () => {
    answerKey.style.display = "none"
    
    const quizContainer = [];

    questions.forEach(
        (currentQuestion, questionNum) => {
            
            const possibleAnswers = [];

            for (answerLetter in currentQuestion.answers) {
                possibleAnswers.push(
                    `<label>
                    <input type="radio" name="question${questionNum}" value="${answerLetter}">
                    ${answerLetter} :
                    ${currentQuestion.answers[answerLetter]}
                    </label>`  
                );
            }
            quizContainer.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${possibleAnswers.join('')}</div>`
            );
        }
    );

    quiz.innerHTML = quizContainer.join('');
}


let displayResults = () => {
    const answerContainer = quiz.querySelectorAll('.answers');

    questions.forEach((currentQuestion, questionNum) => {
        const collectionOfAnswers = answerContainer[questionNum];
        const checkedInput = `input[name=question${questionNum}]:checked`;
        const userAnswer = (collectionOfAnswers.querySelector(checkedInput) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numOfCorrectAnswers++;
            answerContainer[questionNum].style.color = '#1AC923';
        } else {
            answerContainer[questionNum].style.color = '#E21D42';
        }
    });

    //display number of correct answers by user
    results.innerHTML = `<div>${numOfCorrectAnswers} out of ${questions.length} correct.</div>` 

    // custom message based on user results
    if(numOfCorrectAnswers <= 3 ){
        resultsMessage.innerHTML = `Hmmm... Not great`
    } else if(numOfCorrectAnswers === 4){
        resultsMessage.innerHTML = `Not bad.`
    } else if(numOfCorrectAnswers === 5){
        resultsMessage.innerHTML = `Good Work!`
    } else {
        resultsMessage.innerHTML = `WOW!!! Perfect score!`
    }

    //display answer key
    answerKey.style.display = "block"
    answerKey.innerHTML = `<div class="answer-key">Answer key</div> `

    for(let i=0; i<questions.length; i++){
       answerKey.innerHTML += ` <div class="correct">${i+1}. ${questions[i].correctAnswer}</div>`
    }
}

let resetQuiz = () => {
    createQuiz();
    results.innerHTML = "Let's see how you did";
    resultsMessage.innerHTML = "";
    answerKey.style.display = "none"
    numOfCorrectAnswers = 0;
    window.scrollTo(0, 0);
}

submit.addEventListener('click', displayResults);
reset.addEventListener('click', resetQuiz);
createQuiz(); 