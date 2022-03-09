// variable that selects textarea
const txtArea = document.querySelector('textarea')
const choicesDiv = document.querySelector('.choices')

txtArea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter'){
        createChoices(txtArea)
        selectRandom()
    }
})
    
function createChoices(input) {
            const choices = input.value
                        .split(",")
                        .filter(choice => choice
                            .trim() !== '')
                            .map(choice => choice
                            .trim())

            choices.forEach(choice => {
                choiceDiv = document.createElement('div')
                choiceDiv.innerHTML = ''
                choiceDiv.classList.add('choice')
                choiceDiv.textContent = choice
                choicesDiv.append(choiceDiv)
                input.value = ''
            })
        }

function selectRandom() {
    const times = 30

    const interval = setInterval(() =>{
        const randomChoice = pickRandomChoice()
        highlightChoice(randomChoice)

        setTimeout(() =>{
            unHighlightChoice*(randomChoice)
        },100)
    },100)
}

function pickRandomChoice() {
    const choices = document.querySelectorAll('.choice')
    return choices[Math.floor(Math.random() * choices.length)]
    console.log(choices[Math.floor(Math.random() * choices.length)])
}

function highlightChoice(choice){
    choice.classList.add('highlight')
}

function unHighlightChoice(choice){
    choice.classList.remove('highlight')
}
