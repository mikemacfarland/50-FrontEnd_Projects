// USING if statements

// const questions = document.querySelectorAll('.faq')

// questions.forEach(question =>{
//     question.addEventListener('click', (e) =>{
//         console.log(e.target)
//         if (e.target.classList.contains('fa-chevron-down')){
//             question.classList.add('active')
//         }
//         if (e.target.classList.contains('fa-times')){
//             question.classList.remove('active')
//         }
//     })
// })

// USING toggle method
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () =>{
        toggle.parentNode.classList.toggle('active')
    })
})