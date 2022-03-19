const counter = document.querySelector('.counter')
const final = document.querySelector('.final')
const numbers = document.querySelectorAll('.nums span')
const replay = document.querySelector('#replay')


runAnimation()

function resetDOM(){
    counter.classList.remove('hide')
    final.classList.remove('show')

    numbers.forEach((num) =>{
        num.classList.value = ''
    })
    numbers[0].classList.add('in')
}

function runAnimation(){
    numbers.forEach((num,i) =>{
        const nextToLast = numbers.length - 1
        
        num.addEventListener('animationend', (e)=>{
            if(e.animationName === 'goIn' && i !== nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
                console.log(num)
            }
            else if(e.animationName === 'goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            }
            else{
                counter.classList.add('hide')
                final.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', () =>{
    resetDOM()
    runAnimation()
})