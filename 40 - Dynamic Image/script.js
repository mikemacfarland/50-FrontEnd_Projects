const numberOfBoxes = 16
const boxesEl = document.querySelector('.boxes')
const magicBtn = document.querySelector('.magic')
let bgPositionLeft = 0
let bgPositionTop = 0



//this for loop could be refactored into a function that uses two for loops
//Insert div elements into box
for(let i = 0;i < numberOfBoxes;i++){
    box = document.createElement('div')
    box.className = 'box'
    box.style.backgroundPosition = `${bgPositionLeft}px ${bgPositionTop}px`
    boxesEl.appendChild(box)
    bgPositionLeft -= 125
    if(bgPositionLeft < -499){
        bgPositionLeft = 0
    }
    if(i > 2){bgPositionTop = -125}
    if(i > 6){bgPositionTop = -250}
    if(i > 10){bgPositionTop = -375}
}

//Event listener for button to toggle big classlist on boxes container
magicBtn.addEventListener('click', ()=>{
    boxesEl.classList.toggle('big')
})