const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const emptySpan = document.createElement('span')

const messages =[
    'Hello There','This will dissapear','Javascript is cool','This is a notification'
]

button.addEventListener('click', () => showToast())


//this could easily be split into another function that pulls in specified messages based on logic(instead of unrealistic random messages)
function showToast(){
    // DEFINE new div element inside function (otherwise it will try to define the one that has already been used)
    toastEl = document.createElement('div') 
    toastEl.classList.add('toast')
    toastEl.innerText = (messages[Math.floor(Math.random() * messages.length)])
    // ADD toast to toasts div
    if(toasts.hasChildNodes()){
        console.log('haschildren')
        toasts.insertBefore(toastEl,toasts.children[0])
    }
    else{
        toasts.appendChild(toastEl)
    }
    // REMOVE last child element after 5 seconds
    setTimeout(() => toasts.lastChild.remove(),6000)
}
    

