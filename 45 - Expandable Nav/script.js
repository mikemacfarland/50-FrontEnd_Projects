const navBtns = document.querySelectorAll('.nav-button')
const headerEl = document.querySelector('header')
const headerBgs = document.querySelectorAll('.header-bg')

navBtns.forEach(btn => btn.addEventListener('click', (e) =>{
    if(btn.id === 'open-nav' && !headerEl.classList.contains('active')){
        headerEl.classList.add('active')
        headerBgs.forEach(header =>{header.classList.add('active')})
    }
    if(btn.id === 'close-nav' && headerEl.classList.contains('active')){
        headerEl.classList.remove('active')
        headerBgs.forEach(header =>{header.classList.remove('active')})
    }
}))