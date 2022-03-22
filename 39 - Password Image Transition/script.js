const passwordEl = document.querySelector('#password')
const background = document.querySelector('#background')

passwordEl.addEventListener('input', () =>{
    length = passwordEl.value.length
    blurValue = 20 - (length * 2)
    console.log(blurValue)
    background.style.filter = `blur(${blurValue}px)`
})