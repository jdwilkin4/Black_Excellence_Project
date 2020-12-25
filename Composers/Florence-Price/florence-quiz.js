const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const results = document.getElementById("results");

let questions = {};
let numOfCorrectAnswers = 0;

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
            answerContainer[questionNum].style.color = 'green';
        } else {
            answerContainer[questionNum].style.color = 'red';
        }
    });
    results.innerHTML = `${numOfCorrectAnswers} out of ${questions.length}`; 

}

let resetQuiz = () => {
    createQuiz();
    results.innerHTML = "Let's see how you did";
    numOfCorrectAnswers=0;
    window.scrollTo(0, 0);
}

const loadJSON = (callback) => { 
    const xobj = new XMLHttpRequest(); 
     xobj.overrideMimeType("application/json"); 
     xobj.open('GET', 'florence-quiz-questions.json', true);  
     xobj.onreadystatechange =  () => { 
        if (xobj.readyState == 4 && xobj.status == "200") { 
        callback(xobj.responseText); 
        } 
     }; 
     xobj.send(null);  
} 

loadJSON()
  .then((questionsJson) => {
    questions = questionsJson;
    submit.addEventListener('click', displayResults);
    reset.addEventListener('click', resetQuiz);
    createQuiz();
  })
  .catch(alert);
   




