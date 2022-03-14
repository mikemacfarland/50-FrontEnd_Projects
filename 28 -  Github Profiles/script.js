const APIURL = 'https://api.github.com/users/'
const formEl = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

formEl.addEventListener('submit', (e) =>{
    e.preventDefault()
    createUserCard(search.value)
})

async function createUserCard(userName){
    axios(APIURL + userName)
    // USING async await, USING try & catch (try code, catch error)
    try {
        const {data} = await axios(APIURL + userName)
        const userCard = `<div class="card">
            <div><img class="avatar" src="${data.avatar_url}" alt="${data.name}"></div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul>
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repositories</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>`
        main.innerHTML = userCard
        getUserRepos(userName)
    }
    catch (err) {
        error = err.response
        if (error.status === 404){
            createErrorCard(`User "${search.value}" not found`,main)
        }
    }
    search.value = ''
}

async function getUserRepos(userName){
    axios(APIURL + userName + '/repos?sort=created')
    const reposEl = document.getElementById('repos')
        try{
            const {data} = await axios(APIURL + userName + '/repos?sort=created')
            repos = data
            if(repos.length === 0){
                createErrorCard('This user has no repos',reposEl)
            }
            else{
            repos.splice(0,6).forEach((repo) =>{
                repoEl = document.createElement('a')
                repoEl.classList.add('repo')
                repoEl.href = repo.html_url
                repoEl.target = '_blank'
                repoEl.innerText = repo.name
                reposEl.append(repoEl)
                })
            }
        }
        catch (err){
            console.log(error)
            if (error.status === 404)
            createErrorCard('This user has no repos',repos)
        }
}

function createErrorCard(msg,targetEl){
    const cardHTML = `<div class="error card"><h2>${msg}</h2></div>`
    targetEl.innerHTML = cardHTML
}