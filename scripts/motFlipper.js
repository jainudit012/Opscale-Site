const motCardsWrapper = document.getElementById('mot__cards__wrapper')
const motFlipperData = loadElementsToArray('mot__card-', motCardsWrapper)

const motNextBtn = document.getElementById('mot__card-fwd')
const motPrevBtn = document.getElementById('mot__card-bck')

const mobileMotNextBtn = null
const mobileMotPrevBtn = null

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
}catch(ex){
    console.log(ex)
}

