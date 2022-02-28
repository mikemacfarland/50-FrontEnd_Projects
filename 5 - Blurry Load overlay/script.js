const background = document.querySelector('.bg')
const counter = document.querySelector('.counter')

let load = 0

let interval = setInterval(blurring,30)

function blurring(){
    load++
    if (load > 99){
        clearInterval(interval)
    }
    counter.innerText = `${load}%`
    counter.style.opacity = 1 - (load / 100)
    background.style.filter = `blur(${scale(load,0,100,1.875,0)}rem)`
}

/* https://stackoverflow.com/questions/10756313/javascript-
 jquery-map-a-range-of-numbers-to-another-range-of-numbers */
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}