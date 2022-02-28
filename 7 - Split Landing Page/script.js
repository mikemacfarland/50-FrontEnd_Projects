const xbox = document.querySelector('.xbox')
const ps5 = document.querySelector('.ps5')

const containers = document.querySelectorAll('container')

window.addEventListener('mouseover', (e) =>{
    
    if (e.target = ps5){
        ps5.classList.add('active')
        xbox.classList.remove('active')
    }
    // else{
    //     ps5.classList.remove('active')
    // }
    if (e.target === xbox){
        xbox.classList.add('active')
        ps5.classList.remove('active')
    }
    // else{
    //     xbox.classList.remove('active')
    // }
})


// if mouse is over container elements expand them

// if mouse is not over anything remove active from everything (else)