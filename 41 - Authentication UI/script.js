const inputsEl = document.querySelector('.inputs')
const inputs = document.querySelectorAll('.inputs input')

inputs[0].focus()

inputs.forEach((input,idx) =>{
    input.addEventListener('focus', () =>{
    if(idx > 0 && inputs[idx-1].value === ''){
        inputs[idx-1].focus()
        }
    })
    // theres still an error when last number is typed in
    input.addEventListener('keydown', (e) =>{
        if(e.key >= 0 && e.key <=9){
            inputs[idx].value = ''
            setTimeout(() => inputs[idx + 1].focus(),10)
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => inputs[idx - 1].focus(),10)
        }
    })
})