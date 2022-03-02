const eventKey = document.querySelector('.key')
const eventKeyCode = document.querySelector('.keycode')
const eventCode = document.querySelector('.code')

document.addEventListener('keydown', (e) =>{
    eventKey.textContent = e.key
    eventKeyCode.textContent = e.keyCode //depreciated
    eventCode.textContent = e.code
    logKey(e)
})

function logKey(e){
    console.log(e.key)
    console.log(e.keyCode)
    console.log(e.code)
}