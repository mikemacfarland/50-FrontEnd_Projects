const small = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

small.forEach((cup, idx) =>{
    cup.addEventListener('click', () => hightLightCups(idx))
})

function hightLightCups(idx){
    if(small[idx].classList.contains('full') && !small[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    small.forEach((cup, idx2) =>{
        if(idx2 <= idx) {
            cup.classList.add('full')
        }
        else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = small.length
    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }
    else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }
    else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}