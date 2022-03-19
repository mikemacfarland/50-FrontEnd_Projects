images = document.querySelectorAll('.images img')
buttons = document.querySelectorAll('button')

//INTERVAL for NextImage() set to 5 seconds
setInterval(() => nextImage(),6000)

//BUTTON event listener
buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        
        if(e.target.id === 'next'){
            nextImage()
        }
        if(e.target.id === 'prev'){
            prevImage()
        }
    })
})

//NEXT image function
function nextImage(){
    for(let i = 0; i < images.length; i++){
        if(images[i].classList.contains('show') && i < images.length-1){
            images[i].classList.replace('show','left')
            images[i+1].classList.replace('right','show')
            break 
        }
        if(i === images.length-1){
            images.forEach(image => {
                image.className = 'right'
            });
            images[0].classList = 'show'
        }
    }
}

//PREV image function
function prevImage(){
    for(let i = 0; i < images.length; i++){
        if(images[i].classList.contains('show') && i > 0){
            images[i].classList.replace('show','right')
            
            images[i-1].classList.replace('left','show')
            break
        }
        if(images[0].classList.contains('show')){
            images.forEach(image =>{
                image.className = 'left'
            })
            images[images.length-1].className = 'show'
        }
    }
}

