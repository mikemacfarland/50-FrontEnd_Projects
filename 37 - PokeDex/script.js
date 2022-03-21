const container = document.querySelector('.container')
let number = 100
let name = 'ditto'
let type = 'type/3'
let endpoint = ''
const PokeAPIURL = `https://pokeapi.co/api/v2/pokemon/`
// let limitOffset = `?limit=${limit}&offset=${offset}`

//HOW TO use axios url below
//https://zetcode.com/javascript/axios/

// when using axios globally, Script tag must be included in html for CDN
{/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */}


getData(number)

async function getData(number){
    for(let i = 0; i < number; i++){
        axios.get(PokeAPIURL + i).then(res =>{
            console.log(res.data)
            try{
                let pokemon = res.data
                generatePokemonEl(pokemon)
            }   
            catch(err){
                console.error(err)
            }
        })
        }  
    } 

function generatePokemonEl(data){
    const pokemonEl = document.createElement('div')
    const type = data.types[0].type.name
    const name = data.name[0].toUpperCase() + data.name.slice(1)
    pokemonEl.className = 'pokemon'
    pokemonEl.style.backgroundColor = setBackground(type)
    pokemonEl.innerHTML = `<img src="${data.sprites.front_default}" alt="">
                         <p id="number">#${data.id.toString().padStart(4,0)}</p>
                         <h2 class="name">${name}</h2>
                         <p class="type">type: ${type}</p>`
    container.prepend(pokemonEl)
    }

function setBackground(type){
    let types = {
        'normal' : '#A8A77A80',
        'fire' :  '#EE813080',
        'water' :  '#6390F080',
        'electric' :  '#F7D02C80',
        'grass' :  '#7AC74C80',
        'ice' :  '#96D9D680',
        'fighting' :  '#C22E2880',
        'poison' :  '#A33EA180',
        'ground' :  '#E2BF6580',
        'flying' :  '#A98FF380',
        'psychic' :  '#F9558780',
        'bug' :  '#A6B91A80',
        'rock' :  '#B6A13680',
        'ghost' :  '#73579780',
        'dragon' :  '#6F35FC80',
        'dark' :  '#70574680',
        'steel' :  '#B7B7CE80',
        'fairy' :  '#D685AD80'}
        return types[type]
}