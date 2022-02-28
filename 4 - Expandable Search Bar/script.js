const search = document.querySelector('#search')
const searchButton = document.querySelector('button')
const searchBar = document.querySelector('.search-bar')

searchBar.addEventListener('click', (e) =>{
    if (e.target === searchButton || e.target.parentNode === searchButton){
        search.classList.add('active')
        searchButton.classList.add('active')
        search.classList.add('active')
    }
})
