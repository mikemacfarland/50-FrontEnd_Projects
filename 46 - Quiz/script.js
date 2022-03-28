const quizEl = document.querySelector('.quiz')
const answerEls = document.querySelectorAll('.answer')
const answersEl = document.getElementById('answers')
const questionEl = document.getElementById('question')
const count = document.getElementById('count')
const submitBtn = document.getElementById('submit')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

let currentIdx = 0
let score = 0
const questions = [
    {'question' : 'Which language runs in a browser',
            'a' : 'Javascript',
            'b' : 'Python',
            'c' : 'C++',
            'd' : 'Spanish',
      'correct' : 'a'
        },
    {'question' : 'When was CSS created',
            'a' : '1964',
            'b' : '1998',
            'c' : '2005',
            'd' : '1996',
      'correct' : 'd'
    },
    {'question' : 'Which of the following creates an empty array in Javascript',
            'a' : `let array = ''`,
            'b' : 'const arr = array',
            'c' : 'const arr = []',
            'd' : `var arr = 'array'`,
      'correct' : 'c'
    },
    {'question' : 'What does CSS stand for',
            'a' : 'Cascading Silhouette Styles',
            'b' : 'Cars Suvs and Sailboats',
            'c' : 'Cascading Style Sheets',
            'd' : 'Carne Salada Salume',
      'correct' : 'c'
    },
    {'question' : 'Which of the follwing is an acceptable alt property for an image',
            'a' : 'alt="furry bunny rabbit rabbit-ears cute adorable landscape grass"',
            'b' : 'alt="pet rabbit"',
            'c' : 'alt="my pet rabbit who likes grass"',
            'd' : `alt('pet-rabbit')`,
      'correct' : 'b'
    }
]

// the index is off by 1 and wont display the last question

count.innerHTML = questions.length


//there are issues with the indexing and logic in this event listener
submitBtn.addEventListener('click', () =>{
    if(submitBtn.value === 'Start the quiz'){
        submitBtn.value = 'Submit answer'
        count.parentNode.style.display = 'none'
        generateQuestion()
        return
    }
    if(submitBtn.value === 'Reload' && currentIdx === questions.length -1){
        window.location.reload()
    }
    else if(currentIdx < questions.length && submitBtn.value === 'Submit answer'){
        checkAnswer()
        currentIdx++
        if(currentIdx === questions.length -1){
        console.log(currentIdx,questions.length)
        checkAnswer()
        questionEl.innerText = `You got ${score} out of ${questions.length} questions right`
        submitBtn.value = 'Reload'
        answersEl.style.display = 'none'
        }
        generateQuestion()
    }  
})



function deselectAnswers(){
    answerEls.forEach(answer =>{
        answer.querySelector('input').checked = false
    })
}

function generateQuestion(){
    deselectAnswers()
    answersEl.style.display = 'flex'
    let i = currentIdx
    questionEl.innerText = questions[i].question
    a_text.innerText = questions[i].a
    b_text.innerText = questions[i].b
    c_text.innerText = questions[i].c
    d_text.innerText = questions[i].d
    
}

function checkAnswer(){
    let userAnswer
    answerEls.forEach(answer =>{
        input = answer.querySelector('input')
        if(input.checked === true){
            userAnswer = input.id
            if(userAnswer === questions[currentIdx].correct){
                score++
                console.log(score)
            }
            
        }
    })
}
