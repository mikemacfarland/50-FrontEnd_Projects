let number = 20
const PokeAPIURL = `https://pokeapi.co/api/v2/pokemon/${number}/` 

//HOW TO use axios url below
//https://zetcode.com/javascript/axios/

// when using axios globally, Script tag must be included in html for CDN
{/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */}

getData(PokeAPIURL)

async function getData(url){
    axios.get(url)
    .then(res =>{
        try{console.log(res.data)
        }
        catch(err){
            console.error(err)
        }
    })
}

