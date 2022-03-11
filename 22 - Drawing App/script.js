// CANVAS
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// BUTTONS
const btns = document.querySelectorAll('button')
const color = document.getElementById('color')
let sizeDisp = document.getElementById('size')
let size = 5

// MOUSE PRESS
let isPressed = false

btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        if(btn.id === 'increase' && size < 50){
            sizeDisp.innerHTML++
            console.log(size)
            size = sizeDisp.innerHTML
        }
        if(btn.id === 'decrease' && size > 1){
            sizeDisp.innerHTML--
            console.log(size)
            size = sizeDisp.innerHTML
        }
        if(btn.id === 'clear'){
            ctx.clearRect(0,0,canvas.width,canvas.height)
        }
    })
})




// CANVAS EVENT LISTENER - GET MOUSE POSITION ON MOUSEDOWN
canvas.addEventListener('mousedown', (e) =>{
    isPressed = true
    x = e.offsetX
    y = e.offsetY
    console.log(isPressed,x,y)
    drawCircle(x,y)
})

// CANVAS EVENT LISTENER - GET MOUSE POSITION ON MOUSEUP
canvas.addEventListener('mouseup', (e) =>{
    isPressed = false
    x = undefined
    y = undefined
    console.log(isPressed,x,y)
})

// CANVAS EVENT LISTENER - GET MOUSE MOVE COORDINATES
canvas.addEventListener('mousemove', (e) =>{
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x,y)
        drawLine(x,y,x2,y2)
        x = x2
        y = y2

        console.log(isPressed,x2,y2)
    }
    
})


function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI * 2, true)
    ctx.fillStyle = color.value
    ctx.fill()

}

function drawLine(x1,y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color.value
    ctx.lineWidth = size *2
    ctx.stroke()
}

