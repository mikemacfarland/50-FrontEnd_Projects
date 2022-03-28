const imageContainer = document.querySelector('.image-container')
const imgSrc = 'https://source.unsplash.com/random/'
const images = 12

for(let i = 0; i < images; i++){
    imageEl = document.createElement('img')
    imageEl.src = imgSrc + randomSize()
    imageContainer.appendChild(imageEl)
}

function randomSize(){
    size = 240 + Math.floor(Math.random() * 50)
    console.log(size,size)
    return `${size}x${size}`
}