const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_image')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_texts = document.querySelectorAll('.animated-bg-text')

function getData(){
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" alt="computer">`
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excerpt.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestiae.`
    profile_img.innerHTML = `<img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="John Julio">`
    name.innerHTML = `John Julio`
    date.innerHTML = `Oct 3, 2021`

    animated_bgs.forEach(bg =>{
        bg.classList.remove('animated-bg')
    })
    animated_texts.forEach(text =>{
        text.classList.remove('animated-bg-text')
    })
}

setTimeout(() => getData(),2500)