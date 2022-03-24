const ratingsEls = document.querySelectorAll('.rating')
const sendEl = document.querySelector('#submit')
const formEl = document.querySelector('form')


    ratingsEls.forEach(rating => {
        rating.addEventListener('change', () =>{
        let input = rating.querySelector('input')
        ratingsEls.forEach(rating =>rating.classList.remove('checked'))
        if(input.checked === true){
            rating.classList.add('checked')
        }
    })
})

sendEl.addEventListener('click', (e) => {
    e.preventDefault()
    let thanks = document.createElement('h2')
    thanks.className = 'thanks'
    thanks.innerText = 'Thanks for your feeback!'
    formEl.innerHTML = ''
    formEl.append(thanks)
})