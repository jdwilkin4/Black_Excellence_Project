const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const results = document.getElementById("results");
const answerKey = document.getElementById("answer-key");
const resultsMessage = document.getElementById("results-message");

let numOfCorrectAnswers = 0;

const questions = [
    {
        question: "1. What year was Eubie Blake born?",
        answers: {
            a:	1890,
            b:	1900,
            c:	1876,
            d:	1887
            
        },
        correctAnswer: "d"
    },
    {
        question: "2. What age did Eubie began playing piano at Aggie Shelton's Baltimore bordello?",
        answers: {
            a:	12,
            b:	13,
            c:	16,
            d:	15
            
        },
        correctAnswer: "d"
    },
    {
        question: "3. What was the name of the orchestra that Eubie began playing with in 1912?",
        answers: {
            a:	"James Reese Europe Society Orchestra",
            b:	"James Taylor America Society Orchestra",
            c:	"Michael Reese Europe Society Orchestra",
            d:	"Ann Mitchell Orchestra" 
            
        },
        correctAnswer: "a"
    },
    {
        question: "4. What was the name of the vaudeville musical act with Noble Sissle?",
        answers: {
            a:	"Bros duo",
            b:	"Dixie Duo",
            c:	"Happy Duo",
            d:	"Jazzy Duo"
                       
        },
        correctAnswer: "b"
    },
    {
        question: "5. What was the name of the Broadway show involving Eubie Blake that premiered in 1921? ",
        answers: {
            a:	"Shuffle Along",
            b:	"Dancin’",
            c:	"Happy Feet",
            d:	"Tappin’"
                                  
        },
        correctAnswer: "a"
    },
    {
        question: "6. What year did Blake made three films for Lee de Forest? ",
        answers: {
            a:	1920,
            b:	1923,
            c:	1930,
            d:	1924
                                    
        },
        correctAnswer: "b"
    },
    {
        question: "7. Who was Eubie Blake’s First wife?",
        answers: {
            a:	"Sarah Vaughan",
            b:	"Jessica Mitchell",
            c:	"Avis Elizabeth Cecelia Lee",
            d:	"Nicole Smith"
                                       
        },
        correctAnswer: "c"
    },
    {
        question: "8. Who was Eubie Blake’s second wife?",
        answers: {
            a:	"Marion Grant Tyler",
            b:	"Marion Smith",
            c:	"Shelly Tyler",
            d:	"Rachel Grant Tyler"
                                     
        },
        correctAnswer: "a"
    },
    {
        question: "9. What year did Blake retire from performing and enrolled in New York University?",
        answers: {
            a:	1946,
            b:	1947,
            c:	1948,
            d:	1949
                           
        },
        correctAnswer: "a"
    },
    {
        question: "10. What was the date of Eubie Blake’s death?",
        answers: {
            a:	"January 10, 1983",
            b:	"February 12, 1983",
            c:	"March 12, 1982",
            d:	"June 11, 1985"
                                                  
        },
        correctAnswer: "b"
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
    numOfCorrectAnswers = 0;
    window.scrollTo(0, 0);
}

submit.addEventListener('click', displayResults);
reset.addEventListener('click', resetQuiz);
createQuiz(); 