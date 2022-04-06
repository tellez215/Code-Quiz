const startButton = document.getElementById('startbtn')
const nextButton = document.getElementById('nextbtn')
const questionConEl = document.getElementById('questioncon')
const questionEl = document.getElementById('questions')
const answerBtnEl = document.getElementById('answerbtn')
const scoreTracker = document.getElementById('scoreTracker')
const scoreUpEl = document.getElementById('scoreUp')
var sec = 120;
var time = setInterval(myTimer, 2 * 1000);
let scoreUp = 0;


function myTimer() {
    document.getElementById('timer').innerHTML = sec + 'sec left';
    sec--;
    if (sec < 0) {
        clearInterval(time);
        alert('time ran out!! :(')
    }
}

let randomQuestions, currentQuestion

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestion++
    setNextQuestion()
})

function startGame() {
    console.log('started!')
    startButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionConEl.classList.remove('hide')
    scoreTracker.classList.remove('hide');
    setNextQuestion()
    scoreUpEl.textContent = 0;
}

function setNextQuestion() {

    resetAll()
    showQuestion(randomQuestions[currentQuestion])

}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnEl.appendChild(button)
    })
}

function resetAll() {
    nextButton.classList.add('hide')
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.lenght > currentQuestion + 0) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Next'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




const questions = [{
        question: 'What is the most used programming language?',
        answers: [
            { text: 'JavaScript', correct: true },
            { text: 'HTML', /*correct: false*/ },
            { text: 'CSS', /*correct: false*/ },
            { text: 'Java', /*correct: false*/ }

        ]
    },
    {
        question: 'What is NaN in JavaScript?',
        answers: [
            { text: 'No-And-No', correct: false },
            { text: 'Not-A-Number', correct: true },
            { text: 'Next-And-Next', correct: false },
            { text: 'Nothing', correct: false }

        ]
    },
    {
        question: 'Is JavaScript Hard?',
        answers: [
            { text: 'YES', correct: true },
            { text: 'pssh no?', correct: false },
            { text: 'Kinda', correct: false },
            { text: 'What is JavaScript?', correct: false }
        ]
    }
];

// function processResults(correctAnswer) {
//     if (selectAnswer >= questions.correct(true)) {
//         return;
//         scoreUp++
//     }
//     const scoreUp = parseInt(scoreUpEl.textContent, 10) || 0;

//     scoreUpEl.textContent = scoreUp + 100;
// }