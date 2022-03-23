const quantity = 25
const userAPIURL = `https://randomuser.me/api?results=${quantity}&nat=us`
const usersEl = document.querySelector('.users')
const searchEl = document.querySelector('#search')


getUsers(userAPIURL,quantity)

async function getUsers(url){
    axios.get(url).then(res => {
    try{
        let users = res.data.results
        users.forEach(user => generateUser(user))
        }
    catch(err){
        console.log(err)
        }
    })
}

function generateUser(user){
        const userEl = document.createElement('div')
        userEl.className = 'user'
        userEl.innerHTML = `<img src="${user.picture.medium}" alt="">
                            <div>
                                 <h2 id="name">${user.name.first} ${user.name.last}</h2>
                                <small id="location">${user.location.city} ${user.location.country}</small>
                            </div>`
        usersEl.appendChild(userEl)
}

//SEARCH function

//can also use 'input' listener for an input
searchEl.addEventListener('keyup', () =>{
    const users = document.querySelectorAll('.user')
    let search = searchEl.value.toUpperCase()
    users.forEach(user =>{
        userName = user.querySelector('#name').textContent.toUpperCase()
        userLocation = user.querySelector('#location').textContent.toUpperCase()
        if(!userName.includes(search) && !userLocation.includes(search)){
            user.style.display = 'none'
            // could also use a class of "hide" with this property and toggle it or add and remove
        }
        else{
            user.style.display = 'inherit'
        }
    })
})