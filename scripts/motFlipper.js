let motCardsWrapper 
let motFlipperData
let motNextBtn
let motPrevBtn
let mobileMotNextBtn
let mobileMotPrevBtn

if(window.location.pathname !== '/about.html'){
    motCardsWrapper = document.getElementById('mot__cards__wrapper')
    motFlipperData = loadElementsToArray('mot__card-', motCardsWrapper)

    motNextBtn = document.getElementById('mot__card-fwd')
    motPrevBtn = document.getElementById('mot__card-bck')

    mobileMotNextBtn = document.getElementById('mot__mpaginator-fwd')
    mobileMotPrevBtn = document.getElementById('mot__mpaginator-bck')
}else {
    motCardsWrapper = document.getElementById('about__mot__cards-box')
    motFlipperData = loadElementsToArray('about__mot__card-', motCardsWrapper)

    motNextBtn = document.getElementById('mot__card-fwd')
    motPrevBtn = document.getElementById('mot__card-bck')
}


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

    if(window.location.pathname !== '/about.html'){
        mobileMotNextBtn.addEventListener('click', ()=>{
            motNextBtn.click()
        })
    
        mobileMotPrevBtn.addEventListener('click', ()=>{
            motPrevBtn.click()
        })
    }

}catch(ex){
    console.log(ex)
}

