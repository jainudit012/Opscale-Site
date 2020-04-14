const startNumber = document.getElementById('start__count')
const endNumber = document.getElementById('end__count')

const numMastHeads = 3

const mastHeads = []
let jj
for(jj=0;jj<numMastHeads;jj++){
    mastHeads.push(document.getElementById(`mast-${jj+1}`))
}

const mastPaginators = []
for(jj=0;jj<numMastHeads;jj++){
    mastPaginators.push(document.getElementById(`paginator__progress-${jj+1}`))
}

let mastSelected

const mastAutoSelector = () => {
    switch(mastSelected){
        case 2:
            mastPaginators[2].click()
            break
        case 3:
            mastPaginators[0].click()
            break
        default:
            mastPaginators[1].click()
    }
}

let mastSelctorTimer = window.setInterval(mastAutoSelector, 7000)

mastPaginators.forEach(paginator => {
    const paginatorNum = parseInt(paginator.id.split('-')[1])

    paginator.addEventListener('click', e => {
        mastSelected = paginatorNum
        clearInterval(mastSelctorTimer)
        if(!e.isTrusted){
            mastSelctorTimer = window.setInterval(mastAutoSelector, 7000)
        }
    
        startNumber.innerHTML = `0${paginatorNum}`

        addClass(mastPaginators[paginatorNum-1], 'paginator__current-progress')
        removeClassFromMultiple(mastPaginators.filter((_, index)=> index!==(paginatorNum-1)), 'paginator__current-progress')

        removeClass(mastHeads[paginatorNum-1], 'hideabs')
        addClassToMultiple(mastHeads.filter((_, index)=> index!==(paginatorNum-1)), 'hideabs')

        if(paginatorNum !== mastPaginators.length){
            removeClass(startNumber, 'paginator__greyed')
            addClass(endNumber, 'paginator__greyed')
        }else {
            removeClass(endNumber, 'paginator__greyed')
            addClass(startNumber, 'paginator__greyed')
        }
    })
})
