//needs fixing
const question = require('./florence-quiz-questions.json');
const answers = require('./florence-quiz-questions.json');
const correctAnswer = require('./florence-quiz-questions.json');

const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const results = document.getElementById("results");

let numOfCorrectAnswers = 0;

let createQuiz = () => {
    
    const quizContainer = [];

    forEach(
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

    forEach((currentQuestion, questionNum) => {
        const collectionOfAnswers = answerContainer[questionNum];
        const checkedInput = `input[name=question${questionNum}]:checked`;
        const userAnswer = (collectionOfAnswers.querySelector(checkedInput) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numOfCorrectAnswers++;
            answerContainer[questionNum].style.color = 'green';
        } else {
            answerContainer[questionNum].style.color = 'red';
        }
    });
    results.innerHTML = `${numOfCorrectAnswers} out of ${length}`; 

}

let resetQuiz = () => {
    createQuiz();
    results.innerHTML = "Let's see how you did";
    numOfCorrectAnswers=0;
    window.scrollTo(0, 0);
}

submit.addEventListener('click', displayResults);
reset.addEventListener('click', resetQuiz);
createQuiz(); 


