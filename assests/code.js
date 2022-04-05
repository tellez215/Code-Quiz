const startButton = document.getElementById('startbtn')
const questionContainerEl = document.getElementById('questioncon')

const questionEl = document.getElementById('questions')
const answerBtnEl = document.getElementById('answerbtn')

let randomQuestions, currentQuestion

startButton.addEventListener('click', startGame)


function startGame() {
    console.log('started!')
    startButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
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

function selectAnswer(e) {

}


const questions = [{
    question: 'What is the most used programming language?',
    answers: [
        { text: 'JavaScript', correct: true },
        { text: 'HTML', correct: false }
    ]
}]