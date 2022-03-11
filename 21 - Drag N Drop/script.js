const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

// DRAG functions
function dragStart(){
    console.log('drag start')
    // This "empty" element from nodelist "empties"
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible',10)
}

function dragEnd(){
    // This "empty" element from nodelist "empties"
    this.className = 'fill'
    console.log('drag end')
}



function dragOver(e){
    e.preventDefault()
    console.log('drag over')
}

function dragEnter(e){
    e.preventDefault()
    // This "empty" element from nodelist "empties"
    this.className += ' hovered'
    console.log('drag enter')
}

function dragLeave(){
    // This "empty" element from nodelist "empties"
    this.className = "empty"
    console.log('drag leave')
}

function dragDrop(){
    // This "empty" element from nodelist "empties"
    this.className = 'empty'
    this.append(fill)
    console.log('drag drop')
}