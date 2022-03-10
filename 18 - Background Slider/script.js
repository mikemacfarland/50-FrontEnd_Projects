const arrows = document.querySelectorAll('.arrow')
const slides = document.querySelectorAll('.slide')
const body = document.querySelector('body')


let activeSlide = 0

setBgToBody()

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

arrows.forEach(arrow => {
    arrow.addEventListener('click', (e) =>{
        if(e.target.id === 'right' || e.target.parentNode.id === 'right'){
            activeSlide++
            if(activeSlide > slides.length - 1){
                activeSlide = 0
            }
            setBgToBody()
            setActiveSlide()
        }
        if(e.target.id ==='left' || e.target.parentNode.id === 'left'){
            activeSlide--
            if(activeSlide < 0){
                activeSlide = slides.length -1
            }
            setBgToBody
            setActiveSlide()
        }
    })
})

// arrows.forEach(arrow =>{
//     arrow.addEventListener('click', (e) =>{
//         if(e.target.classList.contains('right-arrow') || e.target.parentNode.classList.contains('right-arrow')){
//             nextSlide()
//         }
//         if(e.target.classList.contains('left-arrow') || e.target.parentNode.classList.contains('left-arrow')){
//             // previousSlide()
//         }
//     })
// })

// function nextSlide(){
//     slides.forEach((slide,i) => {
//         if(slide.classList.contains('active')){
//             nextBackground = slides[i+1].style.backgroundImage
//             body.style.background = nextBackground
//             slide.classList.remove('active')
//             slide
//         }
//     })
// }