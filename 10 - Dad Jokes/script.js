let jokeEl = document.querySelector('.joke')
const jokeBtn = document.querySelector('.btn')

newJoke()

// USING async await

//when using await in a function, you must use async in front of the 
//function declaration
async function newJoke() { 
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}

// USING .then()

// function newJoke() { 
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//             .then((response) => response.json())
//             .then((data) => {
//                 jokeEl.innerHTML = data.joke
//             })           
// }

jokeBtn.addEventListener('click', ()=> newJoke())