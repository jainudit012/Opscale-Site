const startNumber = document.getElementById('start__count')
const endNumber = document.getElementById('end__count')

const numMastHeads = 3

const mastHeads = []
for(let i=0;i<numMastHeads;i++){
    mastHeads.push(document.getElementById(`mast-${i+1}`))
}

const mastPaginators = []
for(let i=0;i<numMastHeads;i++){
    mastPaginators.push(document.getElementById(`paginator__progress-${i+1}`))
}

const mobilePagainatorUp = document.getElementById('mobile-paginator-1')
const mobilePagainatorDown = document.getElementById('mobile-paginator-2')

let mastSelected = 1
let autoSelectionCancel = false

const mastAutoSelector = () => {
    autoSelectionCancel = false
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
        if(!autoSelectionCancel && !e.isTrusted){
            mastSelctorTimer = window.setInterval(mastAutoSelector, 7000)
        }
    
        startNumber.innerHTML = `0${paginatorNum}`

        if(window.innerWidth > 800 && window.outerWidth > 800){
            addClass(mastPaginators[paginatorNum-1], 'paginator__current-progress')
            removeClassFromMultiple(mastPaginators.filter((_, index)=> index!==(paginatorNum-1)), 'paginator__current-progress')
        }else {
            switch (paginatorNum){
                case 2 : {
                    removeClass(mobilePagainatorUp, 'mobile-paginator-disabled')
                    removeClass(mobilePagainatorDown, 'mobile-paginator-disabled')
                    break
                }
                case 3 : {
                    removeClass(mobilePagainatorUp, 'mobile-paginator-disabled')
                    addClass(mobilePagainatorDown, 'mobile-paginator-disabled')
                    break
                }
                default : {
                    addClass(mobilePagainatorUp, 'mobile-paginator-disabled')
                    removeClass(mobilePagainatorDown, 'mobile-paginator-disabled')
                }
            }
        }

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

mobilePagainatorUp.addEventListener('click', ()=> {
    autoSelectionCancel = true
    switch(mastSelected){
        case 3: {
            mastPaginators[1].click()
            break
        }
        default: {
            mastPaginators[0].click()
        }
    }
})

mobilePagainatorDown.addEventListener('click', ()=>{
    autoSelectionCancel = true
    switch(mastSelected){
        case 1: {
            mastPaginators[1].click()
            break
        }
        default: {
            mastPaginators[2].click()
        }
    }
})
