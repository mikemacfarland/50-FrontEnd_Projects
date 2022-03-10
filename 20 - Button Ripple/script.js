const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click', (e) =>{
        // button.querySelector('span').remove()
        const span = document.createElement('span')
        span.classList.add('circle')

        //USING e.offsetY - look at what console.log(e) gives you on a event handler. many attributes on e. come up
        span.style.top = `${e.offsetY}px`
        span.style.left = `${e.offsetX}px`
        button.appendChild(span)
        
        // set timeout takes in a function, must use arrow function if code is
        // not a defined function
        setTimeout(() => button.querySelector('span').remove(),500)
    })
})