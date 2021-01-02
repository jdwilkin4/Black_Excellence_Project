const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const results = document.getElementById("results");
const answerKey = document.getElementById("answer-key");
const resultsMessage = document.getElementById("results-message");

let numOfCorrectAnswers = 0;

const questions = [
    {
        question: "1. What age did Florence have her first composition published?",
        answers: {
            a:	9,
            b:	10,
            c:	11,
            d:	12
        },
        correctAnswer: "c"
    },
    {
        question: "2. Where did Florence receive her Bachelor of Music degree?",
        answers: {
            a:	"New England Conservatory",
            b:	"Julliard",
            c:	"Eastman", 
            d:	"Curtis" 
        },
        correctAnswer: "a"
    },
    {
        question: "3. What was the name of the music teacher’s association that denied Florence admission?",
        answers: {
            a:	"Arkansas Music Teachers Association",
            b:	"Chicago Music Teachers Association",
            c:	"New York Music Teachers Association",
            d:	"Los Angeles Music Teachers Association" 
        },
        correctAnswer: "a"
    },
    {
        question: "4. What was the name of Florence’s second husband?",
        answers: {
            a:	"Randy Johnson",
            b:	"Scott Mills",
            c:	"Daniel Williams",
            d:	"Pusey Dell Arnett"            
        },
        correctAnswer: "d"
    },
    {
        question: "5. What was the name of the orchestra that performed her first symphony in 1933?",
        answers: {
            a:	"New York Philharmonic",
            b:	"Chicago Symphony",
            c:	"Los Angeles Philharmonic",
            d:	"San Francisco Symphony",                        
        },
        correctAnswer: "b"
    },
    {
        question: "6. Which college did Florence NOT continue her education in? ",
        answers: {
            a:	"American Conservatory of Music",
            b:	"Chicago Teachers College",
            c:	"University of Maryland", 
            d:	"Chicago Musical College"                         
        },
        correctAnswer: "c"
    },
    {
        question: "7. What does CMA stand for?",
        answers: {
            a:	"Charlotte Music Association",
            b:	"Chicago Music Association",
            c:	"Cabot Music Association",
            d:	"Cadillac Music Association"                           
        },
        correctAnswer: "b"
    },
    {
        question: "8. Which way did Florence NOT earn a living?",
        answers: {
            a:	"Opera singer",
            b:	"Sales from piano works",
            c:	"Orchestrator for WGN radio",
            d:	"Organist for silent films"                          
        },
        correctAnswer: "a"
    },
    {
        question: "9. Which conductor commissioned Florence to write a suite for strings?",
        answers: {
            a:	"Leonard Bernstein",
            b:	"Pierre Boulez",
            c:	"Herbert von Karajan",
            d:	"Sir John Barbirolli"                            
        },
        correctAnswer: "d"
    },
    {
        question: "10. What year did Florence Price die from complications of a stroke?",
        answers: {
            a:	1950,
            b:	1940,
            c:	1960,
            d:	1953                                       
        },
        correctAnswer: "d"
    }
]

let createQuiz = () => {
    
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
    if(numOfCorrectAnswers < 6 ){
        resultsMessage.innerHTML = `Hmmm... Not great`
    } else if(numOfCorrectAnswers >= 6 && numOfCorrectAnswers<=7){
        resultsMessage.innerHTML = `Not bad.`
    } else if(numOfCorrectAnswers >= 8 && numOfCorrectAnswers<=9){
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
    numOfCorrectAnswers=0;
    window.scrollTo(0, 0);
}

submit.addEventListener('click', displayResults);
reset.addEventListener('click', resetQuiz);
createQuiz(); 

