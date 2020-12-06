const quiz = document.getElementById('quiz');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const results = document.getElementById('results');

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

}