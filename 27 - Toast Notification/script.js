const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const emptySpan = document.createElement('span')

const messages =[
    'message 1','message 2','message 3','message 4'
]

button.addEventListener('click', () => showToast())

function showToast(){
    toastEl = document.createElement('div')
    toastEl.classList.add('toast')
    toastEl.innerText = (messages[Math.floor(Math.random() * messages.length)]).toString()
    // ADD toast to toasts div
    if(toasts.hasChildNodes()){
        console.log('haschildren')
        toasts.insertBefore(toastEl,toasts.children[0])
    }
    else{
        toasts.appendChild(toastEl)
    }
    // REMOVE last child element after 5 seconds
    setTimeout(() => toasts.lastChild.remove(),5000)
}
    

