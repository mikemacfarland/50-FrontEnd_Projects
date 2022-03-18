const body = document.querySelector('body')
const addNoteBtn = document.querySelector('.add-note')

// const notes = JSON.parse(localStorage.getItem('notes'))
// console.log(notes)

//AddNote Button Event
addNoteBtn.addEventListener('click', () => createNote(''))

function createNote(text = ''){
    const note = document.createElement('div')
    note.classList.add('note')
    // need to access and set transfomrm, left, top and textarea width and height
    note.style.transform = ''
    note.style.left = ''
    note.style.top = ''
    taHeight = ''
    taWidth = ''
    note.innerHTML = `<div class="controls" > 
                            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                        <div class="main ${text ? "" : "hidden"}">${text}</div>
                        <textarea id="note" class="${text ? "hidden" : ""}" style="height:${taHeight}px; width:${taWidth}px">${text}</textarea>`
    
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    //Note Control Buttons Events
    deleteBtn.addEventListener('click', () => {
        note.remove()
        storeNotes()
    })

    editBtn.addEventListener('click', () =>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
        main.style.width = textArea.style.width
        main.style.height = textArea.style.height
        main.innerText = textArea.value
        storeNotes()
    })
    moveNote(note)
    body.appendChild(note)
    storeNotes()
}

//Note move function handling mousedown,mouseup,mousemove events to move note around
function moveNote(item){
    isDown = false
    isUp = true
    move = false
    
    //Mouse down setting
    item.addEventListener('mousedown', (e) => {
        isDown = true
        isUp = false

        // may need for each loop selecting notes and setting them to z-index 0 unless they are the selected note
        if(e.target.classList.contains('controls')){
            item.style.transform = `translate(-${e.offsetX}px,-${e.offsetY}px)`
            item.style.left = `${e.clientX}px`
            item.style.top = `${e.clientY}px`

            //may need function locking move into div element, it jumps out when moving too fast
            //Mouse move setting
            item.addEventListener('mousemove', (e) =>{
                if(isDown === true && isUp === false && e.target.classList.contains('controls')){
                    item.style.left = `calc(${e.clientX}px)`
                    item.style.top = `${e.clientY}px`
                }
            })
        }
        
        // Mouse up setting
        window.addEventListener('mouseup', () =>{
            move = false
            isDown = false
            isUp = true
            storeNotes()
        })
        
    })
}

function storeNotes(){
    let notes = document.querySelectorAll('.note')

    notes.forEach(note =>{
        localStorage.setItem('notesText', JSON.stringify(note.querySelector('textArea').value))
    })
    // console.log(notes)
    // localStorage.setItem('notesText', JSON.stringify())
    // localStorage.setItem()
    
}
