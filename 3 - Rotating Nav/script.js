// const openNav = document.getElementById('open')
// const closeNav = document.getElementById('close')

const container = document.querySelector('.container')

container.addEventListener('click', (e) =>{
    if(e.target.parentNode.id === "open"){
        container.classList.add('show-nav')
    }
    if(e.target.parentNode.id === "close"){
        container.classList.remove('show-nav')
    }
})

// ======== both of these work but the icon is not clickable within the button tags=======

// const container = document.querySelector('.container')
// const navButtons = document.getElementsByTagName('button')

// navButtons.forEach(button => {
//     button.addEventListener('click', (button) => {
//         if (button.target.id === 'open'){
//         Container.classList.add('show-nav')
//         }
//         if (button.target.id === 'close'){
//         Container.classList.remove('show-nav')
//         }
// })})
