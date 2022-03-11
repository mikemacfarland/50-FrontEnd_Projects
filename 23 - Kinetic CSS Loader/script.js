const loadingEl = document.querySelector('.loading')

function loading(){
    if(loadingEl.innerHTML === '...loading...'){
        loadingEl.innerHTML = 'loading'
    }
    else {
        loadingEl.innerHTML+='.'
        loadingEl.prepend('.')
    }
}

// Interval for function to run
setInterval(() =>loading(), 500)