const startButton = document.getElementById('startbtn')
const nextButton = document.getElementById('nextbtn')
const questionConEl = document.getElementById('questioncon')
const questionEl = document.getElementById('questions')
const answerBtnEl = document.getElementById('answerbtn')
const scoreTracker = document.getElementById('scoreTracker')
const scoreUpEl = document.getElementById('scoreUp')

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
    if (randomQuestions.lenght > currentQuestion + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
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
        { text: 'HTML', correct: false }
    ]
}]