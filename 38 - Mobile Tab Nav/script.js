const links = document.querySelectorAll('a')
const backgrounds = document.querySelectorAll('img')
const header = document.querySelector('h2')

links.forEach(link =>{
    link.addEventListener('click', (e) =>{
        e.preventDefault()
        let linkName = e.target.id
        if(linkName === ''){
            linkName = e.target.parentNode.id
        }
        header.innerHTML = linkName.charAt(0).toUpperCase() + linkName.slice(1)
        backgrounds.forEach(bg =>{
            bg.classList.add('hide')
            if(bg.classList.contains(linkName)){
                bg.classList.remove('hide')
            }
        })
    })
})