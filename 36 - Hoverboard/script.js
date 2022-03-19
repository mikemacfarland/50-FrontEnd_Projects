const containerEl = document.querySelector('.container')
const colors = ['#e743c','#8e44ad','#3498db','#e67e22','#2ecc71']

const squares = 500

//FOR loop
for(let i = 0; i < squares; i++){
    const square = document.createElement('div')
    square.className = 'square'
    containerEl.appendChild(square)

    //MOUSE events
    square.addEventListener('mouseover', () => setColor(square,randomColor()))
    square.addEventListener('mouseleave', () => removeColor(square))
}

//RANDOM color function
function randomColor(){
     color = colors[Math.floor(Math.random() * colors.length)]
     return color
}

//SET color
function setColor(element,color){
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`
}

//REMOVE color
function removeColor(element){
    element.style.backgroundColor = ''
    element.style.boxShadow = ''
}

//CREATE color scheme selector, # of squares selector