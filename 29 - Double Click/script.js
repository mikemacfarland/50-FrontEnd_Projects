const imageDiv = document.querySelector('.image')
const heart = document.querySelector('.heart')
const likeCountEl = document.querySelector('.likes')

let likeCount = 0
likeCountEl.innerHTML = likeCount
let clickTime


imageDiv.addEventListener('mousedown', (e) =>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
    } else{
        if((new Date().getTime() - clickTime) <800){
            createHeart(e)
            clickTime = 0
            setTimeout( () => removeHeart(),1000)
        } else{
            clickTime = new Date().getTime()
        }
    }
    
    
})

function createHeart(e) {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    heart.style.left = `${e.offsetX}px`
    heart.style.top = `${e.offsetY}px`
    imageDiv.appendChild(heart)

    likeCount += 1
    likeCountEl.innerHTML = likeCount
}

function removeHeart() {
    imageDiv.firstChild.remove()
}
    

   