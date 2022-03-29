const inputEl = document.querySelector('input')
// const listItemEls = document.querySelectorAll('.item')
const items = JSON.parse(localStorage.getItem('items'))

if(items){
    items.forEach(item => addItem(item.text,item.completed))
}

inputEl.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter'){
        e.preventDefault()
        addItem(inputEl.value)
        updateLS()
    }
})

// function used from example
//https://www.codegrepper.com/code-examples/javascript/insert+after+first+child+javascript
function insertAfter(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

function addItem(text,isComplete){
    let item = document.createElement('p')
    item.className = 'item'
    item.innerText = text
    insertAfter(item,inputEl)
    inputEl.value = ''
    if(isComplete){
        item.classList.add('line-through')
    }

    item.addEventListener('click', (e) =>{
        console.log(e.button)
        if(e.button === 0){
            item.classList.toggle('line-through')
        }      
        updateLS()     
    })
    item.addEventListener('contextmenu', (e) =>{
        e.preventDefault()
        if(e.target.classList.contains('line-through')){
        item.remove()
        }
        updateLS()
    })

}

function updateLS(){
    const listItemEls = document.querySelectorAll('.item')
    const listItems = []
    listItemEls.forEach(item =>{
        listItems.push({
            text: item.innerText,
            completed: item.classList.contains('line-through')
        })
    })
    
    localStorage.setItem('items', JSON.stringify(listItems))
}