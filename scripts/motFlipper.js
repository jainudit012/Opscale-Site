const motCardsWrapper = document.getElementById('mot__cards__wrapper')
const motFlipperData = loadElementsToArray('mot__card-', motCardsWrapper)

const motNextBtn = document.getElementById('mot__card-fwd')
const motPrevBtn = document.getElementById('mot__card-bck')

const mobileMotNextBtn = document.getElementById('mot__mpaginator-fwd')
const mobileMotPrevBtn = document.getElementById('mot__mpaginator-bck')

const motClassConfig = {
    frontClass: 'mot__cards--front',
    backClass: 'mot__cards--back',
    nextClass: 'mot__cards--next',
    disabledPaginationClass: 'mot__disabled-paginator',
    mobileDisabledPaginationClass: 'mobile-paginator-disabled',
    nextBtn: motNextBtn,
    backBtn: motPrevBtn,
    mobileNextBtn: mobileMotNextBtn,
    mobileBackBtn: mobileMotPrevBtn,
    slideAnimationClass: 'slideOut'
}

try{
    otherPaginate(motFlipperData.items, motClassConfig, null)

    mobileMotNextBtn.addEventListener('click', ()=>{
        motNextBtn.click()
    })

    mobileMotPrevBtn.addEventListener('click', ()=>{
        motPrevBtn.click()
    })

}catch(ex){
    console.log(ex)
}

