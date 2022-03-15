const phraseEl = document.querySelector('.phrase')
const buttons = document.querySelectorAll('button')
const speedEl = document.querySelector('.speed')
let speed = 200 / speedEl.innerHTML
const phrase = phraseEl.innerText.split('')

writePhrase()

function writePhrase(){
    phraseEl.innerText = ''
    phrase.forEach((letter,idx) =>{
    setTimeout(() => phraseEl.innerHTML+=letter,speed * (idx))
    })
    setTimeout(writePhrase,speed * phrase.length)
}

buttons.forEach(button => button.addEventListener('click', (e) =>{
    if((e.target.classList.contains('up') || e.target.parentNode.classList.contains('up')) && speedEl.innerHTML < 10){
        speedEl.innerHTML++
        speed = 100/speedEl.innerHTML
        }
    if((e.target.classList.contains('down') || e.target.parentNode.classList.contains('down')) && speedEl.innerHTML > 1){
        speedEl.innerHTML--
        speed = 100/speedEl.innerHTML
    }
}))