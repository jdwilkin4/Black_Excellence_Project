const quiz = document.getElementById('quiz');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const results = document.getElementById('results');
const answerKey = document.getElementById("answer-key");
const resultsMessage = document.getElementById("results-message");

let numOfCorrectAnswers = 0;

const quizQuestions = [
    {
        question:'What age did Duke Ellington earn his nickname “Duke”?',
        answer:{
            a:10,
            b:20,
            c:7,
            d:12
        },
        correctAnswer:"c"
    },
    {
        question:'What decade did Duke Ellington tour Europe?',
        answer:{
            a:"1920's",
            b:"1930's",
            c:"1940's",
            d:"1950's"
        },
        correctAnswer:"b"
    },
    {
        question:'Which piece did Duke Ellington NOT write?',
        answer:{
            a:"Concerto for Cootie",
            b:"Cotton Tail",
            c:"Ko-Ko",
            d:"So what"
        },
        correctAnswer:"d"
    },
    {
        question:'What was the name of Duke’s wife?',
        answer:{
            a:	"Edna Thompson", 
            b:	"Ella fitzgerald",
            c:	"Nancy Wilson",
            d:	"Shirley McClain"   
        },
        correctAnswer:"a"
    },
    {
        question:'What year did Duke Ellington pass away?',
        answer:{
            a:	1980,
            b:	1990,
            c:	1974,
            d:	1978 
              
        },
        correctAnswer:"c"
    }
]

let createQuiz = () => {
    answerKey.style.display = "none"

    const quizContainer = [];

    quizQuestions.forEach(
        (currentQuestion, questionNum) => {
            const possibleAnswers = [];

            for(answerLetter in currentQuestion.answer){
                possibleAnswers.push(
                    `<label>
                    <input type="radio" name="question${questionNum}" value="${answerLetter}">
                    ${answerLetter} : ${currentQuestion.answer[answerLetter]}
                    </label>`
                );
            }
            quizContainer.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${possibleAnswers.join('')}</div>`
            )
        }
    )
    quiz.innerHTML = quizContainer.join('');
}

let displayResults = () => {
    const answerContainer = quiz.querySelectorAll('.answers');

    quizQuestions.forEach((currentQuestion, questionNum) => {
        const collectionOfAnswers = answerContainer[questionNum];
        const checkedInput = `input[name=question${questionNum}]:checked`
        const userAnswer = (collectionOfAnswers.querySelector(checkedInput) || {}).value

        if(userAnswer === currentQuestion.correctAnswer){
            numOfCorrectAnswers++;
            answerContainer[questionNum].style.color = '#1AC923';
        } else {
            answerContainer[questionNum].style.color = '#E21D42';
        }
    });  
 
    //display number of correct answers by user
    results.innerHTML =  `<div>${numOfCorrectAnswers} out of ${quizQuestions.length} correct.</div>`

    // custom message based on user results
    if(numOfCorrectAnswers < 2 ){
        resultsMessage.innerHTML = `Hmmm... Not great`
    } else if(numOfCorrectAnswers === 3){
        resultsMessage.innerHTML = `Not bad.`
    } else if(numOfCorrectAnswers === 4){
        resultsMessage.innerHTML = `Good Work!`
    } else {
        resultsMessage.innerHTML = `WOW!!! Perfect score!`
    }

    //display answer key
    answerKey.style.display = "block"
    answerKey.innerHTML = `<div class="answer-key">Answer key</div> `

    for(let i=0; i<quizQuestions.length; i++){
        answerKey.innerHTML += ` <div class="correct">${i+1}. ${quizQuestions[i].correctAnswer}</div>`
    }

}

let resetQuiz = () => {
    createQuiz();
    results.innerHTML = "Let's see how you did";
    resultsMessage.innerHTML = "";
    answerKey.style.display = "none";
    numOfCorrectAnswers = 0;
    window.scrollTo(0, 0);
}

submit.addEventListener('click', displayResults);
reset.addEventListener('click', resetQuiz);
createQuiz();
