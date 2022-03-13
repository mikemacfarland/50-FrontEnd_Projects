const APIURL = 'https://api.github.com/users/'
const formEl = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


formEl.addEventListener('submit', (e) =>{
    e.preventDefault()
    getUser(search.value)
    search.value = ''
})

async function getUser(userName){
    axios(APIURL + userName)
    // USING async await, USING try & catch (try code, catch error)
    try {
        const {data} = await axios(APIURL + userName)
        console.log(data)

        const userCard = `<div class="card">
            <div ><img class="avatar" src="${data.avatar_url}" alt="${data.name}"></div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul>
                    <li>${data.followers} <strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repositories</strong></li>
                </ul>
                <div id="repos">
                    <h3>This user has no public repos</h3>
                    <a href="#" class="repo">Repo 1</a>
                    <a href="#" class="repo">Repo 1</a>
                    <a href="#" class="repo">Repo 1</a>
                </div>
            </div>
        </div>`
    main.innerHTML = userCard
    }catch(err){
        console.log(err)
    }
    // USING .then .catch, getting response. logging response, getting error if any & logging error
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
}
