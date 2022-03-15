const formEl = document.querySelector('.pw-generator')
const passwordEl = document.querySelector('#password')
const lengthEl = document.querySelector('#length')

const uppercaseEl = document.querySelector('#uppercase')
const lowercaseEl = document.querySelector('#lowercase')
const numbersEl = document.querySelector('#numbers')
const symbolsEl = document.querySelector('#symbols')

const password = []


formEl.addEventListener('click', (e) =>{
    if(e.target.classList.contains('copy') || e.target.parentNode.classList.contains('copy')){
        e.preventDefault()
        const textarea = document.createElement('textarea')
        const password = passwordEl.innerText
        if(!password){return}

        textarea.value = password
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        textarea.remove()
        alert('Password copied to clipboard!')

    }
    if(e.target.id === 'generatePw'){
        e.preventDefault()
        const hasUpper = uppercaseEl.checked   
        const hasLower = lowercaseEl.checked
        const hasNumber = numbersEl.checked
        const hasSymbol = symbolsEl.checked
        const length = +lengthEl.value
        passwordEl.innerText = generatePW(hasUpper,hasLower,hasNumber,hasSymbol,length)
        
    }
})

const randomFunc  ={
    lower: generateLower,
    upper: generateUpper,
    number: generateNumber,
    symbol: generateSymbol
}

function generatePW(lower, upper, number, symbol, length){
    let generatedPassword = ''
    const typesCount =  lower + upper + number + symbol
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
    if(typesCount === 0){
        return ''
    }
    for(let i = 0; i < length; i+= typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
    
}

function generateUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function generateLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function generateNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function generateSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}